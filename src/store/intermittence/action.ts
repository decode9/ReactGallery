import { SHOW_LOADER } from './action-types';
import { actionObject } from '../../utils';

export const showLoader = (show: boolean) => actionObject(SHOW_LOADER, show);