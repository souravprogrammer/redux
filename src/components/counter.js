import React from 'react'
import { useDispatch, useSelector , connect , shallowEqual  } from 'react-redux'
import { increment , decrement ,changeName } from '../redux/counter/counterAction'

 function Counter(props) {


   const selector =     useSelector( store=>{
    return store.count
    } , shallowEqual)
//     const dispatcher  = useDispatch() 


console.log("rendering counter..")
  return (
    <div>
        <h1>hello its {props.name}</h1>
        <h1>count {props.count}</h1>
        <button  onClick={()=>{ props.setCount(increment)  }}  >increment</button>
        <button  onClick={()=>{ props.setCount(decrement)  }}  >decrement</button>
        <button  onClick={()=>{ props.setCount(changeName)  }}  >changeName</button>


    </div>
  )
}



// selector {can acchive using a use selector}
const maptopropscount = (  state=>{

    console.log(state)
    return {
        count : state.counter.count,
        name : state.name.username
    }
})
// dispatcher {can acchive using a useDispatch}

const maptopropsSetCount = (  dispatch=>{


    return {
        setCount : (action)=>{  dispatch(action())    }
    }
})



export default   connect(maptopropscount , maptopropsSetCount ) (Counter)



