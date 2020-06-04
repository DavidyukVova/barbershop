import React from 'react';
import classes from './Homepage.module.css'
import i18n from '../../i18n';
import {Button} from "react-bootstrap";
import ReactPlayer from "react-player";


const FirstSection = () => {
    return (
        <div className={classes.firstSection} style={{backgroundImage: `url("${process.env.PUBLIC_URL}/images/firstSectionBg.jpg")`}}>
            <div className={classes.contentBlock}>
                <div>
                    <h1 className={classes.firstTitle}>Cartel Barbershop</h1>
                    <h3 className={classes.subTitle}>{i18n.t('on the Druzhby Narodiv')}</h3>
                    <Button size={"lg"} className={classes.centeredButton} variant="outline-secondary">{i18n.t('Entry')}</Button>
                </div>
            </div>
            <div className={classes.shadow}></div>
            <ReactPlayer
                className={classes.video}
                width={'100%'}
                height={'100%'}
                playing={true}
                loop={true}
                muted={true}
                controls={false}
                url="https://davidyukvova.github.io/barbershop/images/gallery/video/video1.mp4"
            />
        </div>
    )
};
export default FirstSection;