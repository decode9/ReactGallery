/* CONFIGURACION INICIAL DE REDUX SAGA */
/* INTEGRACION DE WATCHERS */
import { all, fork } from 'redux-saga/effects';
import { watchGetImages } from './image/saga';

export default function* rootSaga(){
    yield all([
        fork(watchGetImages)
    ])
}