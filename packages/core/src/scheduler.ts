import { exec } from 'child_process';
import { CommandGenerator } from './commandGenerator';
import { RestartParams, ShutdownParams } from './types';

export interface Scheduler {
  scheduleShutdown: (params: ShutdownParams) => void;
  scheduleRestart: (params: RestartParams) => void;
  abortTasks: () => void;
}

export class SchedulerImpl implements Scheduler {
  constructor(private readonly commandGenerator: CommandGenerator) {}

  scheduleShutdown(params: ShutdownParams): void {
    exec(this.commandGenerator.generateShutdownCommand(params));
  }

  scheduleRestart(params: RestartParams): void {
    exec(this.commandGenerator.generateRestartCommand(params));
  }

  abortTasks(): void {
    exec(this.commandGenerator.generateAbortCommand());
  }
}
