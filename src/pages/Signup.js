import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate  = useNavigate()
  useEffect(() => {
    getUsersData();
  }, []);
  const [mobile, setMobile] = useState(0);
  const [fullName, setFullName] = useState("");
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userDetails, setUsersDetails] = useState([]);
  const userNames = userDetails.map((i) => i.userName);
  const getUsersData = () => {
    axios
      .get("http://localhost:5001/api/userdetail")
      .then((res) => setUsersDetails(res.data.data));
  };
  const [mobileValidation, setMobileValidation] = useState(true);
  const [usernameValidation, setusernameValidation] = useState(true);

  const signUp = () => {
    if (String(mobile).length == 10) {
      if (!userNames.includes(userName)) {
        const postUserData = () => {
          const item = {
            mobile: mobile,
            fullname: fullName,
            username: userName,
            password: password,
          };
          axios.post("http://localhost:5001/api/userdetail", item).then(
            (res) => {alert(JSON.stringify(res)); navigate('/')},
            (err) => alert(err)
          );
        };
        postUserData()
      } else {
        setusernameValidation(false);
      }
    } else {
      setMobileValidation(false);
    }
  };
  return (
    <div className=" ">
      <div className=" h-[115vh] w-[100%] flex flex-col justify-center items-center gap-3">
        <div className="h-[78vh] w-[23%]  flex  flex-col items-center gap-4 pt-[25px] border-[1px] border-solid border-gray-300">
          <h1 className="text-[30px] font-bold">Instagram</h1>
          <p className="w-[80%] text-center font-bold text-gray-500">
            Sign up to see photos and videos from your friends.
          </p>
          <button className="h-[4vh] w-[78%] bg-blue-500 rounded-[10px] text-[14px]  text-white font-semibold">
            {" "}
            <i class="fa fa-facebook-official" aria-hidden="true"></i> Log in
            with Facebook
          </button>
          <div className="flex justify-center items-center gap-2">
            <div className="h-[1px] w-[110px] bg-gray-300"></div>
            <h1 className="text-gray-400 text-[12px]">OR</h1>
            <div className="h-[1px] w-[110px] bg-gray-300"></div>
          </div>
          <div className="h[18vh] w-[100%] flex flex-col justify-center items-center gap-2">
            <div className="flex items-center w-[78%] relative">
              <input
                onChange={(e) => setMobile(e.target.value)}
                className="h-[5vh] w-[100%] pl-[10px] text-[12px] border-[1px] border-solid border-gray-300 bg-slate-50"
                type="email"
                placeholder="Mobile Number or email"
              ></input>
              <div
                style={{
                  visibility: mobileValidation == true ? "hidden" : "visible",
                }}
                className="w-15 right-2 h-6 rounded-full border border-red-300 flex items-center justify-center absolute"
              >
                <label>X</label>
              </div>
            </div>
            <input
              onChange={(e) => setFullName(e.target.value)}
              className=" h-[5vh] w-[78%] pl-[10px] text-[12px] border-[1px] border-solid border-gray-300 bg-slate-50"
              type="email"
              placeholder="Full Name"
            ></input>
            <input
              onChange={(e) => setUsername(e.target.value)}
              className=" h-[5vh] w-[78%] pl-[10px] text-[12px] border-[1px] border-solid border-gray-300 bg-slate-50"
              type="email"
              placeholder="Username"
            ></input>
            <input
              onChange={(e) => setPassword(e.target.value)}
              className=" h-[5vh] w-[78%] pl-[10px] text-[12px] border-[1px] border-solid border-gray-300 bg-slate-50"
              type="email"
              placeholder="Password"
            ></input>
          </div>
          <p className="w-[75%] text-center text-[12px] text-gray-400">
            People who use our service may have uploaded your contact
            information to Instagram. Learn More
          </p>
          <p className="w-[80%] text-center text-[12px] text-gray-400">
            By signing up, you agree to our Terms , Privacy Policy and Cookies
            Policy.
          </p>
          <button
            onClick={() => signUp()}
            className="h-[4vh] w-[78%] bg-blue-400 rounded-[10px] text-[14px] text-white font-semibold"
          >
            Sign up
          </button>
        </div>
        <div className="h-[8vh] w-[23%]  border-[1px] border-gray-300 border-solid flex justify-center items-center">
          <button>
            Have a account ?{" "}
            <span className="text-blue-600 font-bold ">Log in</span>{" "}
          </button>
        </div>

        <label className="text-center">Get tha app.</label>
        <div className="h-[8vh] w-[100%] flex gap-3 justify-center items-center">
          <img
            className="h-[6vh] w-[9%]"
            src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png"
          ></img>
          <img
            className="h-[6vh] w-[9%]"
            src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png"
          ></img>
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
    </div>
  );
}

export default Signup;
