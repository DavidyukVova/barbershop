import React from 'react'
import Layout from "../Layout";
import classes from "./Service.module.css";
import {Container} from "react-bootstrap";
import i18n from "../../i18n";

const Services = () => {
    document.title = `Cartel Barbershop - ${i18n.t('Services')}`;
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
                                        500{i18n.t('usd')}
                                    </label>
                                </div>
                                <div className={classes.list}>
                                    <p>
                                        {i18n.t('Beard haircut')}
                                    </p>
                                    <label>
                                        300{i18n.t('usd')}
                                    </label>
                                </div>
                                <div className={classes.list}>
                                    <p>
                                        {i18n.t('Haircut + Beard')}
                                    </p>
                                    <label>
                                        700{i18n.t('usd')}
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
                                        350{i18n.t('usd')}
                                    </label>
                                </div>
                                <div className={classes.list}>
                                    <p>
                                        {i18n.t('Beard haircut')}
                                    </p>
                                    <label>
                                        200{i18n.t('usd')}
                                    </label>
                                </div>
                                <div className={classes.list}>
                                    <p>
                                        {i18n.t('Haircut + Beard')}
                                    </p>
                                    <label>
                                        500{i18n.t('usd')}
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className={classes.bottomBlock}>
                            <h6>
                                {i18n.t('Barber Art Training Set')}
                            </h6>
                        </div>
                    </Container>
                </div>
            </div>
        </Layout>
    )
};
export default Services;