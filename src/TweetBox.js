import React from 'react';
import './TweetBox.css';
import   Button from '@mui/material/Button';
import './images.png';


export default function TweetBox() {
    return (
        <div className="tweetBox">
           <form>
               <div className="tweetBox__input">
                <img className="tweetImg" src={require("./images.png").default} alt="logo"/>
                <input placeholder="What's happening?" type="text"/>
                </div>
                <input className="tweet__imageInput" placeholder="Optional: Enter img URL" type="text"/>
                
                 <Button className="tweetButton">Tweet</Button>
             </form>
            
         </div>
    )
}
