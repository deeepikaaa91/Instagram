import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  useEffect(() => {
    getUserDetail();
  }, []);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [UserDetails, setUserDetails] = useState([]);
  const getUserDetail = () => {
    axios.get("http://localhost:5001/api/userdetail").then(
      (res) => {
        setUserDetails(res.data.data);
      },
      (err) => {
        alert(err);
      }
    );
  };
  const loginCheck = () => {
    if (username !== "") {
      let user = UserDetails.filter((i) => i.username == username);
      if (user.length > 0) {
        if (user[0].password == password) {
          localStorage.setItem("username", username);
          navigate("/homepage");
        } else {
          alert("Wrong Password");
        }
      } else {
        alert("User not found!");
      }
    }
  };
  return (
    <div className="h-[100vh] w-[100%] ">
      {/* {JSON.stringify(UserDetails)} */}
      <div className="h-[90vh] w-[100%] flex justify-center items-center gap-10">
        <div className="h-[80vh] w-[22%] border border-solid bg-red-400">
          <img
            className="h-[80vh] w-[100%] object-cover object-center"
            src="https://images.ctfassets.net/az3stxsro5h5/NjZUwfga63k7mTZCeKhvH/2cbcc7fa1e907b0a9d37155077c253f8/Nov1-What_to_Post_on_Instagram_When_You_re_Fresh_Out_of_Ideas-Newsletter-Feature-FL"
          ></img>
        </div>
        <div className="h-[80vh] w-[22%]  flex flex-col gap-4">
          <div className="h-[60vh] w-[100%] border-[1px] border-solid flex flex-col justify-center items-center gap-7">
            <h1 className="text-[30px] w-[50%] ">Instagram</h1>
            <input
              onChange={(e) => setUsername(e.target.value)}
              className="h-[4vh] w-[70%] border-[1px] outline-none border-solid border-[gray] pl-[10px] text-[14px]"
              type="email"
              placeholder="phone number. username ,or email"
            ></input>
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="h-[4vh] w-[70%] border-[1px] outline-none border-solid border-[gray] pl-[10px] text-[14px]"
              type="password"
              placeholder="password"
            ></input>
            <button
              onClick={() => loginCheck()}
              className="h-[5vh] w-[70%] border border-solid rounded-[8px] bg-blue-400 font-bold text-[white]"
            >
              Log in{" "}
            </button>
            <div className="flex justify-center items-center gap-3">
              <div className="h-[1px] w-[90px] bg-black"></div>
              <h1>OR</h1>
              <div className="h-[1px] w-[90px] bg-black"></div>
            </div>
            <div className="flex justify-center items-center gap-2">
              <i class="fa fa-facebook-official" aria-hidden="true"></i>
              <h1 className="font-bold text-blue-950">Log in with Facebook</h1>
            </div>
            <label className="">forget password ?</label>
          </div>
          <div className="h-[10vh] w-[100%] flex justify-center items-center border-[1px] border-solid">
            <button onClick={() => navigate("/signup")}>
              Don't have an account?
              <span className="text-blue-600 font-bold ">Sign up</span>{" "}
            </button>
          </div>
          <label className="text-center">Get tha app.</label>
          <div className="h-[10vh] w-[100%] flex gap-4 justify-center items-center">
            <img
              className="h-[6vh] w-[40%]"
              src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png"
            ></img>
            <img
              className="h-[6vh] w-[40%]"
              src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png"
            ></img>
          </div>
        </div>
      </div>
      <div className="h-[3vh] w-[100%] flex justify-center items-center gap-4 text-[13px] text-gray-600">
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
        <button className="text-[13px] hover:underline">
          Contact uploading & non-users
        </button>
        <button className="text-[13px] hover:underline">Meta Verify</button>
      </div>
      <div className=" text-[13px] text-gray-600 flex justify-center items-center">
        <select>
          <option>English</option>
          <option>Hindi</option>
          <option>italian</option>
        </select>
        <label>© 2024 Instagram from Meta</label>
      </div>
    </div>
  );
}

export default Home;
