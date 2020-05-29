import React from 'react'
import LayoutNoFooter from '../LayoutNoFooter';
import {Col, Container, Row} from "react-bootstrap";
import classes from "./Barbers.module.css";
import {Link} from "react-router-dom";
import i18n from "../../i18n";
import {connect} from "react-redux";
import * as Svg from '../../Svg';

const Barbers = ({barbers}) => {
    return (
        <LayoutNoFooter>
            <Container fluid={true}>
                <Row noGutters={true}>
                    {
                        barbers.barbers.map((barber, index) => (
                            <Col md={12} lg={4}>
                                <div className={classes.item} key={index}>
                                    <Link to={`/${i18n.language}/barber/${barber.id}`}>
                                        <img src={process.env.PUBLIC_URL+barber.imageFull} alt={barber.name}/>
                                        <div className={classes.info}>
                                            <div>
                                                <h6>
                                                    {i18n.t(`${barber.name}`)}
                                                </h6>
                                                <p>
                                                    {i18n.t(`${barber.rank}`)}
                                                </p>
                                            </div>
                                            <Svg.ArrowIco/>
                                        </div>
                                    </Link>
                                </div>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </LayoutNoFooter>
    )
};
const mapStateToProps = (state) => ({
    barbers: state.barbers,
});

export default connect(mapStateToProps) (Barbers);