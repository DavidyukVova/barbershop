import React from 'react';
import i18n, {languages} from "../../../i18n";
import {withRouter} from "react-router";
import Dropdown from "react-bootstrap/Dropdown";
import {DropdownButton} from "react-bootstrap";
import classes from './Header.module.css'


const LangDropdown = ({history, location}) => {



    const changeLanguage = (lng) => {
        const {pathname, search} = location;
        let segment = pathname.split('/');
        segment[1] = lng;
        history.push(segment.join('/')+search);
        i18n.changeLanguage(lng).then();
    };


    const lngTitles = {
        // en: 'En',
        uk: <img src={`${process.env.PUBLIC_URL}/images/uk.png`} alt="uk"/>,
        ru: <img src={`${process.env.PUBLIC_URL}/images/ru.png`} alt="ru"/>,
    };

    return (
        <>
            <DropdownButton id="dropdown-item-button" className={classes.langButtonWrap} variant="outline-primary" title={languages.map((lng, index) => (
                <span key={index}>{i18n.language === lng ? lngTitles.hasOwnProperty(lng)?lngTitles[lng]:lng : ''}</span>
            ))}>
                {languages.map( (lng, index) => (
                    i18n.language !== lng &&
                    <Dropdown.Item
                        as="button"
                        onClick={e => (changeLanguage(lng))}
                        key={index}
                    >
                        {lngTitles.hasOwnProperty(lng)?lngTitles[lng]:lng}
                    </Dropdown.Item >
                ))}
            </DropdownButton>
        </>
    )
};
export default withRouter(LangDropdown);