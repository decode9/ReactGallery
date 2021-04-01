import { call, put, takeLatest } from 'redux-saga/effects';
import { actionObject, fetchService } from '../../utils';
import { showToast } from '../../utils';
import { list } from '../../utils/path';
import { SHOW_LOADER } from '../intermittence/action-types';
import { GET_IMAGES, GET_IMAGES_ASYNC } from './action-types';

function* getImagesAsync({ payload }: any) {
    try {
        yield put(actionObject(SHOW_LOADER, true));
        const { page, data } = payload
        const path = `${list}?page=${page}&limit=50`;
      
        const result = yield call(fetchService, path);

        yield put(actionObject(GET_IMAGES_ASYNC, { data: data.concat(result), page: page }))
        yield put(actionObject(SHOW_LOADER, false));
    } catch (error) {
        console.log(error)
        yield put(actionObject(SHOW_LOADER, false));
        showToast('Ha ocurrido un error intente de nuevo mas tarde', 'danger')
    }
}

export function* watchGetImages() {
    yield takeLatest(GET_IMAGES, getImagesAsync)
}

