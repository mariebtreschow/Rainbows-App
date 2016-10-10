var colors = require('colors');



function rainbow(string) {
  console.log(colors.random(string));

}

for (var i=2; i<process.argv.length; i++) {

  setInterval(rainbow, 1000, process.argv[i]);

}
