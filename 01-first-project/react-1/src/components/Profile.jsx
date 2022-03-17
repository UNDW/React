import React from 'react';
import classes from './Profile.module.css'
const Profile = () => {
    return <div className={classes.content}>
        <div>
            <img src="https://news.microsoft.com/wp-content/uploads/prod/sites/46/2020/10/Space_1-1000x563-1.jpg" />
        </div>
        <div>
            ava + description
        </div>
        <div>
            My post
            <div>
                New post
            </div>
            <div className={classes.posts}>
                <div className={classes.item}>
                    Post 1
                </div>
                <div className={classes.item}>
                    Post 2
                </div>
            </div>
        </div>

    </div>
}

export default Profile;