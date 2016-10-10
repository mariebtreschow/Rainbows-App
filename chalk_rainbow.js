var chalk = require('chalk');


var lyrics = ['She was more like a beauty queen from a movie scene',
'I said dont mind but what do you mean I am the one',
'Who will dance on the floor in the round',
'She said I am the one who will dance on the floor in the round',
'She told me her name was Billie Jean, as she caused a scene',
'Then every head turned with eyes that dreamed of being the one',
'Who will dance on the floor in the round'];



function chalkRainbow(string) {

var random = Math.floor(Math.random() * 10);
var colors = ['red', 'green', 'blue', 'white', 'cyan', 'magenta', 'red', 'green', 'blue'];

console.log(chalk[colors[random]](string));

}

for (var i = 0; i < lyrics.length; i++) {
  chalkRainbow(lyrics[i]);
}
