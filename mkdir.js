#!/usr/bin/env node --use_strict

require('./helper')
var fs   = require('fs').promise

function* mkdir() {
    console.log(process.argv[2] +'\n');
    yield fs.mkdir(process.argv[2], parseInt('0777', 8));
}

module.exports = mkdir




