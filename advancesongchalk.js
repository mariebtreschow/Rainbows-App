
var fs = require('fs');
var chalk = require('chalk');

function readSong(song) {
  fs.readFile(song, function(err, data) {
    var array = data.toString().split('\n');

    function printRandomColor(string) {
      var randomNumber = Math.floor(Math.random() * 10),
          chalkColor = [
            'red', 'green', 'blue', 'white', 'cyan', 'magenta', 'red', 'green', 'blue', 'red'
          ];

      console.log(chalk[chalkColor[randomNumber]](string));
      // dynamic version of: console.log(colors.red(string))
    }

    for (var i = 0; i < array.length; i++) {
      printRandomColor(array[i]);
    }
  });
}

for (var i = 2; i < process.argv.length; i++) {
  readSong(process.argv[i]);
}
