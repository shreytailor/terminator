import { Scheduler } from './types';
import { exec } from 'child_process';
import { createCommand } from '../commands';
import { HibernateParams, RestartParams, ShutdownParams } from '../types';

export class WindowsScheduler implements Scheduler {
  scheduleShutdown(params: ShutdownParams): void {
    exec(
      createCommand({
        type: 'shutdown',
        ...params,
      })
    );
  }

  scheduleRestart(params: RestartParams): void {
    exec(
      createCommand({
        type: 'restart',
        ...params,
      })
    );
  }

  scheduleHibernation(params: HibernateParams): void {
    exec(
      createCommand({
        type: 'hibernate',
        ...params,
      })
    );
  }

  abortTasks(): void {
    exec(
      createCommand({
        type: 'abort',
      })
    );
  }
}
