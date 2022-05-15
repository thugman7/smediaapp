//import React from 'react';
import "./Share.css";
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import RoomIcon from '@mui/icons-material/Room';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
function Share(props) {
    return (
        <div className="share">
            <div className="shareWrapper">
               <div className="shareTop">
                   <img className="shareProfileImg" src="/assets/person/3.jpg" alt="Doggy"/>
                   <input className="shareInput" placeholder="What's barking Romelu?"/>
               </div>
               <hr className="shareHr"/>
               <div className="shareBottom">
                   <div className="shareOptions">
                       <div className="shareOption">
                           <PermMediaIcon htmlColor="tomato" className="shareIcon"/>
                           <span className="shareOptionText">Photo or Media</span>
                       </div>
                       <div className="shareOption">
                           <LabelIcon htmlColor="blue" className="shareIcon"/>
                           <span className="shareOptionText">Tag</span>
                       </div>
                       <div className="shareOption">
                           <RoomIcon htmlColor="green" className="shareIcon"/>
                           <span className="shareOptionText">Location</span>
                       </div>
                       <div className="shareOption">
                           <EmojiEmotionsIcon htmlColor="goldenrod" className="shareIcon"/>
                           <span className="shareOptionText">Feelings</span>
                       </div>
                   </div>
                   <button className="shareButton">Share</button>
               </div>
            </div>
       </div>
    );
}

export default Share;