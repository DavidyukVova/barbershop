import React from 'react'
import classes from '../Barbers.module.css'
import Layout from "../../Layout";
import {connect} from "react-redux";
import i18n from "../../../i18n";
import {Col, Container, Row} from "react-bootstrap";

const Barber = ({match, barbers}) => {
    const {id} = match.params;

    return (
        <Layout>
            <div className={classes.barberPageWrap}>
                <Container>
                    <div>
                    {
                        barbers.barbers
                            .filter((barber, index) => (parseInt(barber.id) === parseInt(id)))
                            .map((barber, index) => (
                                <Row key={`top${index}`}>
                                    <Col md={6}>
                                        <div className={classes.imageTopWrap}>
                                            <img src={process.env.PUBLIC_URL+barber.imagePageTop} alt={barber.name}/>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className={classes.topBlock}>
                                            <h6>
                                                {i18n.t(`${barber.name}`)}
                                            </h6>
                                            <p>
                                                {i18n.t(`${barber.rank}`)}
                                            </p>
                                        </div>
                                        <div className={classes.description}>
                                            <p>
                                                {i18n.t(`${barber.textPageTop}`)}
                                            </p>
                                        </div>
                                    </Col>
                                </Row>
                            ))
                    }
                    </div>
                    <h3 className={classes.title}>
                        {i18n.t('Barber revelations')}
                    </h3>
                    <div>
                    {
                        barbers.barbers
                            .filter((barber, index) => (parseInt(barber.id) === parseInt(id)))
                            .map((barber, index) => (
                                <Row key={`middle${index}`}>
                                    <Col md={6}>
                                        <div className={classes.description}>
                                            <p>
                                                {i18n.t(`${barber.textPageMiddle}`)}
                                            </p>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div>
                                            <img src={process.env.PUBLIC_URL+barber.imagePageMiddle} alt={barber.name}/>
                                        </div>
                                    </Col>
                                </Row>
                            ))
                    }
                    </div>
                    <div className={classes.bottomBlock}>
                        {
                            barbers.barbers
                                .filter((barber, index) => (parseInt(barber.id) === parseInt(id)))
                                .map((barber, index) => (
                                    <Row key={`middle${index}`}>
                                        <Col xs={12}>
                                            <div className={classes.imageBottomWrap}>
                                                <img src={process.env.PUBLIC_URL+barber.imagePageBottom} alt={barber.name}/>
                                            </div>
                                        </Col>
                                        <Col xs={12}>
                                            <div className={`${classes.description} ${classes.bottomDescription}`}>
                                                <p>
                                                    <img className={classes.barberBottomImage} src={process.env.PUBLIC_URL+barber.image} alt={barber.name}/>
                                                    {i18n.t(`${barber.textPageBottom}`)}
                                                </p>
                                            </div>
                                        </Col>
                                    </Row>
                                ))
                        }
                    </div>
                </Container>
            </div>
        </Layout>
    )
};
const mapStateToProps = (state) => ({
    barbers: state.barbers,
});

export default connect(mapStateToProps)(Barber);