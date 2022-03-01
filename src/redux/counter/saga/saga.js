import {takeEvery , takeLatest ,put } from "redux-saga/effects"
import { increment, INCREMENT } from "../counterAction"
import { delay } from "redux-saga/effects"
// import {  } from "redux-saga/effects"


/*
so this is where we are going to ceate our saga 

1 . so when you dispatch an action we need to catch it in the middle so, we need a watcher 
 so we are going to pass a function in run but it is not going to be anormal function it is going to be a 
  genrator function 

  2. take every catches an action . but never use the same action in put to dispatch other wise it will fall into the infinite loop 
   3 . there are some effects in redux saga . 
      * put
      * all
      * call
      * fork


*/


function * incrementCount(action){

    console.log(action)
    yield delay(5000)
    // yield put( {
    //     type : `${INCREMENT}1`
    // })
    yield  console.log("kt gya.. tera nhi pdhe ga ye ab")

}

export  function * watcherIncrement(){

    yield takeLatest(INCREMENT , incrementCount )

    yield "soruav"
  

}