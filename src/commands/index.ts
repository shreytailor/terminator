import { HibernateParams, RestartParams, ShutdownParams } from '../types';

type CommandConfigurationParams =
  | ({
      type: 'shutdown';
    } & ShutdownParams)
  | ({
      type: 'restart';
    } & RestartParams)
  | ({
      type: 'hibernate';
    } & HibernateParams)
  | {
      type: 'abort';
    };

export function createCommand(params: CommandConfigurationParams): string {
  let command = 'shutdown';

  switch (params.type) {
    case 'shutdown':
      command += ' /s';
      break;
    case 'restart':
      command += ' /r';
      break;
    case 'hibernate':
      command += ' /h';
      break;
    case 'abort':
      command += ' /a';

      // Early return if the 'abort' command is executed.
      return command;
  }

  // This condition checks if 'forced' property exists, and whether it's truthy.
  if (params.type !== 'hibernate' && params.forced) {
    command += ' /f';
  }

  if (params.after) {
    command += ` /t ${params.after}`;
  }

  return command;
}
