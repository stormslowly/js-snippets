'use strict';
/* global require, console, process*/
var api;
try {
  api = require('./javascript-api.sublime-completions.json');

} catch (e) {


  console.log('logs', e);
  process.exit(0);
}


var completions = api.completions;

var sc = completions.map(function(item) {
  return {
    'trigger': item[0],
    'contents': item[1]
  };
});

console.log('logs', sc);

api.completions = sc;

var fs = require('fs');

fs.writeFileSync('javascript-api.sublime-completions', JSON.stringify(api));
