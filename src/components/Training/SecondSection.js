import React from 'react';
import classes from './Training.module.css'
import i18n from '../../i18n';
import {Col, Container, Row} from "react-bootstrap";

const SecondSection = () => {
    return (
        <div className={classes.secondSection}>
            <div className={classes.contentWrap}>
                <Container fluid={true}>
                    <Row>
                        <Col xs={12}>
                            <h2 className={classes.title}>
                                {i18n.t('Barber')}...
                            </h2>
                        </Col>
                    </Row>
                    <div className={classes.secondSectionContent}>
                        <Row>
                            <Col md={6} sm={12} xs={12}>
                                <div className={classes.secondSectionPhotoWrap}>
                                    <img className={classes.secondSectionPhoto} src={`${process.env.PUBLIC_URL}/images/training/barber.jpg`} alt="barber"/>
                                </div>
                            </Col>
                            <Col md={6} sm={12} xs={12}>
                                <h4 className={classes.subTitle}>
                                    {i18n.t('Barber is')}...
                                </h4>
                                <p className={classes.description}>
                                    {i18n.t('Being a barber is a bit of talent and endless work, constant development. To help you realize yourself in this matter, we have prepared five training options at Cartel of boulevard Druzhby Narodiv.')}
                                </p>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </div>
    )
};
export default SecondSection;