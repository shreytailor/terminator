import { CommandGeneratorImpl, SchedulerImpl } from '@terminator/core';
import * as express from 'express';
import * as path from 'path';
import { makeRouter } from './router';

const server = express();
const port = process.env.PORT || 5556;

// For accepting JSON data in the POST endpoints.
server.use(express.json());

server.use(
  '/',
  express.static(path.join(__dirname, '../', '../', 'client', 'dist'))
);
server.use('/api', makeRouter(new SchedulerImpl(new CommandGeneratorImpl())));

server.listen(port, () => {
  console.log(`Terminator is running on Port ${port}.`);
});
