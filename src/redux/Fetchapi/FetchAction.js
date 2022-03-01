export const REQUEST_DATA  = " REQUEST_DATA" 
export const DATA_SUCCESS = "DATA_SUCCESS"
export const DATA_FALIUER = "DATA_FALIUER"


// these all the action related to fetching data action
export const requestData = ()=>{
        return {
            type : REQUEST_DATA
        }

}
export const successData = (data = [])=>{
    return {
        type : DATA_SUCCESS,
        payload : data
    }
    
}
export const faliuertData = (data)=>{
    return {
        type : DATA_FALIUER,
        payload : data
    }
    
}