import React from 'react'

function Sidebar() {
  return (
    <>
      <div className='w-20  d-flex flex-column gap-3'>
        <div className='d-flex m-3'>
            <img src="src\assets\img\text.png" className='text-img' alt="" />
        </div>
        <div className='d-flex flex-column gap-4 m-3 '> 
            <div><i class="bi bi-house-door-fill"></i>Home</div>
            <div><i class="bi bi-search"></i>Search</div>
            <div><i class="bi bi-compass"></i>Explore</div>
            <div><i class="bi bi-camera-reels"></i>Reels</div>
            <div><i class="bi bi-chat"></i>Message</div>
            <div><i class="bi bi-chat"></i>Notification</div>
            <div><i class="bi bi-plus-square"></i>Create</div>
            <div><i class="bi bi-person-circle"></i>Profile</div>
            <div><i class="bi bi-list"></i>More</div>
        </div>
      </div>
    </>
    
  )
}

export default Sidebar