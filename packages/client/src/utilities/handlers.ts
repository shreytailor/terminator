import toast from 'react-hot-toast';

export function handleAbort() {
  toast.success('All scheduled operations have been aborted.', {
    position: 'bottom-center',
    style: {
      fontFamily: 'Poppins',
      fontWeight: '500',
      fontSize: '0.8rem',
    },
  });
}
