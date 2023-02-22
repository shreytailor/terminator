import { Router } from 'express';
import { WindowsScheduler } from '@terminator/core';
import { HibernateSchema, RestartSchema, ShutdownSchema } from './schemas';

export function makeRouter() {
  const router = Router();
  const scheduler = new WindowsScheduler();

  router.post('/shutdown', (request, response) => {
    try {
      scheduler.scheduleShutdown(ShutdownSchema.parse(request.body));
      response.send();
    } catch {
      response.status(400).send();
    }
  });

  router.post('/restart', (request, response) => {
    try {
      scheduler.scheduleRestart(RestartSchema.parse(request.body));
      response.send();
    } catch {
      response.status(400).send();
    }
  });

  router.post('/hibernate', (request, response) => {
    try {
      scheduler.scheduleRestart(HibernateSchema.parse(request.body));
      response.send();
    } catch {
      response.status(400).send();
    }
  });

  router.post('/abort', (_request, response) => {
    scheduler.abortTasks();
    response.send();
  });

  return router;
}
