import React from 'react'
// import RefsArray from './refs-array'
// import RefsFunc from './refs-func'
// import { EventData2 } from './event-data'
// import MessageBox from './state-func'
import {userContext} from './context'
import Header from './context-header'


export default function App(){
  return (
    <userContext.Provider value={'Tom Jerry'}>
      <Header/>
    </userContext.Provider>
    )
}
