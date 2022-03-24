import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';
const MyPosts = (props) => {

    let postsData =[
        { id: 0, message: 'Hi, how are you?', likesCount: 12 },
        { id: 1, message: 'Its my first post', likesCount: 11 },
    ]

    return (
        <div className={classes.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            
            <div className={classes.posts}>
                <Post message={postsData[0].message} likesCount={postsData[0].likesCount} />
                <Post message={postsData[1].message} likesCount={postsData[1].likesCount} />

            </div>
        </div>
    )
}

export default MyPosts;