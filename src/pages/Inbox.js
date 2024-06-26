import React, { useEffect, useState } from "react";
import Slider from "../Components/Slider";
import Messanger from "../Components/Messanger";
import { RiMessengerLine } from "react-icons/ri";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

function Inbox() {
  useEffect(() => {
    getUserData();
  }, []);
  const [selfData, setSelfData] = useState({})
  const [allUserData, setAllUserData] = useState([]);
  const [searchUser, setSearchUser] = useState("");
  const navigate = useNavigate();
  const getUserData = () => {
    axios
      .get("http://localhost:5001/api/userdetail")
      .then((res) => {setAllUserData(res.data.data); setSelfData(res.data.data.filter((i)=>i.username == localStorage.getItem("username"))[0])});
  };
  const [msgPopUp, setMsgPopUp] = useState(false);
  const userData = JSON.parse(sessionStorage.getItem("msg"));
  // ----------------------------------send messages--------------------------
  const[msg ,setmsg] = useState("");
  const sendmsgfn  = ()=>{
    const selfObj = {
      messages: [...selfData.messages,
        {
          username:userData.username,
          message:{
            by:selfData.username,
            msg:msg,
            time:new Date()
          }
        }
      ]
    }
    axios.put("http://localhost:5001/api/userdetail/"+selfData._id, selfObj)

    const userObj = {
      messages:[...userData.messages,{
        username: selfData.username,
        message:{
          by:selfData.username,
          msg:msg,
          time:new Date()
        }
      }]
    }
    axios.put("http://localhost:5001/api/userdetail/" +userData._id, userObj).then((res)=>{setmsg("");getUserData()})
  }

  return (
    <div className="flex">
      <Slider></Slider>
      <Messanger></Messanger>
      {sessionStorage.getItem("msg") ? (
        <div className="w-[60%]">
          {/* <h1>{userData.username}</h1> */}

          <div className="h-[10vh] w-[full] border flex items-center justify-between p-5">
            <div className="flex items-center gap-2 ">
              <img
                className="w-[50px] h-[50px] rounded-full"
                src={userData.dp}
              ></img>
              <h2>{userData.username}</h2>
            </div>
            <div className="flex gap-3 text-[25px]">
              <i class="fa fa-phone" aria-hidden="true"></i>
              <i class="fa fa-video-camera" aria-hidden="true"></i>
              <i class="fa fa-info-circle" aria-hidden="true"></i>
            </div>
          </div>
          <div className="flex items-center justify-center flex-col h-[75%] overflow-hidden gap-3">
         
            <img className="h-[100px] w-[100px]  rounded-full" src={userData.dp}></img>
            <h1 className="text-[25px] font-semibold">{userData.fullName}</h1>
            <h2 className="text-gray-500">{userData.username}.instagram</h2>
            <button  onClick={()=>{localStorage.setItem("userdetail",JSON.stringify(userData));navigate("/userpage")}} className="h-[4vh] w-[15%] bg-gray-200 rounded-lg font-semibold">View Profile</button>
           </div>
            <div className="flex items-center justify-center mt-14 fixed w-[55%] ml-[30px]  border-[2px] border-gray-300 rounded-full ">
            <div className="  ">
            <i class="fa fa-smile-o fa-2x rounded-l-2xl h-[5vh]  flex items-center justify-center pl-3" aria-hidden="true"></i>
            </div>
          <input onChange={(e)=>setmsg(e.target.value)} type="text" placeholder="messages...." className=" w-[80%] h-[5vh]  pl-5 outline-none"></input>
          <div className="h-[5vh] w-[10%]  flex gap-2 items-center rounded-r-2xl">
          <i class="fa fa-microphone fa-lg" aria-hidden="true"></i>
          <i class="fa fa-picture-o fa-lg" aria-hidden="true"></i>
          <i class="fa fa-heart-o fa-lg" aria-hidden="true"></i>
          <label onClick={()=>sendmsgfn()}>send</label>

          </div>

          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center m-auto h-[100vh]  gap-1">
          <div className="h-[80px] w-[80px] rounded-full  border-[2px] border-black  flex  justify-center items-center text-[40px]">
            <RiMessengerLine />
          </div>
          <h1 className="text-[23px]">your messages</h1>
          <p className="text-gray-500">Send a message to start the chat</p>
          <button
            onClick={() => setMsgPopUp(true)}
            className="h-[4vh] w-[60%] bg-blue-500 text-white rounded-lg  "
          >
            Sent Message
          </button>
        </div>
      )}

      {/* ------------------------------------------------------------------ */}
      {msgPopUp == true && (
        <div className="w-[100%] flex fixed items-center justify-center h-[100vh]">
          <div
            onClick={() => setMsgPopUp(false)}
            className="w-[100%] flex items-center left-0 justify-center h-[100vh] bg-black fixed opacity-60"
          >
            <h1 className="absolute right-5 top-5 text-white cursor-pointer">
              X
            </h1>
          </div>
          <div className="flex z-10 relative flex-col gap-2 h-[65vh] w-[35%] bg-white rounded-xl">
          <div className="h-[7vh] w-[100%]  flex justify-center items-center">
            <label className="text-[18px] font-semibold">New Message</label>
            </div>
            <div className="flex gap-4 w-full items-center h-[6vh] border-[1px] border-gray-400">
              <label className="pl-[20px] font-bold">To: </label>
              <input
                onChange={(e) => {
                  setSearchUser(e.target.value);
                }}
                className="w-[80%] h-[5vh] outline-none"
             placeholder="Search.." ></input>
            </div>
            {searchUser == "" ? (
              <div className=" pl-[20px] text-gray-500">No account found</div>
              ) : (
              <div className="flex flex-col w-full">
                {allUserData
                  .filter((i) => i.username.includes(searchUser))
                  .map((i) => (
                    <div
                      onClick={() =>
                        {sessionStorage.setItem("msg", JSON.stringify(i));
                        window.location.reload()}
                      }
                      className="h-[8vh] w-[100%]  flex   justify-between px-4"
                    >
                      <div className="w-[50%] h-[7vh] flex items-center gap-3 ">
                        <img
                          className="w-[45px] h-[45px] border-[2px] rounded-full "
                          src={i.dp}
                        ></img>
                        <div className="flex flex-col ">
                          <label className="font-semibold">{i.username}</label>
                          <label className="text-gray-500 text-[12px]">
                            {i.fullName}
                          </label>
                          
                        </div>
                      </div>
                      <div className="w-[50%] h-[7vh] flex justify-end  items-center">
                      
                      </div>
                    </div>
                  ))}
              </div>
              
            )}
            <div className="h-[40vh] w-[100%] flex justify-center items-center  pt-[40%]">
            <button className="h-[6vh] w-[90%] bg-blue-500 text-[18px] text-white">chat</button>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Inbox;
