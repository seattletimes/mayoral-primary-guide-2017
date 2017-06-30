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

var setViewAttr = v => document.body.setAttribute("data-view", v);

router.onhit = function(e) {
  var containerBounds = viewContainer.getBoundingClientRect();
  if (containerBounds.top < 0) viewContainer.scrollIntoView();
}

router.add("/candidates", function() {
  setViewAttr("candidate-list");
  viewContainer.innerHTML = templates.candidateChooser({ candidates: window.candidateData });
});

router.add("/questions", function() {
  setViewAttr("question-list");
  var questions = window.questionData.filter(q => q.standalone);
  viewContainer.innerHTML = templates.questionChooser({ questions });
});

router.add("/candidates/:id", function(e) {
  setViewAttr("candidate");
  var candidate = lookup.candidate[e.params.id];
  viewContainer.innerHTML = templates.candidate({
    candidate,
    questions: window.questionData,
    qLookup: lookup.question
  });
});

router.add("/question/:id", function(e) {
  setViewAttr("question");
  var id = e.params.id;
  var question = lookup.question[id];
  var candidates = window.candidateData;
  viewContainer.innerHTML = templates.question({ id, question, candidates });
});

router.add("/about", e => viewContainer.innerHTML = "This space intentionally left blank.");