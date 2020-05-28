import React, {useEffect, useRef} from 'react';
import classes from './Header.module.css'
import {Col, Container, Row} from "react-bootstrap";
import Menu from "./Menu";
import Info from "./Info";
import {Link} from "react-router-dom";
import i18n from "../../../i18n";


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
                        <Col lg={4}>
                            <Menu/>
                        </Col>
                        <Col md={4}>
                            <div  className={classes.logoWrap}>
                                <Link to={`/${i18n.language}/`}>
                                    <img src={`${process.env.PUBLIC_URL}/images/logo.svg` } alt="logo"/>
                                </Link>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <Info/>
                        </Col>
                    </Row>
                </Container>
            </div>
        </header>
    )
};

export default Header;