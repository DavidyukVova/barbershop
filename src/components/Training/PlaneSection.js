import React from 'react';
import classes from './Training.module.css'
import i18n from '../../i18n';
import {Col, Container, Row} from "react-bootstrap";
import {withRouter} from "react-router";

export const PlaneSection = ({history}) => {


    return (
        <div className={classes.planeSection}>
            <div className={classes.contentWrap}>
                <Container fluid={true}>
                    <Row>
                        <Col xs={12}>
                            <h2 className={classes.title}>
                                {i18n.t('Plan of the education')}
                            </h2>
                        </Col>
                    </Row>
                    <div className={classes.gallery}>
                        <Row>
                            <Col md={6}>
                                <div className={classes.imageWrap}>
                                        <img src={`${process.env.PUBLIC_URL}/images/training/plane1.jpg`}
                                             alt="preview"/>
                                    <div className={classes.info}>
                                        <h6 className={classes.title}>
                                            "{i18n.t('Barber from scratch')}"
                                        </h6>
                                        <div className={classes.moreInfo}>
                                            <p>
                                                -{i18n.t('The basic course for beginners consists of theoretical and practical classes.')}
                                            </p>
                                            <p>
                                                -{i18n.t('Training is conducted in small groups of 3-4 people.')}
                                            </p>
                                            <p>
                                                -{i18n.t('The course is based on more than 60 hours of working with the master.')}
                                            </p>
                                            <p>
                                                -{i18n.t('Course duration {{days}} days ({{lessons}} lessons with an interval of 3 days).',{days: 30, lessons: 10})}
                                            </p>
                                            <p>
                                                -{i18n.t('Cost {{price}} UAH', {price: '18 000'})}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className={classes.imageWrap}>
                                        <img src={`${process.env.PUBLIC_URL}/images/training/plane2.jpg`}
                                             alt="preview"/>
                                    <div className={classes.info}>
                                        <h6 className={classes.title}>
                                            "{i18n.t('Increase')}"
                                        </h6>
                                        <div className={classes.moreInfo}>
                                            <p>
                                                -{i18n.t('For beginners with a basic level.')}
                                            </p>
                                            <p>
                                                -{i18n.t('Training is conducted in small groups of 3-4 people.')}
                                            </p>
                                            <p>
                                                -{i18n.t('Course duration {{days}} days ({{lessons}} lessons with an interval of 3 days).',{days: 15, lessons: 5})}
                                            </p>
                                            <p>
                                                -{i18n.t('Cost {{price}} UAH',{price: '9 000'})}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className={classes.imageWrap}>
                                    <img src={`${process.env.PUBLIC_URL}/images/training/plane3.jpg`}
                                         alt="preview"/>
                                    <div className={classes.info}>
                                        <h6 className={classes.title}>
                                            "{i18n.t('Individually accelerated')}"
                                        </h6>
                                        <div className={classes.moreInfo}>
                                            <p>
                                                -{i18n.t('The basic course for beginners consists of theoretical and practical classes.')}
                                            </p>
                                            <p>
                                                -{i18n.t('Training is carried out individually.')}
                                            </p>
                                            <p>
                                                -{i18n.t('The teacher “puts a hand”, helps with the choice of tools and controls the work performed.')}
                                            </p>
                                            <p>
                                                -{i18n.t('Cost {{price}} UAH', {price: '22 000'})}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className={classes.imageWrap}>
                                    <img src={`${process.env.PUBLIC_URL}/images/training/plane4.jpg`}
                                         alt="preview"/>
                                    <div className={classes.info}>
                                        <h6 className={classes.title}>
                                            "{i18n.t('Boost (accelerated)')}"
                                        </h6>
                                        <div className={classes.moreInfo}>
                                            <p>
                                                -{i18n.t('For beginners with a basic level.')}
                                            </p>
                                            <p>
                                                -{i18n.t('Training is carried out individually.')}
                                            </p>
                                            <p>
                                                -{i18n.t('Duration 3 hours - 2 400 UAH. Practicing one haircut. 5 hours - 3 400 UAH. Practicing two haircuts.')}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={12}>
                                <div className={`${classes.imageWrap} ${classes.lastImage}`}>
                                    <img src={`${process.env.PUBLIC_URL}/images/training/plane5.jpg`}
                                         alt="preview"/>
                                    <div className={`${classes.info} ${classes.lastInfo}`}>
                                        <h6 className={classes.title}>
                                            {i18n.t('One-day programs for teams of beauty salons')}
                                        </h6>
                                        <div className={classes.moreInfo}>
                                            <p>
                                                {i18n.t('Training for teams of 2-4 masters.')}
                                            </p>
                                            <p>
                                                -{i18n.t('The lesson is accompanied by testing on models. 3 hours - 3 500 UAH.')}
                                            </p>
                                            <p>
                                                -{i18n.t('Haircut under the guidance of the master / with the master simultaneously on two models. 5 hours - 4 500 UAH.')}
                                            </p>
                                            <p>
                                                {i18n.t('Two haircuts under the guidance of the master / with the master simultaneously on two models.')}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </div>
    )
};
export default withRouter(PlaneSection)