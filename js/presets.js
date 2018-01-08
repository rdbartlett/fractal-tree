var drawNewTree = require('./drawNewTree')
var sliders = require('./sliders')
var presets

function setup(state){
  presets = [
    {repeats: 7,  depth: 11, offset: 90,  size: 13, skew: 0,   opacity: 0.5}
  , {repeats: 2,  depth: 9,  offset: 44,  size: 6,  skew: -26, opacity: 1}
  , {repeats: 6,  depth: 14, offset: 60,  size: 20, skew: 0,   opacity: 0.13}
  , {repeats: 5,  depth: 9,  offset: 180, size: 20, skew: -60, opacity: 0.25}
  , {repeats: 6,  depth: 9,  offset: 60,  size: 8,  skew: 0,   opacity: 0.6}
  , {repeats: 13, depth: 7,  offset: 90,  size: 11, skew: 0,   opacity: 0.5}
  , {repeats: 1,  depth: 10, offset: 14,  size: 6,  skew: 7,   opacity: 1}
  , {repeats: 3,  depth: 7,  offset: 6,   size: 4,  skew: -90, opacity: 0.8}
  ];

  document.getElementById('presetBtnA').addEventListener('click', function(){ load(0, state) });
  document.getElementById('presetBtnB').addEventListener('click', function(){ load(1, state) });
  document.getElementById('presetBtnC').addEventListener('click', function(){ load(2, state) });
  document.getElementById('presetBtnD').addEventListener('click', function(){ load(3, state) });
  document.getElementById('presetBtnE').addEventListener('click', function(){ load(4, state) });
  document.getElementById('presetBtnF').addEventListener('click', function(){ load(5, state) });
  document.getElementById('presetBtnG').addEventListener('click', function(){ load(6, state) });
  document.getElementById('presetBtnH').addEventListener('click', function(){ load(7, state) });
}


function load(index, state){
  Object.assign(state, {
    repeats:  presets[index].repeats,
    depth:    presets[index].depth,
    offset:   presets[index].offset,
    height:   presets[index].size,
    width:    presets[index].size,
    skew:     presets[index].skew,
    alpha:    presets[index].opacity,
  })

  // drawNewTree(canvas, state);

  sliders.updateSliders(state);
}

module.exports = {
  setup,
  load
}