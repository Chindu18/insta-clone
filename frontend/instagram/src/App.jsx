import React from 'react'
import Sidebar from './sidebar'


function App() {
  return (
    <>
    <div className='d-flex vh-100 '>
       <Sidebar />
       <div className='w-50 bg-primary'>main</div>
       <div className='w-30 bg-secondary'>message</div>
    </div>
    
    </>
  )
}

export default App