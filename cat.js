#!/usr/bin/env node --use_strict

require('./helper')
var fs   = require('fs').promise

var index = 0;

function* cat() {
    let data = yield fs.promise.readFile(process.argv[2], 'utf8')
    process.stdout.write(data)
}

module.exports = cat
