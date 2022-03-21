import React from 'react';
import classes from './Post.module.css'
const Post = (props) => {
    return (
                <div className={classes.item}>
                    <img src="https://i.ytimg.com/vi/zpuPaeBDSEM/maxresdefault.jpg"/>
                    {props.message}
                    <div>
                    <span>like</span> {props.likesCount}
                    </div>
                </div>
)}

export default Post;