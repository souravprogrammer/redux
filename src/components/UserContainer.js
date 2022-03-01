import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { faliuertData, requestData, successData } from '../redux/Fetchapi/FetchAction'
import axios from 'axios'
import { FetchUserAction } from '../redux/Fetchapi/FetchingReducer'

export default function UserContainer   () {
  const usersSelector =   useSelector(state => {
      console.log(state)
    return state.fetch})
    const userDispatcher = useDispatch()
    // fetching a data using api this use effect only calls once in a whole life time of a usea usercontainer
    useEffect(()=>{
        // this time fetching a data from a api using a THUNK library 
        // thunk library dose gives a ability to dispatcher to accept a function as an Action argument
       userDispatcher(FetchUserAction())
    },[]);
  return (
    <div>
        <h1>All user fettching using a api redux</h1>
        <ul>
           {
               usersSelector.loading ? <h1>loading...</h1> :
               usersSelector.error  ?  [usersSelector.error].map(  (err,index)=>  <h1 key ={index} >err</h1>  )
                :
               usersSelector.user.map(obj=>{
                return <li key = {obj.id} > {obj.name}</li>
               }) 
           }
        </ul>        
         </div>
  )
}
