import React from 'react';
import classes from './Header.module.css'
import * as Svg from '../../../Svg'

const Social = () => {
    return (
        <div className={classes.socialBlock}>
            <a href="https://www.instagram.com/barbershop.cartel.druzhby/" target="_blank" rel="noopener noreferrer">
                <Svg.InstagramIco/>
            </a>
            <a href="https://www.facebook.com/barbershopcarteldruzhby/?eid=ARCf2F0rJIBPvSr9ZIqZyqm8Iv_MVmPII-So5Suy_QHi0FALFHWZx-lT9P8SrVpG0GS3QIMz51MBNafC" target="_blank" rel="noopener noreferrer">
                <Svg.FacebookIco/>
            </a>
        </div>
    )
};

export default Social;