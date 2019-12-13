"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
app.get('/users', function (request, response) {
    response.send([
        {
            key: '1',
            name: 'Mike',
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
app.listen(3001, function () {
    console.log('app is running');
});
