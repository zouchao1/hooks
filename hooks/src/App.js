import React,{memo} from 'react';
import useState from './utils/useState'
import useCallback from './utils/useCallback'
import useMemo from './utils/useMemo' 
import useReducer from './utils/usereducer'
import useEffect from './utils/useEffect'
function Child({ data, addClick }) {
  console.log(1212)
  return <button onClick={addClick}>{data.num}</button>
}
Child= memo(Child)
function reducer(state,action){
  if (action.type==='add') {
    return state+1
  }else{
    return state
  }
}
function Counter() {
  let [state,dispatch] =useReducer(reducer,0)
  let [num, setNum] = useState(0)
  let [name, setName] = useState('zhangsan')
  let addClick = useCallback(() => setNum(num + 1) ,[num])
  let data = useMemo(()=>({num}),[num])
  useEffect(()=>{
    console.log(num,'num改变')
  },[num])
  return <div>
    <p>{state}</p>
    <button onClick={()=>{dispatch({type:'add'})}}>+</button><br/>
    <input value={name} onChange={(event) => { setName(event.target.value) }} />
    <Child data={data} addClick={addClick} />
  </div>
}

export default Counter;
