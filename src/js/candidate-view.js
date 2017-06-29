var Vue = require("vue");

var lookup = {};
window.candidateData.forEach(c => lookup[c.id] = c);

console.log(lookup);

var qLookup = {};
window.questionData.forEach(q => qLookup[q.id] = q);

var CandidateView = Vue.component("candidate-view", {
  computed: {
    candidate: function() {
      return lookup[this.$route.params.id];
    }
  },
  methods: {
    getQuestion: id => qLookup[id]
  },
  template: require("./_candidate-view.html")
});

module.exports = CandidateView;