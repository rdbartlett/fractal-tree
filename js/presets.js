var drawNewTree = require('./drawNewTree')
var sliders = require('./sliders')
var presets

function setup(){
  presets = [
    {repeats: 1,  depth: 7,  offset: 19,  size: 6,  skew: 7,   opacity: 0.7}
  , {repeats: 2,  depth: 9,  offset: 44,  size: 6,  skew: -26, opacity: 1}
  , {repeats: 6,  depth: 14, offset: 60,  size: 20, skew: 0,   opacity: 0.13}
  , {repeats: 5,  depth: 9,  offset: 180, size: 20, skew: -60, opacity: 0.25}
  , {repeats: 6,  depth: 9,  offset: 60,  size: 8,  skew: 0,   opacity: 0.6}
  , {repeats: 13, depth: 7,  offset: 90,  size: 11, skew: 0,   opacity: 0.5}
  , {repeats: 3,  depth: 7,  offset: 6,   size: 4,  skew: -90, opacity: 0.8}
  , {repeats: 4,  depth: 10, offset: 45,  size: 8,  skew: 90,  opacity: 0.4}
  , {repeats: 7,  depth: 11, offset: 90,  size: 13, skew: 0,   opacity: 0.5}
  ];

  document.getElementById('presetBtnA').addEventListener('click', function(){ load(0) });
  document.getElementById('presetBtnB').addEventListener('click', function(){ load(1) });
  document.getElementById('presetBtnC').addEventListener('click', function(){ load(2) });
  document.getElementById('presetBtnD').addEventListener('click', function(){ load(3) });
  document.getElementById('presetBtnE').addEventListener('click', function(){ load(4) });
  document.getElementById('presetBtnF').addEventListener('click', function(){ load(5) });
  document.getElementById('presetBtnG').addEventListener('click', function(){ load(6) });
  document.getElementById('presetBtnH').addEventListener('click', function(){ load(7) });
  document.getElementById('presetBtnI').addEventListener('click', function(){ load(8) });
}


function load(index){
  var state = {
    repeats:  presets[index].repeats,
    depth:    presets[index].depth,
    offset:   presets[index].offset,
    height:   presets[index].size,
    width:    presets[index].size,
    skew:     presets[index].skew,
    alpha:    presets[index].opacity,
  }

  // Object.assign(state, {
  //   repeats:  presets[index].repeats,
  //   depth:    presets[index].depth,
  //   offset:   presets[index].offset,
  //   height:   presets[index].size,
  //   width:    presets[index].size,
  //   skew:     presets[index].skew,
  //   alpha:    presets[index].opacity,
  // })

  sliders.updateSliders(state);
}

module.exports = {
  setup,
  load
}