var Vue = require("vue");

console.log(candidateData);

Vue.component("side-menu", {
  data: function() {
    return { candidates: candidateData }
  },
  template: `
<nav class="side-menu">
  <ul>
    <li v-for="c in candidates">
      <router-link :to="'/candidate/' + c.id">{{c.name}}</router-link>
    </li>
  </ul>
</nav>
  `
})