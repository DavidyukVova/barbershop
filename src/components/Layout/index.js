import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import classes from './Layout.module.css'

const Layout = (props) => {
    return (
        <div className={classes.layoutWrap}>
            <Header/>
            <div className={classes.main}>
                {props.children}
            </div>
            <Footer/>
        </div>
    )
};

export default Layout;