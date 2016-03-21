#!/usr/bin/env node --use_strict

require('./helper')
var fs   = require('fs').promise

function* cat() {
    console.log(process.argv[2] +'\n');
    let data = yield fs.readFile(process.argv[2], 'utf8')
    process.stdout.write(data +'\n')
}

module.exports = cat
