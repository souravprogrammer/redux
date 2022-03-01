import React from "react";
import { combineReducers } from "redux";
import { INCREMENT , DECREMENT , increment , decrement, NAME } from "./counterAction";
// import  { combineReducers } from "redux"
import { FetchDataReducer } from "../Fetchapi/FetchingReducer"



const counterINitialStare = {
    count : 16 ,
    username : "sourav"
}

const countInitalState = {
    count : 10
}
const nameInitalState = {
    username : "manish"
}



// reduser fo counter handelboth increment and decremaent
export  const counterReducer = (state =  countInitalState , action = {})=>{

    switch(action.type){

        case `${INCREMENT}1` :
            return {
                ...state,
                count : state.count + 1 

            }

            case DECREMENT :
                return {
                    ...state,
                    count : state.count - 1 

                }
            default : 
            return state
    
    }

}
export const nameReducer = (state = nameInitalState , action = {})=>{

    switch(action.type){
        case NAME : 
        return {
        
            username : "value updated"
        }

        default :
        return state 
    }


}





const rootReducer = combineReducers(
    {
        counter: counterReducer, 
        name: nameReducer ,
        fetch : FetchDataReducer
    })

export {rootReducer}
