import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HomePage from "./pages/HomePage";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import ViewArchive from "./pages/ViewArchive";
import Notification from "./Components/Notification";
import Userpage from "./pages/Userpage";
import Messanger from "./Components/Messanger";
import Inbox from "./pages/Inbox";


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/editprofile" element={<EditProfile />} />
        <Route path="/viewarchive" element={<ViewArchive />} />
        <Route path="/userpage" element={<Userpage/>} />
        <Route path="/messanger" element={<Messanger/>} />
        <Route path="/inbox" element={<Inbox/>} />


      </Routes>
    </HashRouter>
  );
}

export default App;
