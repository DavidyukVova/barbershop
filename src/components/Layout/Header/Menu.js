import React from 'react';
import {NavLink} from "react-router-dom";
import classes from './Header.module.css'
import i18n from '../../../i18n';

const Menu = () => {
    return (
        <nav className={classes.menu}>
            <NavLink to={`/${i18n.language}/`} className={classes.menuLink}>
                {i18n.t('Main')}
            </NavLink>
            <NavLink to={`/${i18n.language}/about/`} className={classes.menuLink} activeClassName={classes.active}>
                {i18n.t('About us')}
            </NavLink>
            <NavLink to={`/${i18n.language}/barbers/`} className={classes.menuLink} activeClassName={classes.active}>
                {i18n.t('Barbers')}
            </NavLink>
            <NavLink to={`/${i18n.language}/services/`} className={classes.menuLink} activeClassName={classes.active}>
                {i18n.t('Services')}
            </NavLink>
            <NavLink to={`/${i18n.language}/gallery/`} className={classes.menuLink} activeClassName={classes.active}>
                {i18n.t('Gallery')}
            </NavLink>
            <NavLink to={`/${i18n.language}/training/`} className={classes.menuLink} activeClassName={classes.active}>
                {i18n.t('Training')}
            </NavLink>
        </nav>
    )
};
export default Menu;