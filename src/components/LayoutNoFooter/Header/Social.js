import React from 'react';
import classes from './Header.module.css'
import * as Svg from '../../../Svg'

const Social = () => {
    return (
        <div className={classes.socialBlock}>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <Svg.InstagramIco/>
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <Svg.FacebookIco/>
            </a>
        </div>
    )
};

export default Social;