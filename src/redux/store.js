import redux, { createStore , applyMiddleware } from "redux"
import logger  from "redux-logger"
import { counterReducer , rootReducer , nameReducer } from "./counter/CounterReducer"




/**
 * ${ways to use a create sore function }
 *createStore(Reduser)
 *createStore(Reduser, middleware)
 *createStore(Reduser,initialState  , middleware)
 *createStore(Reduser, initialState)
 */
export const store = createStore(rootReducer ,applyMiddleware(logger))