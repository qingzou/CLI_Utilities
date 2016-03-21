#!/usr/bin/env node --use_strict

require('./helper')
var fs   = require('fs').promise
var path = require('path')
let _ = require('underscore')

function* ls_r(rootPath) {
    let stat = yield fs.stat(rootPath);
    if (!stat.isDirectory()) {  //
        return [rootPath]
    } else {
         var lsPromises = []
         let fileNames = yield fs.readdir(rootPath)
         for (var f in fileNames) {
             let filePath = path.join(rootPath, fileNames[f])
             //console.log(filePath)
             let promise = yield ls_r(filePath)
             lsPromises.push(promise)
         }

    }
    return yield Promise.all(lsPromises)
}

function* ls() {
    let filePath = yield ls_r(process.argv[2])
    console.log(_.flatten(filePath))

}

module.exports = ls