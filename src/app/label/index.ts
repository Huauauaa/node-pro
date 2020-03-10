import { Request, Response } from 'express';
import todo from './todo.json';
import tags from './tags.json';
import formulas from './formulas.json';
import formulas1 from './formulas1.json';

export default [
  {
    url: '/intblfml/v1/plugins/intblfml/todo',
    method: 'get',
    callback: (request: Request, response: Response) => {
      response.send(todo);
    }
  },
  {
    url: '/intblfml/v1/tags',
    method: 'get',
    callback: (request: Request, response: Response) => {
      response.send(tags);
    }
  },
  {
    url: '/intblfml/v1/plugins/intblfml/documents/2964/question/372303/intable-formulas',
    method: 'get',
    callback: (request: Request, response: Response) => {
      response.send(formulas);
    }
  },
  {
    url: '/intblfml/v1/plugins/intblfml/documents/2964/question/372242/intable-formulas',
    method: 'get',
    callback: (request: Request, response: Response) => {
      response.send(formulas1);
    }
  },
  {
    url: '/intblfml/v1/question/372303/answer',
    method: 'post',
    callback: (request: Request, response: Response) => {
      response.send({});
    }
  },
  {
    url: '/intblfml/v1/question/372242/answer1',
    method: 'post',
    callback: (request: Request, response: Response) => {
      response.send({});
    }
  }
];
