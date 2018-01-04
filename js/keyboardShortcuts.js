var Mousetrap = require('mousetrap')

function setup(sliders){
  Mousetrap.bind('q', function() { sliders.inc(0); });
  Mousetrap.bind('w', function() { sliders.inc(1); });
  Mousetrap.bind('e', function() { sliders.inc(2); });
  Mousetrap.bind('r', function() { sliders.inc(3); });
  Mousetrap.bind('t', function() { sliders.inc(4); });
  Mousetrap.bind('y', function() { sliders.inc(5); });
  Mousetrap.bind('a', function() { sliders.dec(0); });
  Mousetrap.bind('s', function() { sliders.dec(1); });
  Mousetrap.bind('d', function() { sliders.dec(2); });
  Mousetrap.bind('f', function() { sliders.dec(3); });
  Mousetrap.bind('g', function() { sliders.dec(4); });
  Mousetrap.bind('h', function() { sliders.dec(5); });
  Mousetrap.bind('1', function() { loadPreset(0); });
  Mousetrap.bind('2', function() { loadPreset(1); });
  Mousetrap.bind('3', function() { loadPreset(2); });
  Mousetrap.bind('4', function() { loadPreset(3); });
}


var preset = [
  {repeats: 1, depth: 10, offset: 14, size: 6, skew: 7, opacity: 1}
, {repeats: 2, depth: 9, offset: 44, size: 6, skew: -26, opacity: 1}
, {repeats: 6, depth: 14, offset: 60, size: 20, skew: 0, opacity: 0.13}
, {repeats: 5, depth: 9, offset: 180, size: 20, skew: -60, opacity: 0.25}
];

document.getElementById('keybindings').addEventListener('click', function(){
  alert("Keybindings:\nPress 1-4 keys for presets.\nMove slider 1 with Q+A, slider 2 with W+A, etc.");
});

module.exports = {
  setup
}