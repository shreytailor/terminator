import { HibernateParams, RestartParams, ShutdownParams } from '../types';

export interface Scheduler {
  scheduleShutdown: (params: ShutdownParams) => void;
  scheduleRestart: (params: RestartParams) => void;
  scheduleHibernation: (params: HibernateParams) => void;
  abortTasks: () => void;
}
