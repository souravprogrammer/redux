import redux, { createStore , applyMiddleware } from "redux"
import logger  from "redux-logger"
import { counterReducer , rootReducer , nameReducer } from "./counter/CounterReducer"

import thunk from "redux-thunk"
import  createSagaMiddleware from "redux-saga"
import { watcherIncrement ,watcherDectriment , rootSaga} from "./counter/saga/saga"

const sagaMiddleware = createSagaMiddleware()




// now am going to run someaga here using a run which i haven't  created yet

// sagaMiddleware.run();

/**
 * ${ways to use a create sore function }
 *createStore(Reduser)
 *createStore(Reduser, middleware)
 *createStore(Reduser,initialState  , middleware)
 *createStore(Reduser, initialState)
 */
export const store = createStore(rootReducer ,applyMiddleware(logger,thunk,sagaMiddleware))

sagaMiddleware.run(rootSaga)