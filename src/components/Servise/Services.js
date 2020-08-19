import React from 'react'
import Layout from "../Layout";
import classes from "./Service.module.css";
import {Button, Col, Container, Row} from "react-bootstrap";
import i18n from "../../i18n";
import {animateScroll as scroll} from "react-scroll/modules";
import {withRouter} from "react-router";
import DocumentMeta from 'react-document-meta';

const Services = ({history}) => {
    const meta = {
        title: i18n.t('CARTEL ᐉ Prices for services 💈 Men\'s hair and beard cuts'),
        description: i18n.t('Services ✂️ Men\'s haircut from 350 UAH. Cutting beard from 200 UAH. Camouflage from 350 UAH. Children\'s haircut from 300 UAH. Camouflage from 350 UAH. CarteL - Author\'s barbershop in Kiev'),
    };

    const handleScroll = () => {
        scroll.scrollToTop()
    };

    return (
        <Layout>
            <DocumentMeta {...meta}>
                <div className={classes.serviceSection}
                     style={{backgroundImage: `url("${process.env.PUBLIC_URL}/images/serviceBg.jpg")`}}>
                    <div className={classes.contentWrap}>
                        <Container fluid={true}>
                            <div className={classes.priceList}>
                                <div className={classes.item}>
                                    <h6>
                                        Top barber
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
                                            {i18n.t('Haircut + beard')}
                                        </p>
                                        <label>
                                            700{i18n.t('uah')}
                                        </label>
                                    </div>
                                    <div className={classes.list}>
                                        <p>
                                            {i18n.t('Beard tim')}
                                        </p>
                                        <label>
                                            300{i18n.t('uah')}
                                        </label>
                                    </div>
                                    <div className={classes.list}>
                                        <p>
                                            {i18n.t('Children\'s haircut')}
                                        </p>
                                        <label>
                                            450{i18n.t('uah')}
                                        </label>
                                    </div>
                                    <div className={classes.list}>
                                        <p>
                                            {i18n.t('Father and son')}
                                        </p>
                                        <label>
                                            900{i18n.t('uah')}
                                        </label>
                                    </div>
                                    <div className={classes.list}>
                                        <p>
                                            {i18n.t('Hair coloring')}
                                        </p>
                                        <label>
                                            400{i18n.t('uah')}
                                        </label>
                                    </div>
                                    <div className={classes.list}>
                                        <p>
                                            {i18n.t('Beard coloring')}
                                        </p>
                                        <label>
                                            350{i18n.t('uah')}
                                        </label>
                                    </div>
                                    <div className={classes.list}>
                                        <p>
                                            {i18n.t('Hairstyling')}
                                        </p>
                                        <label>
                                            100{i18n.t('uah')}
                                        </label>
                                    </div>
                                </div>

                                <div className={classes.item}>
                                    <h6>
                                        Barber
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
                                            {i18n.t('Haircut + beard')}
                                        </p>
                                        <label>
                                            500{i18n.t('uah')}
                                        </label>
                                    </div>
                                    <div className={classes.list}>
                                        <p>
                                            {i18n.t('Beard tim')}
                                        </p>
                                        <label>
                                            200{i18n.t('uah')}
                                        </label>
                                    </div>
                                    <div className={classes.list}>
                                        <p>
                                            {i18n.t('Children\'s haircut')}
                                        </p>
                                        <label>
                                            300{i18n.t('uah')}
                                        </label>
                                    </div>
                                    <div className={classes.list}>
                                        <p>
                                            {i18n.t('Father and son')}
                                        </p>
                                        <label>
                                            600{i18n.t('uah')}
                                        </label>
                                    </div>
                                    <div className={classes.list}>
                                        <p>
                                            {i18n.t('Hair coloring')}
                                        </p>
                                        <label>
                                            400{i18n.t('uah')}
                                        </label>
                                    </div>
                                    <div className={classes.list}>
                                        <p>
                                            {i18n.t('Beard coloring')}
                                        </p>
                                        <label>
                                            350{i18n.t('uah')}
                                        </label>
                                    </div>
                                    <div className={classes.list}>
                                        <p>
                                            {i18n.t('Hairstyling')}
                                        </p>
                                        <label>
                                            100{i18n.t('uah')}
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
                                            onClick={e => {
                                                history.push(`/${i18n.language}/training`);
                                                handleScroll()
                                            }}
                                        >
                                            {i18n.t('More information')}
                                        </Button>
                                    </Col>
                                </Row>
                            </div>
                        </Container>
                    </div>
                </div>
            </DocumentMeta>
        </Layout>
    )
};
export default withRouter(Services);