import React, { useEffect, useState } from "react";
import Slider from "../Components/Slider";
import Suggested from "../Components/Suggested";
import StoryData from "../api/story.json";
import { useNavigate } from "react-router-dom";
import FollowData from "../api/follow.json";
import axios from "axios";
import Like from "../FunctionComponents/Like";

function HomePage() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("username")) {
      navigate("/");
    }
    getUserData();
  }, []);

  const [userData, setUserData] = useState([]);
  const [selfData, setSelfData] = useState({});
  const getUserData = () => {
    axios.get("http://localhost:5001/api/userdetail").then((res) => {
      setUserData(res.data.data);
      setSelfData(
        res.data.data.filter(
          (i) => i.username == localStorage.getItem("username")
        )[0]
      );
    });
  };

  const postLike = (username, id) => {
    const user = userData.filter((i) => i.username == username)[0];
    const post = user.post.filter((i) => i._id == id)[0];
    const obj = {
      ...post,
      likes: [...post.likes, localStorage.getItem("username")],
    };

    const postList = [...user.post.filter((i) => i._id !== id), obj];
    axios
      .put("http://localhost:5001/api/userdetail/" + user._id, {
        post: postList,
      })
      .then((res) => {
        getUserData();
        alert(res);
      });
    console.log(obj);
  };
  // alert(JSON.stringify(userData));
  const myUserData = userData
    .filter(
      (i) =>
        i.post.length > 0 &&
        i.follower.includes(localStorage.getItem("username"))
    )
    .map((i) => i.post)
    .flat();
  return (
    <div className="flex w-full">
      <Slider />
      <div className="  lg:w-[50%] overflow-hidden  w-[100%]  flex flex-col   text-[12px] gap-2 items-center pt-[50px] ">
        <div className=" lg:w-[100%] flex gap-3 justify-center items-center">
          {StoryData.map((i) => (
            <div className="flex flex-col items-center gap-1 lg:w-[70px] w-[100px] rounded-[50px]  ">
              <img
                className="lg:h-[70px] lg:w-[70px] h-[100px] w-[100px] rounded-[50px] object-cover object-center border-[2px] border-solid border-red-400 "
                src={i.dp}
              ></img>
              <label>{i.username} </label>
            </div>
          ))}
        </div>
        {myUserData.map((i) => (
          <div className="h-[80vh]  lg:w-[60%] flex flex-col  gap-2 ">
            <div className="h-[7vh] w-[100%]  flex  pl-[10px] items-center justify-between ">
              <div className="h-[5vh] w-[100%] flex items-center justify-between">
                <div className="h-[40px] w-[40px]  rounded-[50%]  flex items-center gap-1  ">
                  <img
                    className="h-[40px] w-[55px] rounded-[50%] object-cover object-center border-[2px]  border-red-300 "
                    src={i.image}
                  ></img>
                  <h1 className="font-bold text-[12px]">{i.username}</h1>
                  <label className="font-bold text-[15px] text-gray-400">
                    .
                  </label>
                  <label className="font-bold text-[12px] text-gray-400">
                    6h
                  </label>
                </div>

                <div className="flex h-[2vh] w-[10%] gap-1 justify-center items-center  ">
                  <div className="h-[4px] w-[4px] bg-black rounded-[50px]"></div>
                  <div className="h-[4px] w-[4px] bg-black rounded-[50px]"></div>
                  <div className="h-[4px] w-[4px] bg-black rounded-[50px]"></div>
                </div>
              </div>
            </div>
            <img
              className="h-[70vh] w-[100%] object-cover object-center rounded-[5px]"
              src={i.image}
            ></img>

            <div className="h-[7vh] w-[100%]  flex  justify-between">
              <div
                onClick={() => postLike(i.username, i._id)}
                className="h-[7vh] w-[25%] flex items-center gap-2 pl-[10px]"
              >
                <Like selfData={selfData}></Like>
                <i class="fa fa-comment-o fa-2x" aria-hidden="true"></i>
                <i class="fa fa-share-alt fa-2x" aria-hidden="true"></i>
              </div>
              <div className="h-[7vh] w-[10%]   flex items-center">
                <i class="fa fa-bookmark-o fa-2x" aria-hidden="true"></i>
              </div>
            </div>
            <div className="h-[10vh] w-[100%]  flex flex-col ">
              <label className="font-bold text-[14px]">28,670 likes</label>
              <label className=" font-medium text-gray-400 text-[12px]">
                This view never gets old.
              </label>
              <label className=" font-thin text-gray-400 text-[12px]">
                view all 650 comments
              </label>
              <label className=" font-light text-gray-400">
                {" "}
                Add a Comment.....
              </label>
            </div>

            <div className="h-[1px] w-[100%] bg-gray-500"></div>
          </div>
        ))}

        <div className="h-[4vh] w-[60%]  flex justify-between">
          <div className="h-[4vh] w-[25%]  flex items-center">
            <label className="text-[14px]">Suggested for you</label>
          </div>
          <div className="h-[4vh] w-[10%] flex items-center">
            <i class="fa fa-times fa-lg" aria-hidden="true"></i>
          </div>
        </div>
      </div>
      <Suggested selfData={selfData} allUserData={userData}></Suggested>
    </div>
  );
}

export default HomePage;
