import React from 'react'
import Slider from '../Components/Slider'
import FollowData from '../api/follow.json'

function ViewArchive() {
  return (
    <div className='flex'>
     <Slider></Slider>
      <div className='h-[100vh] w-[80%]  flex  flex-col  items-center justify-center  gap-3'>
       <div className='h-[5vh] w-[90%]  flex gap-2 items-center '>
       <i class="fa fa-arrow-left" aria-hidden="true"></i>
       <label className='text-[20px]'>Archive</label>
       </div>
       <div className=' flex gap-1 items-center'>
       <i class="fa fa-circle-o " aria-hidden="true"></i>
       <label className='text-[13px] '>STORIES</label>
       </div>
       <div className='h-[1px] w-[89%] bg-gray-400 flex items-center justify-center'>
        <div className='h-[1px] w-[70px] bg-black'></div>
       </div>
       {/* <i class="fa fa-spinner fa-2x pt-[25px]" aria-hidden="true"></i>
       <div className='h-[15vh] w-[50%] flex flex-col items-center justify-center pt-10 '>
        <h1 className='text-[22px]'>Add to your story</h1>
        <p className='w-[90%] text-center'> Keep your stories in your archive after they disappear, so you can look back on your memories. Only you can see what's in your archive.</p>
       </div> */}
       <div className='h-[60vh] w-full  flex flex-wrap gap-2 pt-[20px]'>
      {FollowData.map((i)=> <div className='h-[60vh] w-[24%] bg-black'>
        <img className='h-full w-full object-cover object-center' src={i.dp}></img>
      </div>)}
      </div>
      </div>
      </div>
  )
}

export default ViewArchive