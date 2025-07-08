import React from 'react'
import Sidebar from './sidebar'
import Post from './Post'

function App() {
  return (
    <>
    <div className='d-flex vh-100 '>
      
       <div className='w-20'><Sidebar/></div> 
       <div className='w-50'><Post /></div>
       <div className='w-30 bg-secondary'>message</div>
    </div>
    
    </>
  )
}

export default App