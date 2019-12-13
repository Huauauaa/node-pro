"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
app.get('/users', function (request, response) {
    response.send([
        {
            id: 1
        }
    ]);
});
app.listen(3001, function () {
    console.log('app is running');
});
