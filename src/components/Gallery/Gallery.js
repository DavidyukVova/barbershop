import React from 'react'
import Layout from "../Layout";
import classes from './Gallery.module.css'
import {Col, Container, Nav, Row, Tab} from "react-bootstrap";
import i18n from '../../i18n';
import {connect} from "react-redux";
import ReactPlayer from "react-player";
import * as Svg from '../../Svg';
import {Scrollbars} from "react-custom-scrollbars";
import Photos from "./Photos";
import DocumentMeta from 'react-document-meta';


const Gallery = ({gallery}) => {

    const meta = {
        title: i18n.t('CARTEL ᐉ Gallery 💈 Examples of work and interior design'),
        description: i18n.t('Examples of works and interior of CarteL barbershop in Kiev on Druzhby Narodiv Blvd. 32A. Author\'s haircut from the best masters. The combination of unsurpassed style and practicality.'),
    };

    return (
        <Layout>
            <DocumentMeta {...meta}>
                <div className={classes.galleryBlock}
                     style={{backgroundImage: `url("${process.env.PUBLIC_URL}/images/galleryBg.jpg")`}}>
                    <Container>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                            <Row className="justify-content-center">
                                <Col xs={12}>
                                    <Nav className={classes.tabsButtonWrap} variant="pills">
                                        <Nav.Item>
                                            <Nav.Link className={classes.navLink} eventKey="first">
                                                <Svg.PhotoIco/>
                                                {i18n.t('Photo')}
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link className={classes.navLink} eventKey="second">
                                                <Svg.VideoIco/>
                                                {i18n.t('Video')}
                                            </Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                            </Row>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Scrollbars
                                        className={classes.galleryWrap}
                                        autoHeight
                                        autoHeightMin={0}
                                        autoHeightMax={900}
                                        thumbMinSize={40}
                                        universal={true}
                                        renderThumbVertical={({...props}) =>
                                            <div {...props} className={classes.scrollBar}/>
                                        }
                                    >
                                        <Row>
                                            {
                                                gallery.photos.map((e, index) => {
                                                    return (
                                                        <Photos key={index} photo={e} index={index}/>
                                                    )
                                                })
                                            }
                                        </Row>
                                    </Scrollbars>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        <Col md={6}>
                                            <ReactPlayer className={classes.video} width={"100%"} controls={true}
                                                         url="https://cartel.kiev.ua/images/gallery/video/video1.mp4"/>
                                        </Col>
                                        <Col md={6}>
                                            <ReactPlayer className={classes.video} width={"100%"} controls={true}
                                                         url="https://cartel.kiev.ua/images/gallery/video/video2.mp4"/>
                                        </Col>
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Container>
                </div>
            </DocumentMeta>
        </Layout>
    )
};

const mapStateToProps = (state) => ({
    gallery: state.gallery,
});

export default connect(mapStateToProps)(Gallery);