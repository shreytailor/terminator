import { makeErrorToast, makeSuccessToast } from './toast';
import axios from 'axios';

export async function handleShutdown({
  delay,
  forceClose,
}: {
  delay: string;
  forceClose: boolean;
}): Promise<boolean> {
  if (delay === '') {
    makeErrorToast('Please enter a numerical value for delay.');
    return false;
  }

  await axios.post('/api/shutdown', {
    after: Number(delay) * 60,
    forced: forceClose,
  });
  makeSuccessToast('Shutdown has been scheduled!');
  return true;
}

export async function handleRestart({
  delay,
  forceClose,
}: {
  delay: string;
  forceClose: boolean;
}): Promise<boolean> {
  if (delay === '') {
    makeErrorToast('Please enter a numerical value for delay.');
    return false;
  }

  await axios.post('/api/restart', {
    after: Number(delay) * 60,
    forced: forceClose,
  });
  makeSuccessToast('Restart has been scheduled!');
  return true;
}

export async function handleHibernation() {}

export async function handleAbort() {
  await axios.post('/api/abort');
  makeSuccessToast('All pending operations have been aborted.');
}
