var Vue = require("vue");

var lookup = require("./lookups");

var QuestionView = Vue.component("question-view", {
  template: require("./_question-view.html"),
  props: ["candidates"],
  computed: {
    question: function() {
      return lookup.question[this.$route.params.id].text;
    }
  },
  methods: {
    answer: function(id) {
      var candidate = lookup.candidate[id];
      if (!candidate.questions) return "";
      var entry = candidate.questions.filter(q => q.question == this.$route.params.id).pop();
      return entry.answer;
    }
  }
});

module.exports = QuestionView;