import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import React, { useState } from "react";
import "./LinkedinFeed.css";
import logo from "../images/logo.png";
import { FaHome, FaUserFriends } from 'react-icons/fa';
import { IoIosBriefcase } from 'react-icons/io';
import { BsFillChatLeftDotsFill, BsFillBellFill,BsFillGrid3X3GapFill } from 'react-icons/bs';
import user from '../images/user.jpg'

const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#EEF3F8",
    "&:hover": {
      backgroundColor: "#EEF3F8",
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));
  
  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "25ch",
        fontSize: "14px",
        height: "18px",
      },
    },
  }));

const NavBar = () => {
        const [value, setValue] = useState(0);
      
        const handleChange = (event, newValue) => {
          setValue(newValue);
        };

    return (
        <div className="navabr">
      <div className="container">
        <Box sx={{ flexGrow: 1 }}>
          <AppBar
            position="static"
            sx={{
              borderBottom: "1px solid #eaeaea",
              boxShadow: "none",
              background: "#fff",
              color: "#000",
            }}
          >
            <Toolbar sx={{ width: 1200, margin: "0 auto" }}>
              <img
                src={logo}
                alt=""
                style={{ width: "30px", height: "30px" }}
              />
              <Search sx={{ width: { xs: "31%" } }}>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
              <Box sx={{ flexGrow: 1 }} />
              <Box sx={{ display: { xs: "none", md: "flex", color:'#000' } }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="icon label tabs example"
                >
                  <Tab icon={<FaHome className="icon-style"/>} label="Home" sx={{textTransform:'capitalize', fontSize:'13px'}}/>
                  <Tab icon={<FaUserFriends className="icon-style"/>} label="My Networks" sx={{textTransform:'capitalize', fontSize:'13px'}}/>
                  <Tab icon={<IoIosBriefcase className="icon-style"/>} label="Jobs" sx={{textTransform:'capitalize', fontSize:'13px'}}/>
                  <Tab icon={<BsFillChatLeftDotsFill className="icon-style"/>} label="Messaging" sx={{textTransform:'capitalize', fontSize:'13px'}}/>
                  <Tab icon={<BsFillBellFill className="icon-style"/>} label="Notifications" sx={{textTransform:'capitalize', fontSize:'13px'}}/>
                  <img src={user} alt="" className="profile-img"/>
                  <Tab label="Me" sx={{textTransform:'capitalize', fontSize:'13px', marginTop:'28px'}}/>
                  <Tab icon={<BsFillGrid3X3GapFill className="icon-style"/>} label="Work" sx={{textTransform:'capitalize', fontSize:'13px'}}/>
                  <a href="" className="premium-linkedin">Get Hired Faster, <br/>Try Premium Free</a>
                  {/* <Tab icon={<PersonPinIcon />} label="Me"/> */}
                </Tabs>
                
              </Box>
              {/* <Box sx={{ display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="show more"
                  aria-haspopup="true"
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>
              </Box> */}
            </Toolbar>
          </AppBar>
        </Box>
      </div>
    </div>
    );
};

export default NavBar;