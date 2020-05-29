import React from 'react'
import Layout from "../Layout";
import classes from './Gallery.module.css'
import {Col, Container, Nav, Row, Tab} from "react-bootstrap";
import i18n from '../../i18n';

const Gallery = () => {
    return (
        <Layout>
            <div className={classes.galleryBlock}>
                <Container>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Row className="justify-content-center">
                            <Col xs={12}>
                                <Nav className={classes.tabsButtonWrap} variant="pills">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">
                                            {i18n.t('Photo')}
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">
                                            {i18n.t('Video')}
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                        </Row>
                        <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <p>11111</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <p>22222</p>
                                </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </Container>
            </div>
        </Layout>
    )
};
export default Gallery;