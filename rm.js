#!/usr/bin/env node --use_strict

require('./helper')
require('songbird')
var fs   = require('fs').promise
var path = require('path')

function* rm_r(rootPath) {
     let fileNames = yield fs.readdir(rootPath)
     for (var f in fileNames) {
         let filePath = path.join(rootPath, fileNames[f])
         let stat = yield fs.stat(filePath)
         if(stat.isDirectory()) {
             yield rm_r(filePath)
             fs.rmdir(filePath)
         } else {
             yield fs.unlink(filePath)
         }

    }
    //return yield Promise.all(rmPromises)
}

function* rm() {
    var file = process.argv[2]
    yield rm_r(file)
    fs.rmdir(file)
}

module.exports = rm