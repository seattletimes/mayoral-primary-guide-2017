var $ = require("./lib/qsa");

var Vue = require("vue");
var Router = require("vue-router");
Vue.use(Router);

require("./side-menu");

var routes = [
  { path: "/", component: { template: "<div>Hello component</div>" }},
  { path: "/candidate/:id?", component: require("./candidate-view") },
  { path: "/question/:id?", component: require("./question-view") }
];

var router = new Router({ routes });

// master instance for components
var app = new Vue({ 
  data: {
    candidates: window.candidateData,
    questions: window.questionData
  },
  router
});
app.$mount("main.app")