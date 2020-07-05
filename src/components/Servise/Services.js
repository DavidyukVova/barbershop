import React from 'react'
import Layout from "../Layout";
import classes from "./Service.module.css";
import {Button, Col, Container, Row} from "react-bootstrap";
import i18n from "../../i18n";
import {animateScroll as scroll} from "react-scroll/modules";
import {withRouter} from "react-router";

const Services = ({history}) => {
    document.title = `Cartel Barbershop - ${i18n.t('Services')}`;

    const handleScroll = () => {
        scroll.scrollToTop()
    };

    return (
        <Layout>
            <div className={classes.serviceSection} style={{backgroundImage: `url("${process.env.PUBLIC_URL}/images/serviceBg.jpg")`}}>
                <div className={classes.contentWrap}>
                    <Container fluid={true}>
                        <div className={classes.priceList}>
                            <div className={classes.item}>
                                <h6>
                                    {i18n.t('Top barber')}
                                </h6>
                                <div className={classes.list}>
                                    <p>
                                        {i18n.t('Men\'s haircut')}
                                    </p>
                                    <label>
                                        500{i18n.t('uah')}
                                    </label>
                                </div>
                                <div className={classes.list}>
                                    <p>
                                        {i18n.t('Beard haircut')}
                                    </p>
                                    <label>
                                        300{i18n.t('uah')}
                                    </label>
                                </div>
                                <div className={classes.list}>
                                    <p>
                                        {i18n.t('Haircut + beard')}
                                    </p>
                                    <label>
                                        700{i18n.t('uah')}
                                    </label>
                                </div>
                            </div>
                            <div className={classes.item}>
                                <h6>
                                    {i18n.t('Barber')}
                                </h6>
                                <div className={classes.list}>
                                    <p>
                                        {i18n.t('Men\'s haircut')}
                                    </p>
                                    <label>
                                        350{i18n.t('uah')}
                                    </label>
                                </div>
                                <div className={classes.list}>
                                    <p>
                                        {i18n.t('Beard haircut')}
                                    </p>
                                    <label>
                                        200{i18n.t('uah')}
                                    </label>
                                </div>
                                <div className={classes.list}>
                                    <p>
                                        {i18n.t('Haircut + beard')}
                                    </p>
                                    <label>
                                        500{i18n.t('uah')}
                                    </label>
                                </div>
                            </div>
                        </div>
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
                                        onClick={e => {history.push(`/${i18n.language}/training`); handleScroll()}}
                                    >
                                        {i18n.t('More information')}
                                    </Button>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>
            </div>
        </Layout>
    )
};
export default withRouter(Services);