import React from 'react';
import './profile.css';

import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
function Profile() {
    return (
        <>
            <Topbar/>
            <div className="profile">
                <Sidebar/>
               <div className="profileRight">
                   <div className="profileRightTop">
                       <div className="profileCover">
                       <img className="profileCoverImg" src="assets/post/12.jpg" alt=""/>
                       <img className="profileUserImg" src="assets/person/3.jpg" alt=""/>
                       </div>
                       <div className="profileInfo">
                           <h4 className="profileInfoName">Roman Roy</h4>
                           <span></span>
                       </div>
                   </div>
                   <div className="profileRightBottom">
                       <Feed/>
                       <Rightbar profile/>
                   </div>
                     
                </div> 
                
            </div>    
        </>
    );
}

export default Profile;