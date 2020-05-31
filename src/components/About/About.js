import React from 'react'
import Layout from "../Layout";
import classes from "./About.module.css";
import {Col, Container, Row} from "react-bootstrap";
import i18n from "../../i18n";

const About = () => {
    return (
        <Layout>
            <div className={classes.secondSection}>
                <div className={classes.contentWrap}>
                    <Container fluid={true}>
                        <div className={classes.secondSectionContent}>
                            <Row>
                                <Col md={6}>
                                    <div className={classes.secondSectionPhotoWrap}>
                                        <img className={classes.secondSectionPhoto} src={`${process.env.PUBLIC_URL}/images/whoAreWe.jpg`} alt="who are we"/>
                                    </div>
                                </Col>
                                <Col md={6}>
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
        </Layout>
    )
};
export default About;