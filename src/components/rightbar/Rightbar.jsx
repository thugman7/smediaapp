import React from 'react';
import "./rightbar.css";
import { Users } from '../../dummyData';
import Online  from "../online/Online.jsx";
import Profile from '../profile/Profile';
export default function Rightbar({profile}) {
 
 const HomeRightBar=()=>{
     return(
         <>
             <div className="birthdayContainer">
                    <img className="birthdayImg" src="/assets/gift.png" alt=""/>
                    <span className="birthdayText">
                       <b>Vinicius Jr.</b> and <b>3 other friends</b> have birthdays today
                    </span>
                </div>
                <img className="rightbarAd" src="/assets/ad.png" alt=""/>
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map(u=>(
                        <Online key={u.id} user={u}/>
                    ))}
                </ul>
         </>
     )
 }
 
 const ProfileRightBar=()=>{
     return(
         <div>
           <h2 className='UserInfo'>User Information</h2>
           <div className="rightbarInfo">
               <div className="rightbarInfoItem">
                   <span className='rightbarInfoKey'>City:</span>
                   <span className='rightbarInfoValue'>Kolkata</span>
               </div>
               <div className="rightbarInfoItem">
                   <span className='rightbarInfoKey'>Breed:</span>
                   <span className='rightbarInfoValue'>Labrador</span>
               </div>
               <div className="rightbarInfoItem">
                   <span className='rightbarInfoKey'>Age:</span>
                   <span className='rightbarInfoValue'>5</span>
               </div>
           </div>
           <h4 className='rightbarTitle'>User Friends</h4>
           <div className="rightbarFollowings">
               <div className="rightbarFollowing">
                   <img src="assets/person/1.jpg" alt="" className="rightbarFollowingImg" />
                   <span className='rightbarFollowingName'>Mark Zouma</span>
               </div>
               <div className="rightbarFollowing">
                   <img src="assets/person/2.jpg" alt="" className="rightbarFollowingImg" />
                   <span className='rightbarFollowingName'>Mark Zouma</span>
               </div>
               <div className="rightbarFollowing">
                   <img src="assets/person/3.jpg" alt="" className="rightbarFollowingImg" />
                   <span className='rightbarFollowingName'>Mark Zouma</span>
               </div>
               <div className="rightbarFollowing">
                   <img src="assets/person/4.jpg" alt="" className="rightbarFollowingImg" />
                   <span className='rightbarFollowingName'>Mark Zouma</span>
               </div>
               <div className="rightbarFollowing">
                   <img src="assets/person/5.jpg" alt="" className="rightbarFollowingImg" />
                   <span className='rightbarFollowingName'>Mark Zouma</span>
               </div>
               <div className="rightbarFollowing">
                   <img src="assets/person/6.jpg" alt="" className="rightbarFollowingImg" />
                   <span className='rightbarFollowingName'>Mark Zouma</span>
               </div>
           </div>
         </div>  
     )
 }
 
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                {profile ? <ProfileRightBar /> : <HomeRightBar />}
            </div>
        </div>
    );
}