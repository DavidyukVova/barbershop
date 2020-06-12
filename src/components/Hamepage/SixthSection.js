import React from 'react';
import classes from './Homepage.module.css'
import i18n from '../../i18n';
import {Col, Container, Row} from "react-bootstrap";
import * as Svg from '../../Svg';
import {connect} from "react-redux";
import GoogleMapReact from 'google-map-react';



const SixthSection = ({env}) => {
    const center = {lat: 50.417569, lng: 30.546471 };
    const zoom = 17;

    const Marker = (props: any) => {
        const { name } = props;
        return (
            <div className="marker"
                 style={{ cursor: 'pointer'}}
                 title={name}
            >
                <img src={`${process.env.PUBLIC_URL}/images/icon-map.png`} alt={name}/>
            </div>
        );
    };

    return (
        <div className={classes.sixthSection}>
            <div className={classes.contentWrap}>
                <Container fluid={true}>
                    <Row>
                        <Col xs={12}>
                            <h2 className={classes.title}>
                                {i18n.t('Contacts')}
                            </h2>
                        </Col>
                    </Row>
                    <div className={classes.contentBlock}>
                        <Row>
                            <Col lg={5} md={4}>
                                <img src={`${process.env.PUBLIC_URL}/images/contactsSection.jpg`} alt="contacts"/>
                            </Col>
                            <Col lg={7} md={8}>
                                <div>
                                    <div style={{ height: '300px', width: '100%' }}>
                                        <GoogleMapReact
                                            bootstrapURLKeys={{ key: 'AIzaSyD-QG_xNyJ5UOo7cjp8YuLDyNctKTg0wQI' }}
                                            defaultCenter={center}
                                            defaultZoom={zoom}
                                        >
                                            <Marker
                                                lat={50.417569}
                                                lng={30.546471}
                                                name="Cartel Barbershop"
                                                map="map"
                                            />
                                        </GoogleMapReact>
                                    </div>
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
    )
};

const mapStateToProps = (state) => ({
    env: state.env,
});

export default connect(mapStateToProps) (SixthSection);