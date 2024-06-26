import React from 'react'
import FollowData from '../api/follow.json'

function Notification({show, usersData}) {
  return (
    <div>
      <div
        style={{ left: show == true ? "4.8%" : "-50%" }}
        className="w-[25%] bg-white h-[100vh] flex-col transition-all fixed flex left-[-50%] top-0 rounded-r-2xl shadow-xl">
        <div className="w-full overflow-scroll">
         <h1 className='text-[25px] p-5 font-bold'>Notifications</h1>
         <div className='h-[10vh] border-b-2 px-5 flex justify-between items-center hover:bg-gray-200 pb-3 cursor-pointer'>
            <div className='flex items-center gap-4'>
                <img className='h-[50px] rounded-full w-[50px]' src='https://pixlr.com/images/index/ai-image-generator-one.webp'></img>
                <div>
                <h2 className='font-semibold'>Follow Requests</h2>
                <h2>dipika-0001</h2></div>
            </div>
            <i class="fa fa-chevron-right cursor-pointer" aria-hidden="true"></i>
         </div> 
         <div className=''>
            <h2 className='p-5 font-bold'>Today</h2>
        { FollowData.map((i)=>   <div className='h-[10vh] border-b-2 px-5 flex justify-between items-center hover:bg-gray-100 pb-3 cursor-pointer gap-4'>
            <div className='flex items-center gap-4'>
                <img className='h-[50px] rounded-full w-[50px]' src={i.dp}></img>
                <div>
                <h2 className='font-semibold'>{i.username}</h2>
                <h2>Aryan</h2></div>
            </div>
            <button className='border-[1px] w-[100px] h-8 rounded-lg bg-gray-200 font-semibold'>Following</button>
         </div> )}
         </div>
         <div className=''>
            <h2 className='p-5 font-bold'>This Week</h2>
         {FollowData.map((i)=>  <div  className='h-[10vh] px-5 flex justify-between items-center hover:bg-gray-100 pb-3 cursor-pointer gap-4'>
            <div className='flex items-center gap-4'>
                <img className='h-[50px] rounded-full w-[50px]' src={i.dp}></img>
                <div>
                <h2 className='font-semibold'>{i.username}</h2>
                <h2>Aryan</h2></div>
            </div>
            <button className='border-[1px] w-[100px] h-8 rounded-lg bg-gray-200 font-semibold'>Following</button>
         </div> )}
        
         </div>
         <div className=''>
            <h2 className='p-5 font-bold'>This Month</h2>
           { FollowData.map((i)=> <div className='h-[10vh] px-5 flex justify-between items-center hover:bg-gray-100 pb-3 cursor-pointer gap-4'>
            <div className='flex items-center gap-4'>
                <img className='h-[50px] rounded-full w-[50px]' src={i.dp}></img>
                <div>
                <h2 className='font-semibold'>{i.username}</h2>
                <h2>Aryan</h2></div>
            </div>
            <button className='border-[1px] w-[100px] h-8 rounded-lg bg-gray-200 font-semibold'>Following</button>
         </div> )}
        </div>
         <div className=''>
            <h2 className='p-5 font-bold'>Earlier</h2>
           
        { FollowData.map((i)=> <div className='h-[10vh] border-b-2 px-5 flex justify-between items-center hover:bg-gray-100 pb-3 cursor-pointer gap-4'>
            <div className='flex items-center gap-4'>
                <img className='h-[50px] rounded-full w-[50px]' src ={i.dp}></img>
                <div>
                <h2 className='font-semibold'>aryan_123</h2>
                <h2>Aryan</h2></div>
            </div>
            <button className='border-[1px] w-[100px] h-8 rounded-lg bg-gray-200 font-semibold'>Following</button>
         </div> )}
        
         </div>
        </div>
       </div>
    </div>
  )
}
export default Notification