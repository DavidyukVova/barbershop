import React from 'react';
import classes from './Homepage.module.css'
import i18n from '../../i18n';
import {Button, Col, Container, Row} from "react-bootstrap";
import {withRouter} from "react-router";

export const FiveSection = ({history}) => {
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
                                    <img src={`${process.env.PUBLIC_URL}/images/galleryPreview/preview1.jpg`} alt="preview"/>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className={classes.imageWrap}>
                                    <img src={`${process.env.PUBLIC_URL}/images/galleryPreview/preview2.jpg`} alt="preview"/>
                                </div>
                                <div className={classes.imageWrap}>
                                    <img src={`${process.env.PUBLIC_URL}/images/galleryPreview/preview3.jpg`} alt="preview"/>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <Row>
                        <Col xs={12}>
                            <Button
                                size={"lg"}
                                className={classes.centeredButton}
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