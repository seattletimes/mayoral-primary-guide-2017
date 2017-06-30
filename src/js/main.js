var $ = require("./lib/qsa");
var dot = require("./lib/dot");

var Router = require("./router");
var router = new Router();

var viewContainer = $.one(".view-container");

var templates = {
  candidate: dot.compile(require("./_candidate.html")),
  candidateChooser: dot.compile(require("./_candidate-chooser.html")),
  question: dot.compile(require("./_question.html")),
  questionChooser: dot.compile(require("./_question-chooser.html"))
};

var lookup = {
  candidate: {},
  question: {}
};

window.candidateData.forEach(c => lookup.candidate[c.id] = c);
window.questionData.forEach(q => lookup.question[q.id] = q.text);

router.onhit = function(e) {
  var matcher = new RegExp(`^#!?/?${e.url}/?`);
  $("a").forEach(function(a) {
    var href = a.getAttribute("href");
    if (matcher.test(href)) {
      a.classList.add("active");
    } else {
      a.classList.remove("active");
    }
  });
}

router.add("candidates", function() {
  viewContainer.innerHTML = templates.candidateChooser({ candidates: window.candidateData });
});

router.add("questions", function() {
  var questions = window.questionData.filter(q => q.standalone);
  viewContainer.innerHTML = templates.questionChooser({ questions });
});

router.add("candidates/:id", function(e) {
  var candidate = lookup.candidate[e.params.id];
  console.log(candidate);
  viewContainer.innerHTML = templates.candidate({ candidate, questions: lookup.question });
});
router.add("question/:id", p => console.log("question", p));