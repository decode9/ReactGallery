import { GET_IMAGES, SET_IMAGE } from './action-types';
import { actionObject } from '../../utils';

export const getImages = (page: any) => actionObject(GET_IMAGES, page);
export const setImage = (data: any) => actionObject(SET_IMAGE, data);