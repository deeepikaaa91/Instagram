import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Search({ show }) {
  useEffect(() => {
    getUserDetails();
  }, []);
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [userdetail, setUserDetail] = useState([]);

  const getUserDetails = () => {
    axios
      .get("http://localhost:5001/api/userdetail")
      .then((res) => setUserDetail(res.data.data));
  };

  const selfData = userdetail.filter(
    (i) => i.username == localStorage.getItem("username")
  );

  const putFollowData = (userName, oppositeId) => {
    const obj = {
      following: [...selfData[0].following, userName],
    };
    const oppositeData = userdetail.filter((i) => i._id == oppositeId);
    const obj2 = {
      follower: [...oppositeData[0].follower, selfData[0].username],
    };
    axios.put("http://localhost:5001/api/userdetail/" + selfData[0]._id, obj);
    axios
      .put("http://localhost:5001/api/userdetail/" + oppositeId, obj2)
      .then(() => getUserDetails());
  };

  const unFollowData = (userName, oppositeId) => {
    const obj = {
      following: selfData[0].following.filter((i) => i != userName),
    };
    const oppositeData = userdetail.filter((i) => i._id == oppositeId);
    const obj2 = {
      follower: oppositeData[0].follower.filter(
        (i) => i !== selfData[0].username
      ),
    };
    axios.put("http://localhost:5001/api/userdetail/" + selfData[0]._id, obj);
    axios
      .put("http://localhost:5001/api/userdetail/" + oppositeId, obj2)
      .then(() => getUserDetails());
  };

  return (
    <div>
      <div
        style={{ left: show == true ? "5%" : "-100%" }}
        className="h-[100vh] w-[30%]  top-0 transition-all fixed flex border z-[100]"
      >
        <div className="h-[100vh] w-[100%] bg-white pt-[25px] rounded-r-[20px] flex flex-col  gap-4">
          <div className="h-[15vh] w-[100%]   pl-[20px] flex flex-col gap-3 border-b border-gray-400">
            <h1 className="text-[28px] font-bold ">Search</h1>
            <div className="h-[5vh] w-[90%] bg-gray-200 rounded-lg  flex items-center pl-[10px]">
              <i class="fa fa-search" aria-hidden="true"></i>
              <input
                onChange={(e) => setSearch(e.target.value)}
                className=" h-[5vh] w-[90%] rounded-[10px]   bg-gray-200 pl-[10px] outline-none "
                type=""
                placeholder="search"
              ></input>
            </div>
          </div>
          <div className="h-[5vh] w-[100%]  flex justify-between px-[22px] items-center">
            <label className="font-semibold">Recent</label>
            <label className=" font-semibold text-blue-400 hover:text-black">
              Clear All
            </label>
          </div>

          <div className="h-[50vh] w-[100%]  flex flex-col  items-center">
            {search == "" ? (
              <label>No recent search</label>
            ) : (
              <>
                {userdetail
                  .filter(
                    (i) =>
                      i?.username?.includes(search) ||
                      i?.fullName?.includes(search)
                  )
                  .map((i) => (
                    <div
                      onClick={() => {
                        localStorage.setItem("userdetail", JSON.stringify(i));
                        navigate("/userpage");
                        window.location.reload();
                      }}
                      className="h-[8vh] w-[100%] flex justify-between px-4">
                      <div className="w-[50%] h-[7vh] flex items-center gap-3 ">
                        <img
                          className="w-[45px] h-[45px] border-[2px] rounded-full "
                          src={i.dp}
                        ></img>
                        <div className="flex flex-col ">
                          <label className="font-semibold">
                            {" "}
                            {i.username}{" "}
                          </label>
                          <label className="text-gray-500 text-[12px]">
                            Suggested for you
                          </label>
                        </div>
                      </div>
                      <div className="w-[50%] h-[7vh] flex justify-end  items-center">
                        {/* {selfData[0].following.includes(i.username) ? (
                          <label
                            onClick={() => unFollowData(i.username, i._id)}
                            className="text-[13px] text-blue-500 font-semibold hover:text-gray-500"
                          >
                            Following
                          </label>
                        ) : (
                          <label
                            onClick={() => putFollowData(i.username, i._id)}
                            className="text-[13px] text-blue-500 font-semibold hover:text-gray-500"
                          >
                            Follow
                          </label>
                        )} */}
                      </div>
                    </div>
                  ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
