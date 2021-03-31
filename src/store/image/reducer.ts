import { GET_IMAGES_ASYNC, SET_IMAGE } from './action-types';
import { AnyAction } from 'redux';

const initialState = {
  data: [],
  page: 1,
  single: null
}

export default (state = initialState, { type, payload }: AnyAction) => {
  switch (type) {
    case GET_IMAGES_ASYNC:
      return { ...state, ...payload };
    case SET_IMAGE:
      return { ...state, ...{ single: payload } }
    default:
      return state;
  }
}

