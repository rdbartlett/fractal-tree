var drawNewTree = require('./js/drawNewTree')
var state = require('./js/initialState')
var sliders = require('./js/sliders')
var colorPicker = require('./js/colorPicker')

var canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// if(window.innerWidth < 500){ canvas.height = window.innerHeight - 200; }

sliders.setup(canvas, state); // set up sliders and listeners on them
colorPicker(state);
console.log(state);
drawNewTree(canvas, state);