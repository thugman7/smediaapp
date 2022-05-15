import React from 'react';
import "./closeFriend.css";
function CloseFriend({user}) {
    return (
        <div>
            <li className="sidebarFriend">
                       <img className='sidebarFriendImg' src={user.profilePicture} alt='Dog'/>
                       <span className='sidebarFriendName'>{user.username}</span>
                   </li>
        </div>
    );
}

export default CloseFriend;