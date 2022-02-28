import redux, { createStore } from "redux"
import { counterReducer , rootReducer , nameReducer} from "./counter/CounterReducer"


export const store = createStore(rootReducer)