var Vue = require("vue");

var lookup = require("./lookups");

var CandidateView = Vue.component("candidate-view", {
  computed: {
    candidate: function() {
      return lookup.candidate[this.$route.params.id];
    }
  },
  methods: {
    getQuestion: id => lookup.question[id]
  },
  template: require("./_candidate-view.html")
});

module.exports = CandidateView;