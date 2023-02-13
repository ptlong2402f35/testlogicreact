import logo from './logo.svg';
import './App.css';
import React from 'react';
import ListWrapper from './Components/ListWrapper';
import { useEffect, useState } from 'react';
function getFetch(api,callback)
{
  fetch(api)
    .then((response)=>{
      return response.json()
    })
    .then((data)=>
    {
      callback(data)
    })
}
const Context = React.createContext()
function App() {
  const [data,setData] = useState([])
  const [userData,setUserData] = useState([])
  useEffect(()=>{
    const apiData = 'http://localhost:3000/data'
    const apiUser = 'http://localhost:3000/user'
    getFetch(apiData,setData)
    getFetch(apiUser,setUserData)
  },[])
  return (
    <Context.Provider value={{data,userData,getFetch,setData}}>
      <div className="App">
        <ListWrapper/>
      </div>
    </Context.Provider>
  );
}

export default App;
export {Context}
