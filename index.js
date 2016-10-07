

var colors = require('colors');


//tells to listen to the terminal
//======================================

function rainbow(string) {
  console.log(colors.white(string));
  console.log(colors.yellow(string));
  console.log(colors.green(string));
  console.log(colors.cyan(string));
  console.log(colors.blue(string));
  console.log(colors.red(string));
  console.log(colors.magenta(string));
}

for (var i=2; i<process.argv.length; i++) {
  setInterval(rainbow, 1000, process.argv[i]);

}
