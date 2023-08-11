import React from 'react'
// import './style.css'
import { Header,Content,Footer } from './func-components'
import Calendar from './class-components'

function App() {
  // แบบที่ 1
  // return (
  //  [<Header />,<Content />,<Footer />]
  // )
  // แบบที่ 2
    return(
      <>
        <Header/>
        <p><center><Calendar/></center></p> 
        <Content/>
        <Footer/>
      </>
    )

}

export default App;
