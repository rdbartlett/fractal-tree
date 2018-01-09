var conf = require('conf')
var drawNewTree = require('./js/drawNewTree')

var state = Object.assign({}, conf.initialState);

var sliders = require('./js/sliders')
var colorPicker = require('./js/colorPicker')
var keyboardShortcuts = require('./js/keyboardShortcuts')
var presets = require('./js/presets')

var canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

sliders.setup(canvas, state); // set up sliders and listeners on them
colorPicker(state);
drawNewTree(canvas, state);

presets.setup();
keyboardShortcuts.setup(sliders, state);
