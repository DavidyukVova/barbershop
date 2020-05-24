import React from 'react';
import classes from './Header.module.css'
import {Col, Container, Row} from "react-bootstrap";
import Menu from "./Menu";
import Info from "./Info";
import {Link} from "react-router-dom";
import i18n from "../../../i18n";


const Header = () => {
    return (
        <header className={classes.headerWrap}>
            <Container fluid={true} className={classes.header}>
                <Row className="justify-content-md-center align-items-center">
                    <Col lg={4}>
                        <Menu/>
                    </Col>
                    <Col md={4}>
                        <div  className={classes.logoWrap}>
                            <Link to={`/${i18n.language}/`}>
                                <img src="/images/logo.svg" alt="logo"/>
                            </Link>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <Info/>
                    </Col>
                </Row>
            </Container>
        </header>
    )
};

export default Header;