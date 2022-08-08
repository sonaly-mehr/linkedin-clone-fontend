import React from "react";
import "./LinkedinFeed.css";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import post from "../images/post_img.jpg";
import post2 from "../images/Business-Analytics.jpg";
import user from "../images/user.jpg";
import userr from "../images/user2.png";
import Chip from "@mui/material/Chip";
import { AiOutlineLike } from "react-icons/ai";
import { MdOutlineComment } from "react-icons/md";
import { RiShareForwardLine, RiSendPlaneFill } from "react-icons/ri";

const UsersPosts = () => {
  return (
    <div className="users-post-section">
      <Card sx={{ maxWidth: "100%", marginBottom: "15px" }}>
        <CardHeader
          avatar={
            <img
              src={user}
              alt=""
              style={{ width: "50px", height: "50px", borderRadius: "50%" }}
            />
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="Backend Engineer and DevOps | Raising fund"
        />
        <CardContent>
          <Typography
            variant="body2"
            sx={{ color: "#000", marginTop: "-15px;" }}
          >
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          height="194"
          image={post}
          alt="Paella dish"
        />
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Chip
              icon={<AiOutlineLike style={{ fontSize: "24px" }} />}
              label="Like"
              sx={{
                backgroundColor: "transparent",
                borderRadius: "0px",
                fontSize: "1rem",
              }}
            />
          </IconButton>
          <IconButton aria-label="share">
            <Chip
              icon={<MdOutlineComment style={{ fontSize: "24px" }} />}
              label="Comment"
              sx={{
                backgroundColor: "transparent",
                borderRadius: "0px",
                fontSize: "1rem",
              }}
            />
          </IconButton>
          <IconButton aria-label="share">
            <Chip
              icon={<RiShareForwardLine style={{ fontSize: "24px" }} />}
              label="Share"
              sx={{
                backgroundColor: "transparent",
                borderRadius: "0px",
                fontSize: "1rem",
              }}
            />
          </IconButton>
          <IconButton aria-label="share">
            <Chip
              icon={<RiSendPlaneFill style={{ fontSize: "24px" }} />}
              label="Send"
              sx={{
                backgroundColor: "transparent",
                borderRadius: "0px",
                fontSize: "1rem",
              }}
            />
          </IconButton>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: "100%", marginBottom: "15px" }}>
        <CardHeader
          avatar={
            <img
              src={userr}
              alt=""
              style={{ width: "50px", height: "50px", borderRadius: "50%" }}
            />
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="Backend Engineer and DevOps | Raising fund"
        />
        <CardContent>
          <Typography
            variant="body2"
            sx={{ color: "#000", marginTop: "-15px;" }}
          >
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          height="194"
          image={post2}
          alt="Paella dish"
        />
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Chip
              icon={<AiOutlineLike style={{ fontSize: "24px" }} />}
              label="Like"
              sx={{
                backgroundColor: "transparent",
                borderRadius: "0px",
                fontSize: "1rem",
              }}
            />
          </IconButton>
          <IconButton aria-label="share">
            <Chip
              icon={<MdOutlineComment style={{ fontSize: "24px" }} />}
              label="Comment"
              sx={{
                backgroundColor: "transparent",
                borderRadius: "0px",
                fontSize: "1rem",
              }}
            />
          </IconButton>
          <IconButton aria-label="share">
            <Chip
              icon={<RiShareForwardLine style={{ fontSize: "24px" }} />}
              label="Share"
              sx={{
                backgroundColor: "transparent",
                borderRadius: "0px",
                fontSize: "1rem",
              }}
            />
          </IconButton>
          <IconButton aria-label="share">
            <Chip
              icon={<RiSendPlaneFill style={{ fontSize: "24px" }} />}
              label="Send"
              sx={{
                backgroundColor: "transparent",
                borderRadius: "0px",
                fontSize: "1rem",
              }}
            />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default UsersPosts;
