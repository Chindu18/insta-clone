import React from 'react'

function Sidebar() {
  return (
    <>
  
       <div className='position-fixed  d-flex flex-column  gap-4 '>
          <div className='d-flex m-3 '>
              <img src="src\assets\img\text.png" className='text-img' alt="" />
          </div>
          <div className=' d-flex flex-column  gap-4 m-3 just'> 
              <div className='mb-2'><i className="bi bi-house-door-fill"></i>Home</div>
              <div className='mb-2'><i className="bi bi-search"></i>Search</div>
              <div className='mb-2'><i className="bi bi-compass"></i>Explore</div>
              <div className='mb-2'><i className="bi bi-camera-reels"></i>Reels</div>
              <div className='mb-2'><i className="bi bi-chat"></i>Message</div>
              <div className='mb-2'><i className="bi bi-chat"></i>Notification</div>
              <div className='mb-2'><i className="bi bi-plus-square"></i>Create</div>
              <div className='mb-2'><i className="bi bi-person-circle"></i>Profile</div>
              <div className='mb-2'><i className="bi bi-list"></i>More</div>
          </div>
        </div>
   
    
    </>
    
  )
}

export default Sidebar