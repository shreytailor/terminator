import toast, { ToastOptions } from 'react-hot-toast';

const toastOptions: ToastOptions = {
  position: 'bottom-center',
  style: {
    fontFamily: 'Poppins',
    fontWeight: '500',
    fontSize: '0.8rem',
  },
};

export function makeSuccessToast(message: string) {
  toast.success(message, toastOptions);
}

export function makeErrorToast(message: string) {
  toast.error(message, toastOptions);
}
