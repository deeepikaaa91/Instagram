import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Follow from '../FunctionComponents/Follow';


function Suggested({selfData, allUserData}) {

  const navigate = useNavigate()
  const [phone,setPhone] = useState("")
  const [password,setPassword] = useState("")
  const loginCheck = ()=> {
  
    let user = allUserData.filter((i)=>i.username == phone)
    if(user.length>0){
      if (user[0].password == password){
        localStorage.setItem("username", phone);navigate("/homepage");window.location.reload()
       }
       else{
        alert("wrong password")
       }
    }
  else{
    alert("user not found")
  }
  }
  const [showSwitch ,setShowSwitch] = useState(false);
  return (
    <div className='h-[60vh] w-[25%] pt-[50px] lg:flex hidden flex-col gap-3'>
   
    <div className='h-[7vh] w-[100%]  flex justify-between px-4'>
    <div className='w-[50%] h-[8vh] flex items-center gap-2 '>
    <img className='w-[45px] h-[45px] border-[2px] rounded-full' src={selfData?.dp}></img>
    <div className='flex flex-col'>
    <label className='font-semibold'>{localStorage.getItem("username")}</label>
    <label className='text-gray-500'>{selfData?.fullName}</label>
    </div>
    </div>
    <div  className='w-[50%] h-[7vh] flex justify-end  items-center'>
    <button onClick={()=>setShowSwitch(!showSwitch)} className='text-[14px] text-blue-600 font-semibold hover:text-gray-500'>switch</button>
    </div>
    </div>
    <div className='w-[100%] h-[6vh] px-4 flex justify-between items-center'>
    <label className='font-semibold text-[15px] text-gray-500'>Suggested for you</label>
    <label className='text-[15px]'>See All</label>
    </div>
     {allUserData.filter((i)=> i.username != selfData?.username && !(i.follower.includes(selfData?.username))).map((i)=>
    <div className='h-[8vh] w-[100%]  flex   justify-between px-4'>
    <div className='w-[50%] h-[7vh] flex items-center gap-3 '>
    <img className='w-[45px] h-[45px] border-[2px] rounded-full 'src={i.dp}></img>
    <div className='flex flex-col '>
    <label className='font-semibold'>{i.username}</label>
    <label className='text-gray-500 text-[12px]'>Suggested for you</label>
    </div>
    </div>
   <div className='w-[50%] h-[7vh] flex justify-end  items-center'>
    <label className='text-[13px] text-blue-500 font-semibold hover:text-gray-500'>
      <Follow selfData={selfData} userData={i}></Follow>
    </label>
    </div>
    </div>
     )}
    <div className=' h-[7vh] w-[95%]  text-[13px] flex gap-1 flex-wrap pl-[30px]'>
    <button className=' text-gray-400 hover:underline'>About.</button>
    <button className=' text-gray-400 hover:underline'>Help.</button>
    <button className=' text-gray-400 hover:underline'>Press.</button>
    <button className=' text-gray-400 hover:underline'>API.</button>
    <button className=' text-gray-400 hover:underline'>Jobs.</button>
    <button className=' text-gray-400 hover:underline'>Privacy.</button>
    <button className=' text-gray-400 hover:underline'>Terms.</button>
    <button className=' text-gray-400 hover:underline'>Locations.</button>
    <button className=' text-gray-400 hover:underline'>Language.</button>
    <button className=' text-gray-400 hover:underline'>Meta Verified</button>
    </div>
    <label className='text-[13px] text-gray-400 pl-[30px]'>© 2024 INSTAGRAM FROM META</label>
   {/* -----------------------------------switch--------------------------------------- */}
   {showSwitch == true && (
        <div className="w-[100%] flex fixed items-center justify-center h-[100vh] left-0 top-0">
          <div
            onClick={() => setShowSwitch(false)}
            className="w-[100%] flex items-center left-0 justify-center h-[100vh] bg-black fixed opacity-60"
          >
          </div>
          <div className="flex z-100 relative flex-col items-center  gap-4 h-[50vh] w-[24%] bg-white rounded-xl">
             <div onClick={() => setShowSwitch(false)} className='h-[3vh] w-full p-[10px] flex justify-end   text-black'><label>X</label></div>
             <img className='h-[8vh] w-[40%]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png"></img>
            <input onChange={(e)=>setPhone(e.target.value)} className='h-[5vh] w-[70%] outline-none border-[1px] border-gray-400 text-[12px] pl-[10px]' type='text' placeholder='Phone number,email and username'></input>
            <input onChange={(e)=>setPassword(e.target.value)} className='h-[5vh] w-[70%] outline-none border-[1px] border-gray-400 text-[12px] pl-[10px]' type='password' placeholder='Password'></input>
             <label className='pr-[40%] text-[14px]'><input type='checkbox'></input> Save login info</label>
            <button onClick={()=>loginCheck()} className='h-[4vh] w-[70%] rounded-xl font-semibold bg-blue-400 text-white'>Log in</button>
            <label  className='text-[13px]'>Forget Password ? </label>            
            </div>
        </div>  
      )}
   </div>
  )
}

export default Suggested