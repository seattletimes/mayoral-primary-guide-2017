var Vue = require("vue");

var lookup = {};
window.candidateData.forEach(c => lookup[c.id] = c);

var CandidateView = Vue.component("candidate-view", {
  computed: {
    candidate: function() {
      return lookup[this.$route.params.id];
    }
  },
  template:`
<div>This is a candidate view: {{ candidate.name }}</div>
  `
});

module.exports = CandidateView;