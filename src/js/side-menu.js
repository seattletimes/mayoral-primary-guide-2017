var Vue = require("vue");

var clone = function(obj) {
  var o = {};
  for (var k in obj) o[k] = obj[k];
  return o;
}

var candidates = candidateData.map(o => Object.create(o));

Vue.component("side-menu", {
  data: function() {
    return { 
      candidates,
      questions: [],
      mode: "candidates"
    }
  },
  template: require("./_side-menu.html")
})