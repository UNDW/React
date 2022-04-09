import React from 'react';
import { updateNewPostText } from '../../../redux/state';
import classes from './MyPosts.module.css'
import Post from './Post/Post';
const MyPosts = (props) => {
    let postsElements = props.posts
        .map (post =><Post message={post.message} likesCount={post.likesCount} />)
    
    let newPostElements= React.createRef();
    
    let addPost = () =>{
        props.addPost();
        
    }
    
    let onPostChange =()=>{
        let text = newPostElements.current.value;
        props.updateNewPostText(text);
    }
        return (
        <div className={classes.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} 
                    ref={newPostElements} 
                    value ={props.newPostText} />
                </div>
                <div>
                    <button onClick={ addPost }>Add post</button>
                </div>
            </div>
            
            <div className={classes.posts}>
            {postsElements}

            </div>
        </div>
    )
}

export default MyPosts;