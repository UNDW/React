import React from 'react';
import classes from './ProfileInfo.module.css'
const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img src="https://news.microsoft.com/wp-content/uploads/prod/sites/46/2020/10/Space_1-1000x563-1.jpg" />
            </div>
            <div className={classes.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;