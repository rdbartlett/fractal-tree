var drawNewTree = require('./js/drawNewTree')
var state = require('./js/initialState')

var sliders = require('./js/sliders')
var colorPicker = require('./js/colorPicker')
var keyboardShortcuts = require('./js/keyboardShortcuts')
var presets = require('./js/presets')

var canvas = document.getElementById('canvas');
window.addEventListener('resize', function() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  drawNewTree(canvas, state);
});

sliders.setup(canvas, state); // set up sliders and listeners on them
colorPicker(state);
window.dispatchEvent(new UIEvent('resize'));

presets.setup();
keyboardShortcuts.setup(sliders, state);

