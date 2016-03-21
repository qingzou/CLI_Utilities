#!/usr/bin/env node --use_strict

require('./helper')
require('songbird')
var fs   = require('fs').promise
var path = require('path')

function* rm_r(rootPath) {
    let stat = yield fs.stat(rootPath);
    if (!stat.isDirectory()) {
        let data = yield fs.unlink(rootPath, function(err) {
             if (err) throw err;
             console.log('successfully deleted file ' + rootPath);
         })

         console.log('come here')
         return [data]
    } else {
         var rmPromises = []
         let fileNames = yield fs.readdir(rootPath)
         for (var f in fileNames) {
             let filePath = path.join(rootPath, fileNames[f])
             let promise = yield rm_r(filePath)
             console.log('come here 2')
             rmPromises.push(promise)
         }
         let data = yield fs.rmdir(rootPath)
         rmPromises.push(promise)
         console.log('come here 3')
    }
    //return yield Promise.all(rmPromises)
}

function* rm() {
    var file = process.argv[2]
    yield rm_r(file)
}

module.exports = rm