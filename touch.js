#!/usr/bin/env node --use_strict

require('./helper')
var fs   = require('fs').promise


function* touch() {
    console.log(process.argv[2] +'\n');
    let fd = yield fs.open(process.argv[2], 'r')
    yield fs.futimes(fd, new Date(), new Date());
}

module.exports = touch


