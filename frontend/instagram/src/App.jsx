import React from 'react'
import Sidebar from './sidebar'
import Post from './Post'
import Profile from './profile'

function App() {
  return (
    <>
    <div className='d-flex vh-100 '>
      
       <div className='w-20'><Sidebar/></div> 
       <div className='w-50'><Post /></div>
       <div className='w-30'><Profile/></div>
    </div>
    
    </>
  )
}

export default App