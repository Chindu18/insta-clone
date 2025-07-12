import React, { useState ,useEffect} from 'react'

function Profile() {
    const [profile,setprofile]=useState([]);
    useEffect(()=>{
fetch('http://localhost:3000/profile').
    then((data)=>data.json()).
    then((data)=>{
        setprofile(data);
     }).catch((err)=>{
        console.log('Error fetching profile:', err);       
    })},[])


   const pro=profile.map((data)=>{
    return(
        <>
        <div className='d-flex flex-column mx-5 '>
              <div className='d-flex justify-content-between  mt-5'>
                    <div key={data.id} className='d-flex gap-2 align-items-center '>
                        <img className='profile-img rounded-circle' src={data.avatar} alt="" />
                        <div>{data.username}</div>
                    </div>
                    <div>
                        <small className='text-info '>switch</small>
                    </div>
             </div>
                <div className='d-flex justify-content-between mt-4'>
                    <div className='text-secondary'>suggested for you</div>
                    <small className='text-black'>see all</small>
                </div>
                <div className='links mt-4'>
                    <div ><a href="#">About</a> , <a href="#">Help</a> , <a href="#">Press</a> , <a href="#">Api</a> , <a href="#">Jobs</a> , <a href="#">Privacy</a> , <a href="#">Terms</a></div>
                    <div> <a href="#">Location</a> , <a href="#">Language</a> , <a href="#">meta Verified</a></div>
                </div>
                <div className='text-secondary mt-4 '>
                    <small>© 2025 Instagram from Meta</small>
                </div>
        </div>
       
       
       
      
            

        </>
   
    )
   })

   return(
    <div>
        {pro}
    </div>
   )

}

export default Profile