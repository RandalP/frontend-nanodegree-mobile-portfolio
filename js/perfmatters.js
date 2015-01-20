// Measuring the Critical Rendering Path with Navigation Timing
// https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp
function logCRP() {
  var t = window.performance.timing,
    dcl = t.domContentLoadedEventStart - t.domLoading,
    complete = t.domComplete - t.domLoading;
    var stats = document.getElementById("crp-stats");
    stats.textContent = 'DCL: ' + dcl + 'ms, onload: ' + complete + 'ms';
}
/*
// Inline CSS after loading
// https://developers.google.com/speed/docs/insights/OptimizeCSSDelivery
function loadCss() {
  var h = document.getElementsByTagName('head')[0];
  var cssSources = ["css/style.css"];
  for (i in cssSources) {
    var l = document.createElement('link'); l.rel = 'stylesheet';
    l.href = cssSources[i];
    h.parentNode.insertBefore(l, h);
  }
}

loadCss();
*/
window.addEventListener("load", function(event) {
  logCRP();
});
