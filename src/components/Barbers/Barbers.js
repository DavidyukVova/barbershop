import React from 'react'
import LayoutNoFooter from '../LayoutNoFooter';
import {Col, Container, Row} from "react-bootstrap";
import classes from "./Barbers.module.css";
import {Link} from "react-router-dom";
import i18n from "../../i18n";
import {connect} from "react-redux";
import * as Svg from '../../Svg';
import DocumentMeta from 'react-document-meta';

const Barbers = ({barbers}) => {

    const meta = {
        title: i18n.t('CARTEL ᐉ Barbers 💈 Masters from the highest league in Kiev'),
        description: i18n.t('Covit19 our masters ✂️ Only the best barbers and no trainees. Author\'s approach to image creation. You know the masters? Sign up for a haircut on the phone +38 (050) 666-06-33.'),
    };

    return (
        <LayoutNoFooter>
            <DocumentMeta {...meta}>
                <Container fluid={true}>
                    <Row noGutters={true}>
                        {
                            barbers.barbers.map((barber, index) => (
                                <Col md={12} lg={4} key={index}>
                                    <div className={classes.item}>
                                        <Link to={`/${i18n.language}/barber/${barber.id}/`}>
                                            <img src={process.env.PUBLIC_URL + barber.imageFull} alt={barber.name}/>
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
            </DocumentMeta>
        </LayoutNoFooter>
    )
};
const mapStateToProps = (state) => ({
    barbers: state.barbers,
});

export default connect(mapStateToProps)(Barbers);