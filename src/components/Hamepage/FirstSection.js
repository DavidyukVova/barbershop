import React from 'react';
import classes from './Homepage.module.css'
import i18n from '../../i18n';
import {Button} from "react-bootstrap";


const FirstSection = () => {
    return (
        <div className={classes.firstSection}
             style={{backgroundImage: `url("${process.env.PUBLIC_URL}/images/firstSectionBg.jpg")`}}>
            <div className={classes.contentBlock}>
                <div>
                    <h1 className={classes.firstTitle}>Cartel Barbershop</h1>
                    <h3 className={classes.subTitle}>{i18n.t('on the Druzhby Narodiv')}</h3>
                    <a href="https://n332210.yclients.com/">
                        <Button
                            size={"lg"}
                            className={classes.centeredButton}
                            variant="outline-secondary"
                        >
                            {i18n.t('Entry')}
                        </Button>
                    </a>
                </div>
            </div>
            <div className={classes.shadow}></div>
        </div>
    )
};
export default FirstSection;