import { Grid } from "@mui/material";
import React from "react";
import LeftSidebar from "./LeftSidebar";
import "./LinkedinFeed.css";
import "./Responsive.css";
import { makeStyles } from "@mui/styles";
import NewsFeed from "./NewsFeed";
import RightSidebar from "./RightSidebar";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
}));

const LinkedinFeed = () => {
  const classes = useStyles();
  return (
    <div className="linkedin-feed">
      <Grid container className={classes.mainContainer} spacing={3}>
        <Grid item xs>
          <LeftSidebar />
        </Grid>
        <Grid item xs={12} md={6}>
          <NewsFeed />
        </Grid>
        <Grid item xs>
          <RightSidebar />
        </Grid>
      </Grid>
    </div>
  );
};

export default LinkedinFeed;
