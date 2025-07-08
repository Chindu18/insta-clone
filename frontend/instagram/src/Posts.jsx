import React, { useEffect, useState } from 'react'

function Posts() {
  
  const [posts,setposts]=useState([])

  useEffect(()=>{
      
    fetch('http://localhost:3000/posts').
    then((response) => response.json()).
    then((data) => {
      setposts(data)
    }).
    catch((error) => {
      console.error('Error fetching posts:', error);
    });
  },[])
  const postss = posts.map((post) => {
    return (
      <div className='mt-2 d-flex flex-column' key={post.id}>
          <div className=' mb-1 d-flex align-items-center gap-2 '>
            <img className='profile-img rounded-circle' src={post.avatar} alt="profile pic" />
            <div className='ms-2'>{post.username}</div>
          </div>

          <div className='mb-1'>
            <img className='content-post' src={post.image} alt="content-post" />
          </div>

          <div className='mb-1'>
               <div className='d-flex justify-content-between'>
                  <div className='d-flex gap-2'>
                    <i class="bi bi-heart"></i>
                    <i class="bi bi-chat"></i>
                    <i class="bi bi-send"></i>
                  </div>
                  <div>
                  <i class="bi bi-bookmark"></i>
                  </div>
               </div>

          </div>
          <div className='mb-1'>
              {post.likes} likes..
          </div>

          <div className='mb-1'>
              {post.caption}
          </div>
          
      </div>
      
      
    );
  }
  );
 
  

  return(
    <div className='d-flex  flex-column align-items-center'> 
    {postss}
    </div>
    
  )
}

export default Posts