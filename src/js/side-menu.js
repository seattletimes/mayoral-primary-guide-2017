var Vue = require("vue");

Vue.component("side-menu", {
  props: ["candidates", "questions"],
  data: function() {
    return {
      mode: window.location.hash.indexOf("question") > -1 ? "questions" : "candidates"
    }
  },
  computed: {
    featured: function() {
      return this.questions.filter(q => q.standalone);
    }
  },
  template: require("./_side-menu.html")
})