import * as dotenv from 'dotenv';
import * as path from 'path';
import * as express from 'express';
import { makeRouter } from './router';
import { CommandGeneratorImpl, SchedulerImpl } from '@terminator/core';

// Setting up the environment variables.
dotenv.config();

const server = express();
const isDevEnv = process.env.NODE_ENV === 'development';
const port = process.env.PORT || 5556;

// For accepting JSON data in the POST endpoints.
server.use(express.json());

if (isDevEnv) {
  server.use(
    '/',
    express.static(path.join(__dirname, '../', '../', 'client', 'dist'))
  );
}

server.use('/api', makeRouter(new SchedulerImpl(new CommandGeneratorImpl())));

server.listen(port, () => {
  if (isDevEnv) {
    console.log(`Terminator (server) is running on Port ${port}.`);
    return;
  }

  console.log(`Terminator (client) is served on Port ${port}.`);
});
