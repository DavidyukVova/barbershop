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
                <NavLink to={`/${i18n.language}/contacts`} className={classes.menuLink}
                         activeClassName={classes.active}>
                    {i18n.t('Contacts')}
                </NavLink>
            </div>
            <div className={`${classes.item} d-none d-lg-block`}>
                <a href="https://n332210.yclients.com/">
                    <Button size={"sm"} variant="outline-primary">{i18n.t('Entry')}</Button>
                </a>
            </div>
            <div className={`${classes.item} d-block d-md-none d-lg-block`}>
                <LangDropdown/>
            </div>
            <div className={`${classes.item} d-none d-lg-block`}>
                <Social/>
            </div>
        </div>
)
};

export default Info;