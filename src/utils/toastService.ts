import { Toast } from 'native-base';


const showToast = (message: string | null = null, toastType: any, duration: number = 3000, extraMessage: string = '') => {
  Toast.show({
    text: message ? `${message} ${extraMessage}` : extraMessage,
    type: toastType,
    textStyle: { textAlign: 'center' },
    duration
  });
}

export default showToast;
