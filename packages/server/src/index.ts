import express from 'express';
import * as path from 'path';
import { makeRouter } from './router';

const server = express();
const port = process.env.PORT || 5555;

// For accepting JSON data in the POST endpoints.
server.use(express.json());

server.use('/', express.static(path.join(__dirname, '../frontend')));
server.use('/api', makeRouter());

server.listen(port, () => {
  console.log(`Terminator is running on Port ${port}.`);
});