import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css'
const Profile = () => {
    return <div>
        <div>
            <img src="https://news.microsoft.com/wp-content/uploads/prod/sites/46/2020/10/Space_1-1000x563-1.jpg" />
        </div>
        <div>
            ava + description
        </div>
        <MyPosts />
    </div>
}

export default Profile;