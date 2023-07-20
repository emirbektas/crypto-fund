import React from "react";
import { ConnectWallet } from "@thirdweb-dev/react";
import { CampaignDetails, CreateCampaign, Profile, Home } from "./pages";
import { Sidebar, Navbar } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="relative sm:-8 p-4 bg-[#131318] min-h-screen flex flex-row">
        <div className="sm:flex hidden mr-10 relative">
          <Sidebar />
        </div>
        <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
