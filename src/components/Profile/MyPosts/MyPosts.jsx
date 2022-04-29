import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';
import {updateNewPostTextActionCreator,addPostActionCreater} from '../../../redux/profileReducer'


const MyPosts = (props) => {
    let postsElements = props.posts
        .map(post => <Post message={post.message} likesCount={post.likesCount} />)

    let newPostElements = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreater());

    }
    let onPostChange = () => {
        let text = newPostElements.current.value;
        let action = (updateNewPostTextActionCreator(text));
        props.dispatch(action);
    }
    return (
        <div className={classes.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                        ref={newPostElements}
                        value={props.newPostText} />
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>

            <div className={classes.posts}>
                {postsElements}

            </div>
        </div>
    )
}

export default MyPosts;