import React from 'react';
import classes from './Homepage.module.css'
import i18n from '../../i18n';
import {Col, Container, Row} from "react-bootstrap";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

const ThirdSection = ({barbers}) => {
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
                        {
                            barbers.barbers.map((barber, index) => (
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
                            ))
                        }
                    </div>
                </Container>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => ({
    barbers: state.barbers,
});

export default connect(mapStateToProps) (ThirdSection);