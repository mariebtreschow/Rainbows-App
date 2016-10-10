
var colors = require('colors');


var amazingPoem = ["I knew not who had wrought with skill so fine",
    "What I beheld nor by what laws of art",
    "He had created life and love and heart",
    "On canvas from mere color curve and line",
    "Silent I stood and made no move or sign",
    "Not with the crowd but reverently apart",
    "Nor felt the power my rooted limbs to start",
     "But mutely gazed upon that face divine"];




function poem(array) {
  for (var i=0; i<array.length; i++) {
      console.log(colors.random(array[i]));
  }
}

  setInterval(poem, 1000, amazingPoem);
