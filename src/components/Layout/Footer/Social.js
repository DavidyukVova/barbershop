import React from 'react';
import i18n from '../../../i18n';
import classes from "./Footer.module.css";
import * as Svg from "../../../Svg";

const Social = () => {
    return (
        <div className={classes.footerSocial}>
            <span className={classes.socialTitle}>{i18n.t('Social networks')}:</span>
            <div className={classes.socialBlock}>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                    <Svg.InstagramIco/>
                </a>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                    <Svg.FacebookIco/>
                </a>
            </div>
        </div>
    )
};
export default Social;