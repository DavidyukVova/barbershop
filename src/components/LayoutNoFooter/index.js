import React from 'react';
import Header from "./Header";
import classes from './Layout.module.css'
import TrainingWidget from "../Widgets/TrainingWidget";

const Layout = (props) => {
    return (
        <div className={classes.layoutWrap}>
            <Header/>
            <div className={classes.main}>
                {props.children}
            </div>
            <TrainingWidget/>
        </div>
    )
};

export default Layout;