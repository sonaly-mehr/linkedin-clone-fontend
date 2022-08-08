import React from "react";
import "./LinkedinFeed.css";
import user from "../images/user3.jpg";
import logo from "../images/istockphoto-1231977703-612x612.jpg";
import { Button } from "@mui/material";
import linkedin from "../images/linkedin.png";

const RightSidebar = () => {
  return (
    <div className="right-sidebar-section">
      <div className="right-sidebar-card">
        <p>Get the latest jobs and insdustry news</p>
        <div style={{textAlign:'center'}}>
          <img src={user} alt="" style={{ borderRadius: "50px" }} />
          <img src={logo} alt="" />
        </div>
        <h6>John, explore relevant opportunities relevant with Logically</h6>
        <Button variant="outlined" sx={{borderRadius: '20px', fontSize: '0.7rem', fontWeight: 800, marginTop: '5px', marginLeft: '33%', textTransform:'capitalize'}}>Follow</Button>
      </div>

      <div className="footer">
        <div className="footer-span">
        <span>About</span> <span>Accessibility</span>
        <span>Help Center</span> <br />
        <span>Privacy & Terms</span> <span>Ad Choices</span>
        <br />
        <span>Advertising</span> <span>Business Service</span> <br />
        <span>Get the Linked app</span> <span>More</span> <br />
        </div>
        <p>
          <img src={linkedin} alt="" /> LinkedIn Corporation © 2022
        </p>
      </div>
    </div>
  );
};

export default RightSidebar;
