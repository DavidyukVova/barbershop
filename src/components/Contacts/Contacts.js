import React from 'react'
import LayoutNoFooter from '../LayoutNoFooter';
import classes from "./Contacts.module.css";
import {Col, Container, Row} from "react-bootstrap";
import i18n from "../../i18n";
import * as Svg from "../../Svg";
import {connect} from "react-redux";


const Contacts = ({env}) => {
    document.title = `Cartel Barbershop - ${i18n.t('Contacts')}`;
    return (
        <LayoutNoFooter>
            <div className={classes.contactsSection} style={{backgroundImage: `url("${process.env.PUBLIC_URL}/images/contactsBg.jpg")`}}>
                <div className={classes.contentWrap}>
                    <Container fluid={true}>
                        <div className={classes.contentBlock}>
                            <Row>
                                <Col md={5}>
                                    <img src={`${process.env.PUBLIC_URL}/images/contactsSection.jpg`} alt="contacts"/>
                                </Col>
                                <Col md={7}>
                                    <div>
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20338.109740085063!2d30.52906487440668!3d50.417557997514336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf6bf1e14ac7%3A0x6276ea5f5b14bfa2!2zMzJBLCDQsdGD0LsuINCU0YDRg9C20LHRiyDQndCw0YDQvtC00L7QsiwgMzLQkCwg0JrQuNC10LIsIDAyMDAw!5e0!3m2!1sru!2sua!4v1590686374693!5m2!1sru!2sua"
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
        </LayoutNoFooter>
    )
};
const mapStateToProps = (state) => ({
    env: state.env,
});

export default connect(mapStateToProps)(Contacts);