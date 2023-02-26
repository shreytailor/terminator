import { Router } from 'express';
import { Scheduler } from '@terminator/core';
import { RestartSchema, ShutdownSchema } from './schemas';

export function makeRouter(scheduler: Scheduler) {
  const router = Router();

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

  router.post('/abort', (_request, response) => {
    scheduler.abortTasks();
    response.send();
  });

  return router;
}
