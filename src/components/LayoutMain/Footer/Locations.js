import React from 'react';
import classes from "./Footer.module.css";
import * as Svg from "../../../Svg";
import i18n from '../../../i18n';
import {connect} from "react-redux";

const Locations = ({env}) => {
    return (
        <React.Fragment>
            <div className={classes.locationBlock}>
                <div className={classes.iconWrap}>
                    <Svg.LocationPointIco/>
                </div>
                <div className={classes.text}>
                    <span>{i18n.t('Kyiv, b. Druzhby Narodiv 32a')}</span>
                </div>
            </div>
            <div className={classes.locationBlock}>
                <div className={classes.text}>
                    <span>{env.phone}</span>
                </div>
            </div>
        </React.Fragment>
    )
};

const mapStateToProps = (state) => ({
    env: state.env,
});

export default connect(mapStateToProps) (Locations);