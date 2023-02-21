import express from 'express';
import { makeRouter } from './makeRouter';

const server = express();
const port = process.env.PORT || 5556;

// For accepting JSON data in the POST endpoints.
server.use(express.json());

server.use('/api', makeRouter());

server.listen(port, () => {
  console.log(`Terminator is running on Port ${port}.`);
});
