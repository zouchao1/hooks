import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Test from './test'
import useContext from './utils/useContext'
import { data } from './utils/useState'

const AppContext=React.createContext()
function Counter(){
  let {state,setState}= useContext(AppContext)
  return (<div>
   <p> {state.number}</p>
   <button onClick={()=>setState({number:state.number+1})}>+</button>
  </div>)
}
// function App(){
//   let [state,setState]=useState({number:0})
//   return <AppContext.Provider value={{state,setState}}>
//     <div>
//       <Counter/>
//     </div>
//     </AppContext.Provider>
// }


export default function render() {
  data.index = 0
  ReactDOM.render(
    <App />
    // <Test/>
    ,
    document.getElementById('root')
  );
}

render()
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

