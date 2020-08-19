import React from 'react'
import LayoutNoFooter from '../LayoutNoFooter';
import classes from "./Contacts.module.css";
import {Col, Container, Row} from "react-bootstrap";
import i18n from "../../i18n";
import * as Svg from "../../Svg";
import {connect} from "react-redux";
import GoogleMapReact from 'google-map-react';
import DocumentMeta from 'react-document-meta';



const Contacts = ({env}) => {
    const meta = {
        title: i18n.t('💈 Contacts ᐉ CARTEL Barbershop at Friendship of Nations'),
        description: i18n.t('Do you want to sign up for a haircut or do you have any questions? Get in touch with us! 💈 Phone +38 (050) 666-06-33 ✂️ Address People\'s Friendship Boulevard, 32A.'),
    };

    const center = {lat: 50.417569, lng: 30.546471};
    const zoom = 17;

    const Marker = (props: any) => {
        const {name} = props;
        return (
            <div className="marker"
                 style={{cursor: 'pointer'}}
                 title={name}
            >
                <img src={`${process.env.PUBLIC_URL}/images/icon-map.png`} alt={name}/>
            </div>
        );
    };

    return (
        <LayoutNoFooter>
            <DocumentMeta {...meta}>
                <div className={classes.contactsSection}
                     style={{backgroundImage: `url("${process.env.PUBLIC_URL}/images/contactsBg.jpg")`}}>
                    <div className={classes.contentWrap}>
                        <Container fluid={true}>
                            <div className={classes.contentBlock}>
                                <Row>
                                    <Col md={5}>
                                        <img src={`${process.env.PUBLIC_URL}/images/contactsSection.png`}
                                             alt="contacts"/>
                                    </Col>
                                    <Col md={7}>
                                        <div>
                                            <div style={{height: '300px', width: '100%'}}>
                                                <GoogleMapReact
                                                    bootstrapURLKeys={{key: 'AIzaSyD-QG_xNyJ5UOo7cjp8YuLDyNctKTg0wQI'}}
                                                    defaultCenter={center}
                                                    defaultZoom={zoom}
                                                >
                                                    <Marker
                                                        lat={50.417569}
                                                        lng={30.546471}
                                                        name="Cartel Barbershop"
                                                        color="#26252a"
                                                    />
                                                </GoogleMapReact>
                                            </div>
                                        </div>
                                        <div className={classes.infoBlock}>
                                            <div className={classes.item}>
                                                <Svg.TimeIco/>
                                                <p>{i18n.t('Work hours')}: {env.schedule}</p>
                                            </div>
                                            <div className={classes.item}>
                                                <Svg.PointIco/>
                                                <p>{i18n.t('Kyiv, b. Druzhby Narodiv 32a')}</p>
                                            </div>
                                            <div className={classes.item}>
                                                <Svg.PhoneIco/>
                                                <p><a href={`tel:${env.phone}`}>{env.phone}</a></p>
                                            </div>
                                            <div className={classes.item}>
                                                <Svg.MailIco/>
                                                <p><a href={`mailto:${env.email}`}>{env.email}</a></p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Container>
                    </div>
                </div>
            </DocumentMeta>
        </LayoutNoFooter>
    )
};
const mapStateToProps = (state) => ({
    env: state.env,
});

export default connect(mapStateToProps)(Contacts);