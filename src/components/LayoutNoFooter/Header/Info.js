import React from 'react';
import {NavLink} from "react-router-dom";
import i18n from "../../../i18n";
import {Button} from "react-bootstrap";
import LangDropdown from "./LangDropdown";
import Social from "./Social";
import classes from "./Header.module.css";

const Info = () => {
    return (
        <div className={classes.infoBlock}>
            <div className={classes.item}>
                <NavLink to={`/${i18n.language}/contacts`} className={classes.menuLink} activeClassName={classes.active}>
                    {i18n.t('Contacts')}
                </NavLink>
            </div>
            <div className={classes.item}>
                <Button size={"sm"} variant="outline-primary">{i18n.t('Entry')}</Button>
            </div>
            <div className={classes.item}>
                <LangDropdown/>
            </div>
            <div className={classes.item}>
                <Social/>
            </div>
        </div>
    )
};

export default Info;