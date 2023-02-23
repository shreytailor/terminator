import toast from 'react-hot-toast';

export function abortOperations() {
  toast.success('All scheduled operations have been aborted.', {
    position: 'bottom-center',
    style: {
      fontFamily: 'Poppins',
      fontWeight: '500',
      fontSize: '0.8rem',
    },
  });
}
