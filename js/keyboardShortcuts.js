var Mousetrap = require('mousetrap')
var presets = require('./presets')

function setup(sliders, state){
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

  Mousetrap.bind('c', function() { toggleControlBoard(); });

  // Mousetrap.bind('1', function() { presets.load(0, state); });
  // Mousetrap.bind('2', function() { presets.load(1, state); });
  // Mousetrap.bind('3', function() { presets.load(2, state); });
  // Mousetrap.bind('4', function() { presets.load(3, state); });
  // Mousetrap.bind('5', function() { presets.load(4, state); });
  // Mousetrap.bind('6', function() { presets.load(5, state); });
  // Mousetrap.bind('7', function() { presets.load(6, state); });
  // Mousetrap.bind('8', function() { presets.load(7, state); });

  document.getElementById('keybindings').addEventListener('click', function(){
    alert("Keybindings:\nMove slider 1 with Q+A, slider 2 with W+A, etc.");
  });

  var tgl = true;

  function toggleControlBoard(){
    if(tgl){
      document.getElementById('controlsWrapper').style.setProperty('display', 'none');
      tgl = false;
    }
    else{
      document.getElementById('controlsWrapper').style.setProperty('display', 'block');
      tgl = true;
    }
  }
  document.getElementById('toggleControls').addEventListener('click', toggleControlBoard);
}


module.exports = {
  setup
}