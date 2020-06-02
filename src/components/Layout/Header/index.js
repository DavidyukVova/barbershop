import React, {useEffect, useRef} from 'react';
import classes from './Header.module.css'
import {Col, Container, Row} from "react-bootstrap";
import Menu from "./Menu";
import Info from "./Info";
import {Link} from "react-router-dom";
import i18n from "../../../i18n";
import Accordion from 'react-bootstrap/Accordion';
import * as Svg from '../../../Svg';
import LangDropdown from "./LangDropdown";


const Header = () => {

    const header = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            let scroll = window.pageYOffset || document.documentElement.scrollTop;
            if (parseInt(scroll) > 10) {
                header.current.setAttribute('style', 'background-color: #26252a')
            } else {
                header.current.setAttribute('style', 'background-color: none')
            }
        };

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, []);

    return (
        <header ref={header} className={classes.headerWrap}>
            <div className={classes.headerContainer}>
                <Container fluid={true} className={classes.header}>
                    <Row className="justify-content-md-center align-items-center">
                        <Col lg={4} className={"d-none d-lg-block"}>
                            <Menu/>
                        </Col>
                        <Col lg={4} md={9}>
                            <div className={classes.logoWrap}>
                                <Link to={`/${i18n.language}/`}>
                                    <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="logo"/>
                                </Link>
                            </div>
                        </Col>
                        <Col md={3} className={"d-none d-md-block d-lg-none"}>
                            <LangDropdown/>
                        </Col>
                        <Col lg={4} className={"d-none d-lg-block"}>
                            <Info/>
                        </Col>
                        <Col md={12} className={"d-block d-lg-none"}>
                            <Accordion className={classes.accordion}>
                                <Accordion.Toggle className={classes.menuButton} as={"div"} variant="link" eventKey="menu">
                                    <Svg.MenuIco/>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="menu">
                                    <Row>
                                        <Col md={12}>
                                            <Menu/>
                                        </Col>
                                        <Col md={12}>
                                            <Info/>
                                        </Col>
                                    </Row>
                                </Accordion.Collapse>
                            </Accordion>
                        </Col>
                    </Row>
                </Container>
            </div>
        </header>
    )
};

export default Header;