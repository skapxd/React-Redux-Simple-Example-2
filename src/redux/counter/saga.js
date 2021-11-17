import { takeEvery, takeLatest, call, put } from "redux-saga/effects";

// export function* getNotes() {
//   try {

//     // const response = yield call(API.getNotes);
//     // yield put(response_notestudent(response));
//   } catch (e) {
//     // yield put(error(e));
//   }
// }

function* getAPIPlaceholder() {
  console.log('se esta ejecutando la saga');
  try {
    const responseAsync = () =>  fetch("https://jsonplaceholder.typicode.com/todos$token=" ).then(
      ({data}) => data
    );

    const response = call(responseAsync)



    yield put({
      type: "f_response",
      payload: response,
    });
  } catch (error) {
    console.log("ocurrio un error en la saga: ", error);
  }
}

export default function* rootSaga() {
  yield takeEvery("f_get", getAPIPlaceholder);
}
