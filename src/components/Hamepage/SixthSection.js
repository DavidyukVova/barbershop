import React from 'react';
import classes from './Homepage.module.css'
import i18n from '../../i18n';
import {Col, Container, Row} from "react-bootstrap";
import * as Svg from '../../Svg';
import {connect} from "react-redux";

const SixthSection = ({env}) => {
    return (
        <div className={classes.sixthSection}>
            <div className={classes.contentWrap}>
                <Container fluid={true}>
                    <Row>
                        <Col xs={12}>
                            <h2 className={classes.title}>
                                {i18n.t('Contacts')}
                            </h2>
                        </Col>
                    </Row>
                    <div className={classes.contentBlock}>
                        <Row>
                            <Col lg={5} md={4}>
                                <img src={`${process.env.PUBLIC_URL}/images/contactsSection.jpg`} alt="contacts"/>
                            </Col>
                            <Col lg={7} md={8}>
                                <div>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2542.2639009524028!2d30.544391015730177!3d50.41755457947086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf6bf1e14ac7%3A0x6276ea5f5b14bfa2!2zMzJBLCDQsdGD0LsuINCU0YDRg9C20LHRiyDQndCw0YDQvtC00L7QsiwgMzLQkCwg0JrQuNC10LIsIDAyMDAw!5e0!3m2!1sru!2sua!4v1591114767081!5m2!1sru!2sua"
                                        width="100%" height="300" frameBorder="0" style={{border:0}} allowFullScreen="" title={i18n.t('Kyiv, b. Druzhby Narodiv 32a')}
                                        aria-hidden="false" tabIndex="0"></iframe>
                                </div>
                                <div className={classes.infoBlock}>
                                    <div className={classes.item}>
                                        <Svg.TimeIco/>
                                        <p>{i18n.t('Schedule')}: {env.schedule}</p>
                                    </div>
                                    <div className={classes.item}>
                                        <Svg.PointIco/>
                                        <p>{i18n.t('Kyiv, b. Druzhby Narodiv 32a')}</p>
                                    </div>
                                    <div className={classes.item}>
                                        <Svg.PhoneIco/>
                                        <p>{env.phone}</p>
                                    </div>
                                    <div className={classes.item}>
                                        <Svg.MailIco/>
                                        <p>{env.email}</p>
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

const mapStateToProps = (state) => ({
    env: state.env,
});

export default connect(mapStateToProps) (SixthSection);