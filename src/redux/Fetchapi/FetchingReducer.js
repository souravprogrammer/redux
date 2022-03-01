import { requestData ,successData, faliuertData, REQUEST_DATA, DATA_SUCCESS, DATA_FALIUER } from "./FetchAction";
import axios from   "axios"

// making reducer for request

const initialState  = {
    loading : true ,
    user : [] ,
    error : ''
}

// this reducer is going to link with re store 
export const FetchDataReducer = (state = initialState , action = {})=>{
      
      switch(action.type){
        case REQUEST_DATA :
            return {
                loading  : true ,
            } 
        case DATA_SUCCESS : 
        return {
            loading : false ,
            user  : action.payload ? action.payload : ["no data"]
        }
        case DATA_FALIUER : 
            return {
                loading : false ,
                error : action.payload ? action.payload : ["error in fetching..."]
            }
            default :
            return state

      }

}

export const FetchUserAction = ()=>{

    return (dispatch) =>{

        axios.get("https://jsonplaceholder.typicode.com/users").then (data=>{
          console.log(data.data)
           dispatch(successData(data.data))

        }).catch(error=>{

            dispatch(faliuertData(error))
           
        })
    }
}