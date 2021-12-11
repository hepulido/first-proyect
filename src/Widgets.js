 import React from "react";
 import "./Widgets.css";
 import Button from '@mui/material/Button';
 import SearchIcon from "@material-ui/icons/Search";
 import './TweetBox.css'
 function Widgets() {
   return (
     <div className="widgets">
       <div className="widgets__input">
         <SearchIcon className="widgets__searchIcon" />
         <input placeholder="Search Twitter" type="text" />
       </div>

       <div className="widgets__widgetContainer">
         <h2>What's happening</h2>

         <Button className="tweetButton"> Timeline </Button>

         <Button className="tweetButton"> Share</Button>
           
         

         <Button className="tweetButton"> Tweet
           
         </Button>
       </div>
     </div>
   );
 }

 export default Widgets;
