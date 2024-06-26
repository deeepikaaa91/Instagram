import React, { useState } from 'react'
import FollowData from '../api/follow.json'
function Messanger({show, usersData}) {
    const [Messanger, setMessanger] = useState([])
  return (

    <div className='w-[25%] '>
      <div className="w-[25%]  h-[100vh] flex-col transition-all fixed flex top-0 rounded-r-2xl shadow-xl">
        <div className="w-[25%]   h-[100vh]   flex flex-col gap-3  fixed overflow-scroll ">
          
          <div className="">
            <div className="flex justify-between pt-10 px-6 items-center ">
              <h2 className="font-bold text-[22px]">deepikaaa<i class="fa fa-angle-down" aria-hidden="true"></i></h2>
              <i class="fa fa-pencil-square-o font-semibold cursor-pointer text-[25px]" aria-hidden="true"></i>
            </div>
          </div>
          <div className="">
            <div className="flex justify-between pt-10 px-6 items-center">
              <h2 className="font-bold text-[16px]">Messages</h2>
              <h2 className='font-semibold text-[16px] text-blue-500 cursor-pointer'>Request(1)</h2>
            </div>
          </div>
          { FollowData.map((i)=>
            <div className='flex px-6 py-3 items-center gap-5 cursor-pointer hover:bg-gray-200'>
            <img className='h-[50px] rounded-full w-[50px]' src={i.dp}></img>
            <div className=''>
              <h2>{i.username}</h2>
              <h3>Sent an attachment .1h</h3>
            </div>
          </div>)}
          
        </div>
      </div>
     
    </div>
  )
}

export default Messanger