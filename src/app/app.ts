// import express = require('express');
import express from 'express';
import demo from './demo';
import label from './label';

const app: express.Application = express();
const servers = [...demo, ...label];
servers.forEach((server) => {
  app[server.method](server.url, server.callback);
});

app.listen(3001, () => {
  console.log('app is running');
});

export default app;
