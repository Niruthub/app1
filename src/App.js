import React from 'react'
// import RefsArray from './refs-array'
// import RefsFunc from './refs-func'
// import { EventData2 } from './event-data'
// import MessageBox from './state-func'
import {userContext} from './context'
import Header from './context-header'
import Content from './context-content'
import Header2 from './context-header2'
import { Component2 } from 'react'
import Content2 from './context-content2'


export default function App(){
  let [user,setUser] = React.useState('');
  return (
    <userContext.Provider value={[user,setUser]}>
      <Header2/>
      <Content2/>
    </userContext.Provider>
    )
}
