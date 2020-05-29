import React from 'react';
import Header from "./Header";
import classes from './Layout.module.css'

const Layout = (props) => {
    return (
        <div className={classes.layoutWrap}>
            <Header/>
            <div className={classes.main}>
                {props.children}
            </div>
        </div>
    )
};

export default Layout;