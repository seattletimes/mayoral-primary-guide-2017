// require("./lib/social");
// require("./lib/ads");
// var track = require("./lib/tracking");

require("component-responsive-frame/child");

var $ = require("./lib/qsa");
var details = $.one(".details");

var onClick = function() {
  var name = this.getAttribute("data-name");
  var mug = "./assets/grump.jpg";
  var summary = this.getAttribute("data-summary");
  details.innerHTML = `
    <img src="${mug}" class="mug">
    <h2>${name}</h2>
    <p class="summary">
      ${summary}
  `
};

$(".mug-container").forEach(el => el.addEventListener("click", onClick));