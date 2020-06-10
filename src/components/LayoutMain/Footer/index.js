import React from 'react';
import classes from './Footer.module.css'
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import i18n from "../../../i18n";
import Social from "./Social";
import Locations from "./Locations";

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className={classes.footerContent}>
                <Container fluid={true}>
                    <Row className="justify-content-center align-items-center">
                        <Col md={4}>
                            <Social/>
                        </Col>
                        <Col md={4}>
                            <div  className={classes.logoWrap}>
                                <Link to={`/${i18n.language}/`}>
                                    <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="logo"/>
                                </Link>
                            </div>
                        </Col>
                        <Col md={4}>
                            <Locations/>
                        </Col>
                        <Col xs={12}>
                            <p className={`${classes.text} ${classes.copyright}`}>
                                Cartel Barbershop. {i18n.t('All rights reserved')}
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </footer>
    )
};

export default Footer;