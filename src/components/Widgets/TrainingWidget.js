import React from 'react';
import {withRouter} from "react-router";
import classes from './Widgets.module.css';
import i18n from '../../i18n';
import {animateScroll as scroll} from "react-scroll/modules";

const TrainingWidget = ({history}) => {

    const handleScroll = () => {
        scroll.scrollToTop()
    };

    return (
        <div className={classes.training} onClick={e => {history.push(`/${i18n.language}/training`); handleScroll()}}>
            <span>
                {i18n.t('Training')}
            </span>
        </div>
    )
};
export default withRouter(TrainingWidget)