/*

A simple HTML hashbang router with basic param support

*/

var $ = require("./lib/qsa");

var Router = function(broadcast) {
  this.routes = [];
  window.addEventListener("hashchange", this.onHashUpdate.bind(this));
  requestAnimationFrame(() => this.onHashUpdate());
};

Router.prototype = {
  onHashUpdate() {
    var url = this.normalizePath(window.location.hash);
    if (!url) return;
    this.activateLinks(url);
    for (var i = 0; i < this.routes.length; i++) {
      var route = this.routes[i];
      if (route.re.test(url)) {
        var params = route.parse(url);
        var event = { url, params };
        this.onhit(event);
        return route.callback(event);
      }
    }
    this.onmiss(url);
  },
  // catch-all event handlers
  onmiss(url) { console.log(`No matching route found for "${url}"`) },
  onhit(e) { console.log(e) },
  // paths should not split on 
  add(path, callback) {
    var segments = this.normalizePath(path).split("/");
    var names = [];
    var converted = segments.map(function(segment) {
      if (segment[0] == ":") {
        names.push(segment.slice(1));
        return `([^/]+)`;
      }
      return segment;
    });
    var source = converted.join("/");
    var re = new RegExp("^/?" + source + "/?$");
    var parse = function(path) {
      var match = re.exec(path);
      var params = {};
      names.forEach(function(n, i) {
        params[n] = match[i + 1];
      });
      return params;
    }
    var route = { re, parse, callback }
    this.routes.push(route);
    return route;
  },
  normalizePath(p) {
    return p.replace(/^\/|^#!?\/?|\/$/g, "");
  },
  activateLinks(url) {
    var matcher = new RegExp(`^#!?/?${url}/?$`);
    $("a").forEach(function(a) {
      var href = a.getAttribute("href");
      if (url && matcher.test(href)) {
        a.classList.add("active");
      } else {
        a.classList.remove("active");
      }
    });
  }
}

module.exports = Router;