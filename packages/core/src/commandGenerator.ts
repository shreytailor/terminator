import { RestartParams, ShutdownParams } from './types';

export interface CommandGenerator {
  generateShutdownCommand: (params: ShutdownParams) => string;
  generateRestartCommand: (params: RestartParams) => string;
  generateAbortCommand: () => string;
}

export class CommandGeneratorImpl implements CommandGenerator {
  private readonly COMMAND_PREFIX = 'shutdown';

  generateShutdownCommand(params: ShutdownParams) {
    return this.appendTimeAndForceOptions(`${this.COMMAND_PREFIX} /s`, params);
  }

  generateRestartCommand(params: RestartParams) {
    return this.appendTimeAndForceOptions(`${this.COMMAND_PREFIX} /r`, params);
  }

  generateAbortCommand() {
    return `${this.COMMAND_PREFIX} /a`;
  }

  private appendTimeAndForceOptions(
    command: string,
    params: ShutdownParams | RestartParams
  ) {
    if (params.forced) {
      command += ` /f`;
    }

    if (params.after) {
      command += ` /t ${params.after}`;
    }

    return command;
  }
}
