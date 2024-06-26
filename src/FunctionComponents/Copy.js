import axios from 'axios'
import React from 'react'

function Copy({SelfData,username}) {
    const Followfn = ()=>{
        const selfObj = {
            Following:[...SelfData.Following,userData.username]
         }
         axios.put("http://localhost:5001/api/userdetail/" +selfObj._id,selfObj)
         
         const userobj ={
            Follower:[...userData.Follower,selfObj.username]
         }
         axios.put("http://localhost:5001/api/userdetail/" + userobj._id,userobj).then(()=>{window.location.reload()})
    }
  return (
    <div onClick={()=>Followfn()}>Copy</div>
  )
}

export default Copy