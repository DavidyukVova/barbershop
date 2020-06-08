import React from 'react';
import classes from './Homepage.module.css'
import i18n from '../../i18n';
import {Button, Col, Container, Row} from "react-bootstrap";
import {withRouter} from "react-router";
import {Link} from "react-router-dom";
import {animateScroll as scroll} from "react-scroll/modules";

export const FiveSection = ({history}) => {

    const handleScroll = () => {
        scroll.scrollToTop()
    }

    return (
        <div className={classes.fiveSection}>
            <div className={classes.contentWrap}>
                <Container fluid={true}>
                    <Row>
                        <Col xs={12}>
                            <h2 className={classes.title}>
                                {i18n.t('Gallery')}
                            </h2>
                        </Col>
                    </Row>
                    <div className={classes.gallery}>
                        <Row>
                            <Col md={6}>
                                <div className={classes.imageWrap}>
                                    <Link to={`/${i18n.language}/gallery`} onClick={handleScroll}>
                                        <img src={`${process.env.PUBLIC_URL}/images/galleryPreview/preview1.jpg`}
                                             alt="preview"/>
                                    </Link>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className={classes.imageWrap}>
                                    <Link to={`/${i18n.language}/gallery`} onClick={handleScroll}>
                                        <img src={`${process.env.PUBLIC_URL}/images/galleryPreview/preview2.jpg`}
                                             alt="preview"/>
                                    </Link>
                                </div>
                                <div className={classes.imageWrap}>
                                    <Link to={`/${i18n.language}/gallery`} onClick={handleScroll}>
                                        <img src={`${process.env.PUBLIC_URL}/images/galleryPreview/preview3.jpg`}
                                             alt="preview"/>
                                    </Link>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <Row>
                        <Col xs={12}>
                            <Button
                                size={"lg"}
                                className={`${classes.centeredButton} ${classes.buttonNoBorder}`}
                                variant="outline-secondary"
                                onClick={e => (history.push(`/${i18n.language}/gallery`))}
                            >
                                {i18n.t('Go to gallery')}
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
};
export default withRouter(FiveSection)