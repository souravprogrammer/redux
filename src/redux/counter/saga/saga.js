import {takeEvery , takeLatest ,put, call, take, fork, all } from "redux-saga/effects"
import { decrement, DECREMENT, increment, INCREMENT } from "../counterAction"
import { delay } from "redux-saga/effects"
import axios from "axios"
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

// this get call method is represent that when we have to manually manage everything error handling or data manuplation while returning we 
// make our own async function to handel that , 
// .. but if we don't  want it we will directly pass axious/fetch  with args it it directlly it will return us the desired output that we wanted
const getCall = (x,some)=>{
    console.log(">>",some)
    return axios.get(x).then(data=>{
        
    return data.data
   }).catch(error=> error )
 }

function * incrementCount(action){

    console.log(`Async INCRIMENT CALLED ;   ${action}`)

    //yield delay(2000)

   


   const data = yield call(axios.get,"https://jsonplaceholder.typicode.com/users")
   console.log(data)
   

    // yield put( {
    //     type : `${INCREMENT}1`
    // })
    yield  console.log("action canceleld ....")

}

const decrementConut  = (action)=>{

    console.log(`called ACTION : ${DECREMENT}` ) ;


}

export  function * watcherIncrement(){

    yield takeLatest(INCREMENT, incrementCount)
    // yield take(INCREMENT)
    // yield fork(incrementCount) // FORK WILL CALL THE PROMICE BUT WILL NOT BLOCK ANY  ANY THING .. MEANS IT WILL CONTINUE TO RENDER AFTER FORM...
    // console.log("AFTER FORK")
    // // yield 3
    // console.log("AFTER FORK 3")

}
export function *watcherDectriment(){
    yield takeLatest(DECREMENT,decrementConut)
}


// this saga watcher connecting all the watcher together like combineReducer( { name : reducername , name2 : reducername2    }  ) returns a rootreducer 
// this rootsaga  all yeld function execute all the watcher at once so we don't have to manually do that
export function* rootSaga() {
    yield all([
      watcherIncrement(),
      watcherDectriment()
    ])
  }