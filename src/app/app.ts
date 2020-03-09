// import express = require('express');
import express from 'express';

import todo from './data/todo.json';
import tags from './data/tags.json';
import formulas from './data/formulas.json';
import formulas1 from './data/formulas1.json';

const app: express.Application = express();

app.get('/users', (request, response) => {
  response.send([
    {
      key: '1',
      name: 'Mike',
      id: 32,
      picture: {
        large: 'https://randomuser.me/api/portraits/men/75.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/75.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/75.jpg'
      }
    },
    {
      key: '2',
      name: 'John',
      id: 42,
      picture: {
        large: 'https://randomuser.me/api/portraits/men/75.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/75.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/75.jpg'
      }
    }
  ]);
});

app.get('/intblfml/v1/plugins/intblfml/todo', (request, response) => {
  response.send(todo);
});

app.get('/intblfml/v1/tags', (request, response) => {
  response.send(tags);
});

app.get(
  '/intblfml/v1/plugins/intblfml/documents/2964/question/372303/intable-formulas',
  (request, response) => {
    response.send(formulas);
  }
);

app.get(
  '/intblfml/v1/plugins/intblfml/documents/2964/question/372242/intable-formulas',
  (request, response) => {
    response.send(formulas1);
  }
);

app.post('/intblfml/v1/question/372303/answer', (request, response) => {
  response.send({});
});

app.post('/intblfml/v1/question/372242/answer', (request, response) => {
  response.send({});
});

app.listen(3001, () => {
  console.log('app is running');
});
