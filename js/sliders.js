var noUiSlider = require('nouislider')

var drawNewTree = require('./drawNewTree')

var sliders

function setup(canvas, state){
  sliders = document.getElementsByClassName('sliders');

  noUiSlider.create(sliders["repeats"], {
    start: 6, tooltips: true, step: 1, range: { 'min': 1, 'max': 12 }
  });
  noUiSlider.create(sliders["depth"], {
    start: 5, tooltips: true, step: 1, range: { 'min': 1, 'max': 20 }
  });
  noUiSlider.create(sliders["offset"], {
    start: 25, tooltips: true, step: 1, range: { 'min': 0, 'max': 180 }
  });
  noUiSlider.create(sliders["size"], {
    start: 12, tooltips: true, step: 1, range: { 'min': 0, 'max': 25 }
  });
  noUiSlider.create(sliders["skew"], {
    start: 0, tooltips: true, step: 1, range: { 'min': [-90], 'max': [90] }
  });
  noUiSlider.create(sliders["opacity"], {
    start: 1, tooltips: true, step: 0.025, range: { 'min': 0, 'max': 1 }
  });

  for ( var i = 0; i < sliders.length; i++ ) {
    sliders[i].noUiSlider.on('update', e => {
      updateState(state);
      drawNewTree(canvas, state);
    });
  }
}

function inc(index){
  sliders[index].noUiSlider.set(Number(sliders[index].noUiSlider.get()) + sliders[index].noUiSlider.options.step);
}

function dec(index){
  sliders[index].noUiSlider.set(Number(sliders[index].noUiSlider.get()) - sliders[index].noUiSlider.options.step);
}

function updateState(state){
  var size = sliders["size"].noUiSlider.get()

  Object.assign(state, {
    repeats: Number(sliders["repeats"].noUiSlider.get()),
    depth: sliders["depth"].noUiSlider.get(),
    offset: Number(sliders["offset"].noUiSlider.get()),
    size: size,
    height: size,
    width: size,
    skew: Number(sliders["skew"].noUiSlider.get()),
    alpha: Number(sliders["opacity"].noUiSlider.get()),
  })
}

function updateSliders(state){
  sliders["depth"].noUiSlider.set(state.depth)
  sliders["repeats"].noUiSlider.set(state.repeats)
  sliders["offset"].noUiSlider.set(state.offset)
  sliders["size"].noUiSlider.set(state.height)
  sliders["skew"].noUiSlider.set(state.skew)
  sliders["opacity"].noUiSlider.set(state.alpha)
}


module.exports = {
  setup,
  updateSliders,
  inc,
  dec
}
