import React, { useEffect, useState } from "react";
import Slider from "../Components/Slider";
import axios from "axios";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import { Navigate, useNavigate } from "react-router-dom";
import EditProfile from "./EditProfile";
import ViewArchive from "./ViewArchive";

function Profile() {
  const [showSettings, setShowSettings] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    getSelfData();
  }, []);
  const [selfData, setSelfData] = useState({});
  const [profile, setProfile] = useState(false);
  const getSelfData = () => {
    axios
      .get("http://localhost:5001/api/userdetail")
      .then((res) =>
        setSelfData(
          res.data.data.filter(
            (i) => i.username == localStorage.getItem("username")
          )[0]
        )
      );
  };
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

  const handleChange = (e) => {
    const image = e.target.files[0];
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
            axios
              .put("http://localhost:5001/api/userdetail/" + selfData._id, {
                dp: url,
              })
              .then(() => {
                alert("Successfully");
                getSelfData();
              });
          });
      }
    );
  };

  const removeDp = () => {
    axios
      .put("http://localhost:5001/api/userdetail/" + selfData._id, { dp: "none" })
      .then(() => {
        getSelfData();
        alert("Done");
      });
  };

  return (
    <div className="flex">
      <Slider></Slider>
      <div className="w-[100%] flex flex-col items-center h-[100vh] bg-[white] ">
        <div className="w-[90%] h-[30vh] flex  pt-12  gap-7 ">
          <div className="w-[25%] ">
            {!selfData?.dp || selfData.dp=="none" ? (
              <div className="w-[40%] h-[15vh] bg-[#7D7D7D] rounded-full relative left-[50%] flex items-center justify-center ">
              <i class="fa fa-camera fa-3x z-[10]" aria-hidden="true"></i>
              <i class="fa fa-user absolute text-[110px] text-[#888888]" aria-hidden="true"></i>

              <img src=""></img>

              <input className="photo-input z-[20]" onChange={(e) => handleChange(e)} type="file"></input>
              </div>
             
            ) : (
              <img
                onClick={() => setProfile(!profile)}
                className="w-[140px] relative left-[50%] h-[140px] rounded-full"
                src={selfData.dp}
              ></img>
            )}
          </div>
          <div className="w-[60%] flex flex-col  gap-4">
            <div className="w-[100%] flex gap-5 items-center">
              <label className="text-[18px] font-medium">{selfData.username}</label>
              <div
                onClick={() => navigate("/editprofile")}
                className="w-[23%] h-[5vh] bg-gray-300 rounded-md flex items-center justify-center border text-[14px] font-semibold"
              >
                Edit profile
              </div>
              <div
                onClick={() => navigate("/viewarchive")}
                className="w-[24%] h-[5vh] bg-gray-300 rounded-md flex items-center justify-center border text-[14px] font-semibold"
              >
                View archive
              </div>
              <i
                onClick={() => setShowSettings(!showSettings)}
                class="fa fa-sun-o text-[25px]"
                aria-hidden="true"
              ></i>
            </div>
            <div className="w-[60%] flex justify-between">
              <label>
                <span className="font-semibold">0</span> posts
              </label>
              <label>
                <span className="font-semibold">
                  {selfData?.follower?.length}
                </span>{" "}
                followers
              </label>
              <label>
                <span className="font-semibold">
                  {selfData?.following?.length}
                </span>{" "}
                following
              </label>
            </div>
            <div className="flex flex-col">
              <label className="font-semibold">DIPIKA</label>
            </div>
          </div>
        </div>
        <div className="w-[60%] h-[25vh] flex items-center gap-7 ">
          <div className="flex items-center justify-center flex-col  ">
            <div className="w-[80px] h-[80px] rounded-full border bg-yellow-100"></div>
            <label>.</label>
          </div>

          <div className="flex items-center justify-center flex-col ">
            <div className="w-[80px] h-[80px] rounded-full border  bg-yellow-100"></div>
            <label>.</label>
          </div>

          <div className="flex items-center justify-center flex-col ">
            <div className="w-[80px] h-[80px] rounded-full border  bg-yellow-100"></div>
            <label>.</label>
          </div>

          <div className="flex items-center justify-center flex-col ">
            <div className="w-[80px] h-[80px] rounded-full border  bg-yellow-100"></div>
            <label>.</label>
          </div>

          <div className="flex flex-col items-center justify-center gap-1">
            <div className="w-[80px] h-[80px] rounded-full border flex items-center justify-center">
              <label className="text-[40px] text-gray-400 ">+</label>
            </div>
            <label className="text-[13px] font-semibold">.</label>
          </div>
        </div>
        <div className="w-[70%]  mt-7 flex items-center">
          <div className="w-[100%] h-[1px] bg-gray-400 "></div>
        </div>
        <div className="w-[70%] flex items-center justify-center gap-20  pt-[20px] ">
          <div className="flex items-center justify-center gap-2">
            <i class="fa fa-th text-[12px]" aria-hidden="true"></i>
            <label className="text-[13px]">POST</label>
          </div>


          <div className="flex  items-center justify-center gap-2 ">
            <i class="fa fa-bookmark-o text-[12px]" aria-hidden="true"></i>
            <label className="text-[13px]"> SAVED</label>
          </div>
       </div>
       <div className=" w-[70%] h-[40vh] grid grid-cols-3 gap-4">
          {selfData?.post?.map((i) => (
            <img className="h-full w-full" src={i.image}></img>
          ))}
        </div>
      </div>
      {/* ----------------------------------------------Settings------------------------------*/}
      {showSettings == true && (
        <div className="w-[100%] flex fixed items-center justify-center h-[100vh]">
          <div
            onClick={() => setShowSettings(false)}
            className="w-[100%] flex items-center left-0 justify-center h-[100vh] bg-black fixed opacity-60"
          >
            <h1
              onClick={() => setShowSettings(false)}
              className="absolute right-5 top-5 text-white cursor-pointer"
            >
              X
            </h1>
            
          </div>
          <div className="flex z-10 relative flex-col items-center  h-[49vh] w-[30%] bg-white rounded-xl">
              <h3 className="h-[7vh] w-full bg-white flex items-center justify-center text-black border-b-2 rounded-lg cursor-pointer">
                Apps & Websites
              </h3>
              <h3 className="h-[7vh] w-full bg-white flex items-center justify-center text-black border-b-2 cursor-pointer">
                QR code
              </h3>
              <h3 className="h-[7vh] w-full bg-white flex items-center justify-center text-black border-b-2 cursor-pointer">
                Notifications
              </h3>
              <h3 className="h-[7vh] w-full bg-white flex items-center justify-center text-black border-b-2 cursor-pointer">
                Settings & privacy
              </h3>
              <h3 className="h-[7vh] w-full bg-white flex items-center justify-center text-black border-b-2 cursor-pointer">
                Suptervision
              </h3>
              <h3 className="h-[7vh] w-full bg-white flex items-center justify-center text-black border-b-2 cursor-pointer">
                Log out
              </h3>
              <h3 className="h-[7vh] w-full bg-white flex items-center justify-center text-black border-b-2 rounded-lg cursor-pointer">
                Cancel
              </h3>
            </div>
        </div>
      )}
      {/* -----------------------------------------dp------------------------------- */}
      {profile == true && (
        <div className="w-[100%] flex items-center justify-center h-[100vh] fixed">
          <div
            onClick={() => setProfile(false)}
            className="w-[100%] flex items-center absolute top-0 bg-black left-0 justify-center opacity-60 h-[100vh]"
          >
            <h1
              onClick={() => setProfile(false)}
              className="absolute right-5 top-5 text-white cursor-pointer"
            >
              X
            </h1>
          </div>
          <div className="flex flex-col items-center z-40  h-[30vh] w-[25%] bg-white rounded-xl">
            <h3 className="h-[9vh] w-full bg-white flex items-center justify-center text-black border-b-2 rounded-lg cursor-pointer">
              Change Profile Photo
            </h3>

            <input
              onChange={(e) => handleChange(e)}
              className="h-[7vh] type-input w-full bg-white items-center justify-center  border-b-2 cursor-pointer font-bold text-blue-600 "
              type="file"
              placeholder="Uploading photo"
            ></input>

            <h3 onClick={()=>removeDp()} className="h-[7vh] w-full bg-white flex items-center justify-center  border-b-2 cursor-pointer  text-red-600">
              Remove current Photo
            </h3>
            <h3 className="h-[7vh] w-full bg-white flex items-center justify-center text-black border-b-2 cursor-pointer">
              Cancel
            </h3>
          </div>
        </div>
      )}
    </div>
  );
}
export default Profile;