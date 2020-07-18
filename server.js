const express = require('express');
const bodyParser = require('body-parser');
const CORS = require('cors');
const server = express();

const actionRouter = require('./routes/actionRoutes');
const projectRouter = require('./routes/projectRoutes');

server.use(bodyParser.json());
server.use(CORS());

server.get('/', (req, res) => {
  res.send(`<h2>Node API Challenge.</h2>`);
});

server.use('/api/actions', actionRouter);
server.use('/api/projects', projectRouter);

module.exports = server;
