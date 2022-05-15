import React, { useState } from 'react';
import "./Post.css";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Users} from "../../dummyData";

function Post({post}) {
    const [like,setLike]=useState(post.like);
    const [isLiked,setIsLiked]=useState(false);
     
    const likeHandler=()=>{
        setLike(isLiked ? like-1 : like+1);
        setIsLiked(!isLiked);
    }

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfileImg" 
                           src={Users.filter(u=>u.id === post.userId)[0].profilePicture} 
                            alt="PostProfileImage"/>
                        <span className='postUserName'>
                            {Users.filter(u=>u.id === post.userId)[0].username}
                        </span>                    
                        <span className='postDate'>{post.date}</span>                    
                    </div>
                    <div className="postTopRight">
                        <MoreVertIcon />
                    </div>
                </div>
                <div className="postCenter">
                   <span className='postText'>{post?.desc}</span>
                   <img className="postImg" src={post.photo}  alt="PostImage"/>
                </div>
                <div className="postBottom">
                       <div className="postBottomLeft">
                           <img className="likeIcon" onClick={likeHandler} 
                           src="/assets/like.png" alt="Like"/>
                           <img className="likeIcon" onClick={likeHandler}
                           src="/assets/heart.png" alt="Heart"/>
                           <span className='postLikeCounter'>{like} people like this</span>
                       </div>
                       <div className="postBottomRight">
                             <span className="postCommentText">{post.comment} comments</span>
                       </div>
                </div>
            </div>
        </div>
    );
}

export default Post;
