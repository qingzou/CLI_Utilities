#!/usr/bin/env node --use_strict

require('./helper')
let fs = require('fs').promise

function* echo() {
    // Use 'yield' in here
    //console.log(yield fs.readFile(__filename, console.log))
     console.log(process.argv[2])
}

module.exports = echo
