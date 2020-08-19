import React from 'react';
import classes from './Homepage.module.css'
import i18n from '../../i18n';
import {Button, Col, Container, Row} from "react-bootstrap";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {withRouter} from "react-router";
import {animateScroll as scroll} from 'react-scroll';

const ThirdSection = ({barbers, history}) => {

    const handleScroll = () => {
        scroll.scrollToTop()
    }

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
                                    <Col md={4} key={index}>
                                        <div className={classes.item}>
                                            <Link to={`/${i18n.language}/barber/${barber.id}/`} onClick={handleScroll}>
                                                <img src={process.env.PUBLIC_URL+barber.image} alt={barber.name}/>
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
                                className={`${classes.centeredButton} ${classes.buttonNoBorder}`}
                                variant="outline-secondary"
                                onClick={e => (history.push(`/${i18n.language}/barbers/`))}
                            >
                                {i18n.t('Learn more')}
                            </Button>
                        </Col>
                    </Row>
                    <div className={classes.bottomBlock}>
                        <h6>
                            {i18n.t('Barber Art Training Set')}
                        </h6>
                        <Row>
                            <Col xs={12}>
                                <Button
                                    size={"lg"}
                                    className={`${classes.centeredButton} ${classes.buttonNoBorder}`}
                                    variant="outline-secondary"
                                    onClick={e => {history.push(`/${i18n.language}/training/`); handleScroll()}}
                                >
                                    {i18n.t('More information')}
                                </Button>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => ({
    barbers: state.barbers,
});

export default connect(mapStateToProps)(withRouter(ThirdSection));