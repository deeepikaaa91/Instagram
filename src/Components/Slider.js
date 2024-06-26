import React, { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import axios from "axios";
import Search from "./Search";
import { useNavigate } from "react-router-dom";
import Notification from "./Notification"
import { FaFacebookMessenger } from "react-icons/fa6";



function Slider() {
  const navigate = useNavigate();
  useEffect(() => {
    getUserDetails();
  }, []);
  const [showCreate, setShowCreate] = useState(false);
  const [uploadStep, setUploadStep] = useState(0);
  const [showMore ,setShowMore] = useState(false);

  const [showSearch, setShowSearch] = useState(false);

  const [profile, setProfile] = useState(true);
  const [showNotification, setShowNotification]= useState(false)

   
 const firebaseConfig = {
    apiKey: "AIzaSyDuobxWGMQq6WTFnlJsZkfL2w-SgkfmGaM",
    authDomain: "instagram-eb2e3.firebaseapp.com",
    projectId: "instagram-eb2e3",
    storageBucket: "instagram-eb2e3.appspot.com",
    messagingSenderId: "606910640753",
    appId: "1:606910640753:web:d40313cc5c30db961e21d0",
    measurementId: "G-SE70WF8BGQ",
  };

  firebase.initializeApp(firebaseConfig);
  const storage = firebase.storage();

  const [caption, setCaption] = useState("");
  const [url, setUrl] = useState("");
  const handleChange = (e) => {
    const image = e.target.files[0];
    setUploadStep(1);
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            setUrl(url);
          });
      }
    );
  };
  const [userInfo, setUserInfo] = useState([]);
  const getUserDetails = () => {
    axios.get("http://localhost:5001/api/userdetail").then((res) => {
      setUserInfo(
        res.data.data.filter(
          (i) => i.username == localStorage.getItem("username")
        )
      );
    });
  };
  const putPostData = () => {
    const obj = {
      post: [
        ...userInfo[0].post,
        {
          image: url,
          caption: caption,
          likes: 0,
          comment: 0,
          shares: 0,
          username:userInfo[0].username
        },
      ],
    };
    axios
      .put("http://localhost:5001/api/userdetail/" + userInfo[0]._id, obj)
      .then((res) => alert(JSON.stringify(res)));
  };

  return (
    <div className="w-[16%] h-[100vh] hidden lg:block">
      <Search show={showSearch}></Search>
      <div className=" h-[100vh] w-[16%] border-[2px] flex fixed  flex-col gap-5  font-bold">
        <div className="pl-[40px] py-[20px]">
          {showSearch == false ? (
            <img className="h-[5vh] cursor-pointer" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png"></img>
          ) : (
            <i class="fa fa-instagram fa-lg pt-12" aria-hidden="true"></i>
          )}
        </div>

        <div className="flex flex-col  items-center gap-3 hover:cursor-pointer  ">
          <div onClick={()=>navigate("/homepage")} className="flex gap-2 items-center pl-[30px] w-[90%] h-[6vh] hover:bg-slate-100 cursor-pointer ">
            <i class="fa fa-home fa-lg" aria-hidden="true"></i>
            <label className="pl-[6px]" style={{ display: showSearch == true ? "none" : "flex" }}>
              HOME
            </label>
          </div>

          <div
            onClick={() => setShowSearch(!showSearch)}
            className="flex gap-2 items-center pl-[30px] w-[90%] h-[6vh] hover:bg-slate-100 "
          >
            <i class="fa fa-search fa-lg" aria-hidden="true"></i>

            <label className="pl-[6px]" style={{ display: showSearch == true ? "none" : "flex" }}>
              Search
            </label>
          </div>

          <div className="flex gap-2 items-center pl-[30px] w-[90%] h-[6vh] hover:bg-slate-100 ">
            <i class="fa fa-compass fa-lg" aria-hidden="true"></i>
            <label className="pl-[6px]" style={{ display: showSearch == true ? "none" : "flex" }}>
              Explore
            </label>
          </div>

          <div className="flex gap-2 items-center pl-[30px] w-[90%] h-[6vh] hover:bg-slate-100 ">
            <i class="fa fa-play-circle fa-lg" aria-hidden="true"></i>
            <label className="pl-[6px]" style={{ display: showSearch == true ? "none" : "flex" }}>
              Reels
            </label>
          </div>

          <div onClick={()=> navigate('/inbox')} className="flex gap-2 items-center pl-[28px] w-[90%] h-[6vh] hover:bg-slate-100 ">
            <i class="fa fa-commenting-o fa-lg" aria-hidden="true"></i>
            <label className="pl-[5px]" style={{ display: showSearch == true ? "none" : "flex" }}>
            Messanger
            </label>
          </div>

          <div onClick={()=>setShowNotification(!showNotification)} className="flex gap-2 items-center pl-[28px] w-[90%] h-[6vh] hover:bg-slate-100 ">
            <i class="fa fa-heart-o fa-lg" aria-hidden="true"></i>
            <label className="pl-[5px]" style={{ display: showSearch == true ? "none" : "flex" }}>
              Notofication
            </label>
          </div>

          <div
            onClick={() => setShowCreate(true)}
            className="flex gap-2 items-center pl-[30px] w-[90%] h-[6vh] hover:bg-slate-100 "
          >
           <i class="fa fa-plus-square-o fa-lg" aria-hidden="true"></i>
            <label className="pl-[5px]" style={{ display: showSearch == true ? "none" : "flex" }}>
              Create
            </label>
          </div>

          <div
            onClick={() => navigate('/profile')}
            className="flex gap-2 items-center pl-[30px] w-[90%] h-[6vh] hover:bg-slate-100"
          >
            <i class="fa fa-user fa-lg" aria-hidden="true"></i>
            {/* <img
              className="w-[35px] h-[35px] border-[2px] rounded-full  "
              src="https://marketplace.canva.com/EAFuKNWv9mg/2/0/1600w/canva-purple-and-yellow-colorful-woman-instagram-profile-picture-lvrGx6QJohg.jpg"
            ></img> */}
            <label className="pl-[7px]" style={{ display: showSearch == true ? "none" : "flex" }}>
              Profile
            </label>
          </div>

          <div className=" h-[30vh] flex flex-col  gap-3 items-center justify-center">
            <div className="flex gap-2 items-center   pl-[30px] w-[180%] h-[6vh] hover:bg-slate-100">
            <i class="  fa fa-at fa-lg" aria-hidden="true"></i>
              <label className="pl-[7px]" style={{ display: showSearch == true ? "none" : "flex" }}>
                Threads
              </label>
            </div>

            {/* <div onClick={()=>{
              localStorage.removeItem("username");
              navigate('/')
            }} className="flex gap-2 items-center  pl-[30px] w-[180%] h-[6vh] hover:bg-slate-100">
              <i class="fa fa-sign-out fa-lg" aria-hidden="true"></i>
              <label className="pl-[6px]" style={{ display: showSearch == true ? "none" : "flex" }}>
                Log Out
              </label>
            </div> */}

            <div onClick={() =>setShowMore(!showMore)}  className="flex gap-2 items-center pl-[30px] w-[180%] h-[6vh] hover:bg-slate-100">
              <i class="fa fa-bars" aria-hidden="true"></i>
              <label className="pl-[12px]" style={{ display: showSearch == true ? "none" : "flex" }}>
                More
              </label>
            </div>
          </div>
        </div>
      </div>
      {/* -----------------------------create---------------------------------> */}
      {showCreate == true && (
        <div className="h-[100vh] w-[100%]  top-0 left-0 fixed flex  flex-col justify-center items-center z-[100]">
          <div
            onClick={() => setShowCreate(false)}
            className="h-[100vh] w-[100%] bg-black  z-10 fixed opacity-[.6]"
          >
            <div className="w-[100%] flex justify-end p-[20px]">
              <label className="text-white text-[25px]">X </label>
            </div>
          </div>
          {uploadStep == 0 ? (
            <div className="w-[35%] h-[60vh] relative bg-white z-20 rounded-[20px] flex flex-col  items-center pt-[10px] gap-2 ">
              <h1 className="font-semibold">Create new post</h1>
              <div className="h-[1px] w-[100%] bg-gray-300 mt-[5px] flex flex-col items-center"></div>
              <div className="h-[60vh] w-[100%] flex flex-col justify-center items-center gap-4">
                <i class="fa fa-picture-o fa-2x" aria-hidden="true"></i>
                <label className="text-[25px]">
                  Drag photos and videos here
                </label>
                <input
                  className="h-[5vh] w-[30%] bg-blue-400  font-bold text-white"
                  type="file"
                  placeholder="select from computer"
                  onChange={(e) => handleChange(e)}
                ></input>
              </div>
            </div>
          ) : uploadStep == 1 ? (
            <div className="w-[30%]  h-[70vh] relative bg-white z-20 rounded-[20px] flex flex-col pt-[10px] gap-2 ">
              <div className="border-b w-[100%]  flex gap-40  px-4 py-4 ">
                <label className="font-medium">Back</label>
                <label className="font-medium">Crop</label>
                <label
                  className="  hover:text-black  cursor-pointer font-medium"
                  onClick={() => setUploadStep(2)}
                >
                  Next
                </label>
              </div>
              <img className="h-full w-full" src={url}></img>
            </div>
          ) : (
            <div className="bg-white w-[40%] h-[60vh] z-10 relative flex flex-col items-center">
              <div
                onClick={() => putPostData()}
                className="border-b w-full text-center py-4"
              >
                Share
              </div>
              <div className="flex h-full w-full">
                <img className="w-[60%]" src={url}></img>
                <div className="w-[40%]">
                  <textarea
                    onChange={(e) => setCaption(e.target.value)}
                    className="w-full h-[15vh]"
                    placeholder="Caption"
                  ></textarea>
                </div>
              </div>
              <div  className="h-[10vh] w-[20%] bg-red-600">

              </div>
            </div>
          )}
        </div>
      )}
   {/* -------------------------------profile--------------------------------    */}
      {/* <Profile></Profile> */}
  {/* -----------------------------------Notification--------------------------------     */}
      <Notification show={showNotification} usersData={getUserDetails}></Notification>
  {/* ----------------------------------------logout-----------------------------------   */}
  {showMore==true && 
      <div className="h-[55vh] w-[17%] bg-white fixed top-[30%] left-4 rounded-2xl shadow-xl flex flex-col gap-3">
        <div className="p-2">
          <div className="flex items-center p-3 cursor-pointer hover:bg-gray-100 rounded-lg gap-3">
          <i class="fa fa-cog" aria-hidden="true"></i>
          <h3>Settings</h3>
          </div>
          <div className="flex items-center p-3 cursor-pointer hover:bg-gray-100 rounded-lg gap-3">
          <i class="fa fa-line-chart" aria-hidden="true"></i>
          <h3>Activity</h3>
          </div>
          <div className="flex items-center p-3 cursor-pointer hover:bg-gray-100 rounded-lg gap-3">
          <i class="fa fa-bookmark-o" aria-hidden="true"></i>
          <h3>Saved</h3>
          </div>
          <div className="flex items-center p-3 cursor-pointer hover:bg-gray-100 rounded-lg gap-3">
          <i class="fa fa-sun-o" aria-hidden="true"></i>
          <h3>Switch Appearance</h3>
          </div>
          <div className="flex items-center p-3 cursor-pointer hover:bg-gray-100 rounded-lg gap-3">
          <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
          <h3>Report a Problem</h3>
          </div>
        </div>
        <div className="py-2 px-3">
        <div className="flex items-center p-3 cursor-pointer hover:bg-gray-100 rounded-lg gap-3 border-b-2">
          <h3>Switch Account</h3>
          </div>
          <div onClick={()=>{localStorage.removeItem('username');navigate('/')}} className="flex items-center p-3 cursor-pointer hover:bg-gray-100 rounded-lg gap-3">
          <h3>Log Out</h3>
          </div>
        </div>
        </div>
         }
   
   
    </div>
  );
}
export default Slider;
