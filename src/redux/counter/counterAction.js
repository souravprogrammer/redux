import React from "react";

export const INCREMENT = "INCREMENT"
export const DECREMENT = "DECREMENT"
export const NAME = "name"


export  const increment = ()=>{
    return {
        type : INCREMENT
    }
} 
export const decrement = ()=>{
    return {
        type : DECREMENT
    }
}
export const changeName = ()=>{

    return {
        type : NAME
    }
}