import React from 'react';
import classes from './Homepage.module.css'
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
                                {i18n.t('Who are we')}
                            </h2>
                        </Col>
                    </Row>
                    <div className={classes.secondSectionContent}>
                        <Row>
                            <Col md={6} sm={12} xs={12}>
                                <div className={classes.secondSectionPhotoWrap}>
                                    <img className={classes.secondSectionPhoto} src={`${process.env.PUBLIC_URL}/images/whoAreWe.jpg`} alt="who are we"/>
                                </div>
                            </Col>
                            <Col md={6} sm={12} xs={12}>
                                <p className={classes.description}>
                                    {i18n.t('Cartel on the Friendship of Peoples - a place where the master will become your friend and associate, select the necessary image. You meet your people infrequently, but when you meet, it is priceless.')}
                                </p>
                                <p className={classes.description}>
                                    {i18n.t('We do not strive to cut as soon as possible in order to free up space for a new recording as soon as possible, and we do not stretch the visit unreasonably long. For us, the haircut process is meditation, at the highest point of which intertwine creativity and craft. This meditation only works in a barber-client pair when the second trusts the first.')}
                                </p>
                                <p className={classes.description}>
                                    {i18n.t('It is here that we are not talking about the excess, we are for true masculine values   - individual character and style.')}
                                </p>
                                <p className={classes.description}>
                                    {i18n.t('Cartel - your haircut, your truth.')}
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