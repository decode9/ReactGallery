import { call } from "redux-saga/effects";
import { HOST_URL } from "./path";
import axios from 'axios';

function* fetchService(url: string, method: string = 'GET', params: any = null) {

  const objectRequest: any = {
    method,
    url: `${HOST_URL}${url}`,
    data: params,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    }
  }

  const response = yield call(axios, objectRequest);
  const responseBody = response.data;

  return responseBody;
}

export default fetchService;
