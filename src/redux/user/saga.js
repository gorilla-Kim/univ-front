import {takeLatest, call, put, delay, spawn} from '@redux-saga/core/effects';
import {Action} from "./redux";
import {appCreators} from "../actionCreators";

export default function* () {
    // to use Action Creator
    yield takeLatest(Action.Types.SET_TOAST_MESSAGE, function* ({message}) {
        yield put(appCreators.updateState({user: message}))
        yield spawn(function* () {
            yield delay(4000);
            yield put(appCreators.updateState({user: ''}))
        })
    });
}