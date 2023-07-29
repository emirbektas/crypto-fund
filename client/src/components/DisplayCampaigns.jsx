import React from "react";
import { useNavigate } from "react-router-dom";

import { loader } from "../assets";

function displayCampaigns({ title, isLoading, campaigns }) {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="font-epilogue font-semibold text-[16px] text-white text-left">
        {title} ({campaigns.length})
      </h1>
    </div>
  );
}

export default displayCampaigns;
