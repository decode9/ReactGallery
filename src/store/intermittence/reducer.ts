import { SHOW_LOADER } from './action-types';
import { DispatchProps } from '../../interfaces';
import { AnyAction } from 'redux';

const initialState = {
  loader: false
}

export default (state = initialState, { type, payload }: AnyAction) => {
  switch (type) {
    case SHOW_LOADER:
      return { ...state, loader: payload };
    default:
      return state;
  }
}

