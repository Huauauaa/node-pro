"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
app.get('/', function (request, response) {
    debugger
    console.log(1);
    response.send('Hello world.');
    console.log(2);
});
app.listen(3000, function () {
    console.log('app is running on port 3000');
});
