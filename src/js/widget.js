// require("./lib/social");
// require("./lib/ads");
// var track = require("./lib/tracking");

require("component-responsive-frame/child");

var $ = require("./lib/qsa");
var details = $.one(".details");

var onClick = function() {
  var name = this.getAttribute("data-name");
  var mug = this.querySelector(".mugshot").src;
  var summary = this.getAttribute("data-summary");
  var video = this.getAttribute("data-video") ? `
  <div class="video-container">
    <iframe src="//players.brightcove.net/1509317113/BJvNJNM1g_default/index.html?videoId=${this.getAttribute("data-video")}&autoplay=true" allowfullscreen webkitallowfullscreen mozallowfullscreen></iframe>
  </div>
  ` : `<img src="${mug}" class="mug">`;
  details.innerHTML = `
    ${video}
    <h2>${name}</h2>
    <p class="summary">
      ${summary}
  `
};

$(".mug-container").forEach(el => el.addEventListener("click", onClick));