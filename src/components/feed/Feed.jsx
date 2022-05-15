import React from 'react';
import "./feed.css";
import Share from "../Share/Share.jsx";
import Post from "../post/Post.jsx";
import {posts} from "../../dummyData"
export default function Feed() {
    return (
        <div className="feed">
           <div className="feedWrapper" >
               <Share />
               {posts.map((p)=>(
                   <Post key={p.id} post={p}/>
                ))}
                   
           </div>
        </div>
    );
}