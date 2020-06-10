import React from 'react';
import classes from "./Footer.module.css";
import * as Svg from "../../../Svg";
import i18n from '../../../i18n';

const Locations = () => {
    return (
        <div className={classes.locationBlock}>
            <div className={classes.iconWrap}>
                <Svg.LocationPointIco/>
            </div>
            <div className={classes.text}>
                <span>{i18n.t('Kyiv, b. Druzhby Narodiv 32a')}</span>
            </div>
        </div>
    )
};

export default Locations;