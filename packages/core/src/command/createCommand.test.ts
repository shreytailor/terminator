import { createCommand } from './createCommand';

const DEFAULT_TIME = 10000;

describe('Shutdown', () => {
  test('ActionPageTemplate with no extra parameters.', () => {
    const command = createCommand({
      type: 'shutdown',
    });
    expect(command).toEqual('shutdown /s');
  });

  test('ActionPageTemplate with only the time parameter.', () => {
    const command = createCommand({
      type: 'shutdown',
      after: DEFAULT_TIME,
    });
    expect(command).toEqual(`shutdown /s /t ${DEFAULT_TIME}`);
  });

  test('ActionPageTemplate with only the forced parameter being false.', () => {
    const command = createCommand({
      type: 'shutdown',
      forced: false,
    });
    expect(command).toEqual('shutdown /s');
  });

  test('ActionPageTemplate with only the forced parameter being true.', () => {
    const command = createCommand({
      type: 'shutdown',
      forced: true,
    });
    expect(command).toEqual('shutdown /s /f');
  });

  test('ActionPageTemplate with the time parameter and the forced parameter being true.', () => {
    const command = createCommand({
      type: 'shutdown',
      forced: true,
      after: DEFAULT_TIME,
    });
    expect(command).toEqual(`shutdown /s /f /t ${DEFAULT_TIME}`);
  });
});

describe('Restart', function () {
  test('Restart with no extra parameters.', () => {
    const command = createCommand({
      type: 'restart',
    });
    expect(command).toEqual('shutdown /r');
  });

  test('Restart with only the time parameter.', () => {
    const command = createCommand({
      type: 'restart',
      after: DEFAULT_TIME,
    });
    expect(command).toEqual(`shutdown /r /t ${DEFAULT_TIME}`);
  });

  test('Restart with only the forced parameter being false.', () => {
    const command = createCommand({
      type: 'restart',
      forced: false,
    });
    expect(command).toEqual('shutdown /r');
  });

  test('Restart with only the forced parameter being true.', () => {
    const command = createCommand({
      type: 'restart',
      forced: true,
    });
    expect(command).toEqual('shutdown /r /f');
  });

  test('Restart with the time parameter and the forced parameter being true.', () => {
    const command = createCommand({
      type: 'restart',
      forced: true,
      after: DEFAULT_TIME,
    });
    expect(command).toEqual(`shutdown /r /f /t ${DEFAULT_TIME}`);
  });
});
