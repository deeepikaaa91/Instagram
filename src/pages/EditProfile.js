import React from 'react'
import Slider from '../Components/Slider'

function EditProfile() {
  return (
    <div className=' flex  gap-6'>
    <Slider></Slider>
    <div className='h-[100vh] w-[100%] flex  gap-10  pl-[10px] '>
    <div className='h-[100vh] w-[30%]  flex flex-col items-center gap-4 overflow-scroll pt-[30px]'>
    <h1 className='pr-[100px] font-bold text-[20px] '>Setttings</h1>
    <div className='h-[30vh] w-[80%] bg-white-50 shadow-md pl-[10px] flex flex-col gap-2 hover:bg-slate-200'>
    <div className='h-[4vh] w-[100%]  flex gap-2 items-center pt-[10px]'>
    <i class="fa fa-file" aria-hidden="true"></i>
    <label className='font-bold'>Meta</label>
    </div>
    <h1 className=' font-bold'>Accounts Center</h1>
    <p className='text-[12px] w-[100%]  text-gray-500'>Manage your connected experiance and  account settings  across Meta techno;ogy</p>
    <div className='h-[20vh] w-[100%] flex flex-col gap-1  text-gray-500'>
    <div className='h-[3vh] w-[100%] flex gap-2 items-center'>
    <i class="fa fa-user pl-[10px]" aria-hidden="true"></i>
    <label className='text-[13px]'>Personal Details</label>
    </div>
    <div className='h-[3vh] w-[100%] flex gap-2 items-center'>
    <i class="fa fa-user pl-[10px]" aria-hidden="true"></i>
    <label className='text-[13px]'>Password and security</label>
    </div>
    <div className='h-[3vh] w-[100%]  flex gap-2 items-center'>
    <i class="fa fa-user pl-[10px]" aria-hidden="true"></i>
    <label className='text-[13px]'>Ad preferences</label>
    </div>
    <label className='text-[14px] text-blue-700'>See more in Accounts Center</label>
    </div>
    </div>
    <div className='h-[17vh] w-[80%] bg-slate-50  flex flex-col gap-1'>
     <label className='font-bold text-gray-400 text-[14px] pl-[10px]'>How you use Instagram</label>
     <div className='h-[6vh] w-[100%] hover:bg-gray-200 flex gap-3 items-center '>
     <i class="fa fa-user pl-[10px]" aria-hidden="true"></i>
     <label>Edit Profile</label>
     </div>
     <div className='h-[6vh] w-[100%] hover:bg-gray-200 flex gap-3 items-center'>
     <i class="fa fa-bell-o pl-[10px]" aria-hidden="true"></i>
     <label>Notification</label>
     </div>
    </div>
    <div className='h-[25vh] w-[80%] bg-slate-50  flex flex-col gap-1'>
     <label className='font-bold text-gray-400 text-[14px] pl-[10px]'>What you see</label>
     <div className='h-[6vh] w-[100%]  hover:bg-gray-200 flex gap-3 items-center'>
     <i class="fa fa-bell-slash-o pl-[10px]" aria-hidden="true"></i>
     <label>Muted Accounts</label>
     </div>
    <div className='h-[6vh] w-[100%]  hover:bg-gray-200 flex gap-3 items-center'>
    <i class="fa fa-bell-slash pl-[10px]" aria-hidden="true"></i>
     <label>Like & Share counts</label>
     </div>
     <div className='h-[6vh] w-[100%]  hover:bg-gray-200 flex gap-3 items-center'>
     <i class="fa fa-lock pl-[10px]" aria-hidden="true"></i>
    <label>Subsciptions</label>
     </div>
    </div>
    <div className='h-[30vh] w-[80%] bg-slate-50  flex flex-col gap-1'>
     <label className='font-bold text-gray-400 text-[14px] pl-[10px]'>Who can see your content</label>
     <div className='h-[6vh] w-[100%]  hover:bg-gray-200 flex gap-3 items-center'>
     <i class="fa fa-lock pl-[10px]" aria-hidden="true"></i>
     <label>Account Privacy</label>
     </div>
    <div className='h-[6vh] w-[100%] hover:bg-gray-200  flex gap-3 items-center'>
    <i class="fa fa-stop-circle-o pl-[10px]" aria-hidden="true"></i>
    <label>Close Friends</label>
     </div>
     <div className='h-[6vh] w-[100%] hover:bg-gray-200  flex gap-3 items-center'>
     <i class="fa fa-ban pl-[10px]" aria-hidden="true"></i>
      <label>Blocked</label>
     </div>
     <div className='h-[6vh] w-[100%] hover:bg-gray-200  flex gap-3 items-center'>
     <i class="fa fa-star-o pl-[10px]" aria-hidden="true"></i>
    <label>Hide Story and live</label>
     </div>
    </div>
    <div className='h-[43vh] w-[80%] bg-slate-50  flex flex-col gap-1'>
     <label className='font-bold text-gray-400 text-[14px] pl-[10px]'  >How others can interact with you</label>
     <div className='h-[6vh] w-[100%]   hover:bg-gray-200 flex gap-3 items-center '>
     <i class="fa fa-comments-o pl-[10px]" aria-hidden="true"></i>
     <label>Messages and story replies</label>
     </div>
    <div className='h-[6vh] w-[100%]  hover:bg-gray-200  flex gap-3 items-center '>
    <i class="fa fa-tags pl-[10px]" aria-hidden="true"></i>
     <label>Tags and mentions</label>
     </div>
     <div className='h-[6vh] w-[100%]   hover:bg-gray-200  flex gap-3 items-center '>
     <i class="fa fa-tags pl-[10px]" aria-hidden="true"></i>
     <label>Comment</label>
     </div>
     <div className='h-[6vh] w-[100%]   hover:bg-gray-200  flex gap-3 items-center '>
     <i class="fa fa-share-square-o pl-[10px]" aria-hidden="true"></i>
     <label>Sharing and remixes</label>
     </div>
     <div className='h-[6vh] w-[100%]  hover:bg-gray-200   flex gap-3 items-center '>
     <i class="fa fa-user-times pl-[10px]" aria-hidden="true"></i>
     <label>Restricted accounts</label>
     </div>
     <div className='h-[6vh] w-[100%]   hover:bg-gray-200  flex gap-3 items-center '>
     <label className='pl-[10px]'>Aa</label>
     <label>Hidden words</label>
     </div>
     </div>
     <div className='h-[23vh] w-[80%] bg-slate-50  flex flex-col gap-1'>
     <label className='font-bold text-gray-400 text-[14px] pl-[10px]' >Your app and media</label>
     <div className='h-[6vh] w-[100%]  hover:bg-gray-200   flex gap-3 items-center'>
     <i class="fa fa-download pl-[10px]" aria-hidden="true"></i>
     <label>Archiving and downloading</label>
     </div>
     <div className='h-[6vh] w-[100%]  hover:bg-gray-200   flex gap-3 items-center'>
     <i class="fa fa-language pl-[10px]" aria-hidden="true"></i>
     <label>Language</label>
     </div>
     <div className='h-[6vh] w-[100%]  hover:bg-gray-200   flex gap-3 items-center'>
     <i class="fa fa-laptop pl-[10px]" aria-hidden="true"></i>
     <label>Website permissions</label>
     </div>
     </div>
     <div className='h-[12vh] w-[80%] bg-slate-50  flex flex-col gap-1'>
     <label  className='font-bold text-gray-400 text-[14px] pl-[10px]'> For families</label>
     <div className='h-[6vh] w-[100%]  hover:bg-gray-200   flex gap-3 items-center'>
     <i class="fa fa-users pl-[10px]" aria-hidden="true"></i>
     <label>Supervision</label>
     </div>
     </div>
     <div className='h-[12vh] w-[80%] bg-slate-50  flex flex-col gap-1'>
     <label className='font-bold text-gray-400 text-[14px] pl-[10px]' >For professionals</label>
     <div className='h-[6vh] w-[100%]  hover:bg-gray-200   flex gap-3 items-center'>
     <i class="fa fa-square-o pl-[10px]" aria-hidden="true"></i>
     <label>Account type and tools</label>
     </div>
     </div>
     <div className='h-[17vh] w-[80%] bg-slate-50  flex flex-col gap-1'>
     <label className='font-bold text-gray-400 text-[14px] pl-[10px]' >More info and support</label>
     <div className='h-[6vh] w-[100%]  hover:bg-gray-200   flex gap-3 items-center'>
     <i class="fa fa-bullseye pl-[10px]" aria-hidden="true"></i>
     <label>Help</label>
     </div>
     <div className='h-[6vh] w-[100%]  hover:bg-gray-200   flex gap-3 items-center'>
    <i class="fa fa-user-o pl-[10px]" aria-hidden="true"></i>
    <label>Account Status</label>
    </div>
    </div>
    </div>
    {/* </div> */}
    {/* <div  className='h-[180vh] w-[60%]  flex justify-center bg-red-400  '> */}
   <div className='h-[100vh] w-[70%]  flex flex-col justify-center gap-3  overflow-scroll  pl-[50px] pt-[30px]'>
   <h1 className='font-bold text-[20px]'>Edit Profile</h1>
   <div className='h-[10vh] w-[80%] bg-gray-200 rounded-[20px] flex items-center justify-between p-[4px]'>
   <div className='h-[8vh] w-[40%]  pl-[5px] flex items-center gap-2'> 
   <div className='h-[6vh] w-[17%] bg-red-200 rounded-full'>
   <img className=' h-[6vh] w-[100%] rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwVAB6X0ZDV0j3ttURoBIyD-KQZlNNaLecA0R-m3ufDDtRUgPxvOpVSwrccNE8pXI5L5I&usqp=CAU"></img>
   </div>
   <label className='font-semibold'>dipika-001</label>
   </div>
   <button className='h-[5vh] w-[20%] bg-blue-400 text-white rounded-[12px] mr-[6px]'>change photo</button>
   </div>
   <h1 className='font-bold text-[17px]'>Website</h1>
   <div className='h-[6vh] w-[80%] bg-gray-200 rounded-[10px] flex items-center'>
   <label className='pl-[15px] '>Website</label>
   </div>
   <p className='text-[12px] w-[40%] text-gray-600' >Editing your links is only available on mobile. Visit the Instagram app and edit your profile to change the websites in your bio.</p>
   <div className='h-[13vh] w-[82%] '>
   <h1 className='font-bold text-[17px]'>Bio</h1>
   <div className='h-[8vh] w-[98%] border-[1px] border-gray-400 flex items-center justify-between rounded-[12px] '>
   <input className='h-[7vh] w-[89%] pl-[20px] bg-transparent' type='' placeholder='Bio'></input>
   <label className='pt-[30px] text-[13px] pr-[10px]'>0 / 150</label>
   </div>
   </div>
   <div className='h-[15vh] w-[80%] flex flex-col gap-1'>
   <h1 className='font-bold text-[17px]'>Gender</h1>
   <div className='h-[10vh] w-[100%] border-[1px]  border-gray-400 flex items-center justify-between  rounded-[12px] '>
   <label className='pl-[20px]'> prefer not to say</label>
   </div>
   <p className='text-[12px] text-gray-600'>This won,t be part of your public profile</p>
   </div>
   <div className='h-[20vh] w-[70%] flex flex-col gap-2'>
   <h1 className='font-bold text-[17px]'>Show account suggestions on profiles</h1>
   <div className=' h-[11vh] w-[115%] border-[1px]  border-gray-400 flex  flex-col rounded-[12px] p-[10px]  gap-1 pr-[30px] '>
   <label className=''>Show account suggestions on profiles</label>
   <p className='text-[12px] text-gray-600 w-[70%]'>Choose whether people can see similar account suggestions on your profile, and whether your account can be suggested on other profiles.</p>
   </div>
   </div>
   <div className='h-[5vh] w-[80%] flex justify-end border-none'>
   <button className='h-[6vh] w-[35%] bg-blue-400 rounded-[12px]'>Submit</button>
   </div>
   <div className=" h-[3vh] w-[90%] flex  flex-wrap justify-center items-center gap-3 text-[13px] text-gray-600">
        <button className="text-[13px] hover:underline">Meta</button>
        <button className="text-[13px] hover:underline">About</button>
        <button className="text-[13px] hover:underline">Blog</button>
        <button className="text-[13px] hover:underline">Jobs</button>
        <button className="text-[13px] hover:underline">Help</button>
        <button className="text-[13px] hover:underline">API</button>
        <button className="text-[13px] hover:underline">Privacy</button>
        <button className="text-[13px] hover:underline">Terms</button>
        <button className="text-[13px] hover:underline">Locations</button>
        <button className="text-[13px] hover:underline">Intagram Lite</button>
        <button className="text-[13px] hover:underline">Treads</button>
        <button className="text-[13px] hover:underline"> Contact uploading & non-users</button>
        <button className="text-[13px] hover:underline">Meta Verify</button>
      </div>
      </div>
   </div>
 </div>
  )
}

export default EditProfile