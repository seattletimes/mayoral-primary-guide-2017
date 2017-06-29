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
<div>
  <h1>{{ candidate.name }}</h1>
  <ul class="questions">
    <li v-for="q in candidate.questions">
      <div class="question">{{q.question}}</div>
      <blockquote class="answer">{{q.answer}}</blockquote>
    </li>
  </ul>
</div>
  `
});

module.exports = CandidateView;