"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var todo_json_1 = __importDefault(require("./data/todo.json"));
var tags_json_1 = __importDefault(require("./data/tags.json"));
var formulas_json_1 = __importDefault(require("./data/formulas.json"));
var formulas1_json_1 = __importDefault(require("./data/formulas1.json"));
var app = express();
app.get('/users', function (request, response) {
    response.send([
        {
            key: '1',
            name: 'Mike1',
            id: 32,
            picture: {
                "large": "https://randomuser.me/api/portraits/men/75.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
            },
        },
        {
            key: '2',
            name: 'John',
            id: 42,
            picture: {
                "large": "https://randomuser.me/api/portraits/men/75.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
            },
        },
    ]);
});
app.get('/intblfml/v1/plugins/intblfml/todo', function (request, response) {
    response.send(todo_json_1.default);
});
app.get('/intblfml/v1/tags', function (request, response) {
    response.send(tags_json_1.default);
});
app.get('/intblfml/v1/plugins/intblfml/documents/2964/question/372303/intable-formulas', function (request, response) {
    response.send(formulas_json_1.default);
});
app.get('/intblfml/v1/plugins/intblfml/documents/2964/question/372242/intable-formulas', function (request, response) {
    response.send(formulas1_json_1.default);
});
app.post('/intblfml/v1/question/372303/answer', function (request, response) {
    response.send({});
});
app.post('/intblfml/v1/question/372242/answer', function (request, response) {
    response.send({});
});
app.listen(3001, function () {
    console.log('app is running');
});
