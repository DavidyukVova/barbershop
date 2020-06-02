import React from 'react';
import i18n from '../../../i18n';
import classes from "./Footer.module.css";
import * as Svg from "../../../Svg";

const Social = () => {
    return (
        <div className={classes.footerSocial}>
            <span className={classes.socialTitle}>{i18n.t('Social networks')}:</span>
            <div className={classes.socialBlock}>
                <a href="https://www.instagram.com/cartel_druzhby_n/?igshid=xg5n1sw9pwk5" target="_blank" rel="noopener noreferrer">
                    <Svg.InstagramIco/>
                </a>
                <a href="https://www.facebook.com/barbershopcarteldruzhby/?eid=ARCf2F0rJIBPvSr9ZIqZyqm8Iv_MVmPII-So5Suy_QHi0FALFHWZx-lT9P8SrVpG0GS3QIMz51MBNafC" target="_blank" rel="noopener noreferrer">
                    <Svg.FacebookIco/>
                </a>
            </div>
        </div>
    )
};
export default Social;