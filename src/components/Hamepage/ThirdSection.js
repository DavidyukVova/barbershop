import React from 'react';
import classes from './Homepage.module.css'
import i18n from '../../i18n';
import {Button, Col, Container, Row} from "react-bootstrap";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {withRouter} from "react-router";

const ThirdSection = ({barbers, history}) => {
    return (
        <div className={classes.thirdSection}>
            <div className={classes.contentWrap}>
                <Container fluid={true}>
                    <Row>
                        <Col xs={12}>
                            <h2 className={classes.title}>
                                {i18n.t('Barbers')}
                            </h2>
                        </Col>
                    </Row>
                    <div className={classes.barbersWrap}>
                        <Row>
                            {
                                barbers.barbers.map((barber, index) => (
                                    <Col md={4}>
                                        <div className={classes.item} key={index}>
                                            <Link to={`/${i18n.language}/barber/${barber.id}`}>
                                                <img src={barber.image} alt={barber.name}/>
                                                <div className={classes.info}>
                                                    <h6>
                                                        {i18n.t(`${barber.name}`)}
                                                    </h6>
                                                    <p>
                                                        {i18n.t(`${barber.rank}`)}
                                                    </p>
                                                </div>
                                            </Link>
                                        </div>
                                    </Col>
                                ))
                            }
                        </Row>
                    </div>
                    <Row>
                        <Col xs={12}>
                            <Button
                                size={"lg"}
                                className={classes.centeredButton}
                                variant="outline-secondary"
                                onClick={e => (history.push(`/${i18n.language}/barbers`))}
                            >
                                {i18n.t('Learn more')}
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => ({
    barbers: state.barbers,
});

export default connect(mapStateToProps)(withRouter(ThirdSection));