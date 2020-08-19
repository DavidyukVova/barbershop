import React from 'react'
import Layout from "../Layout";
import classes from "./Covid.module.css";
import {Col, Container, Row} from "react-bootstrap";
import DocumentMeta from 'react-document-meta';


const Covid = () => {
    const meta = {
        title: 'Барбершоп CARTEL вводит профилактические меры в борьбе с COVID-19',
        description: 'О мерах защиты и профилактики COVID-19, которые уже введены в барбершопе CarteL на Дружбы Народов. Здоровье сотрудников и клиентов — для нас приоритет. Узнайте больше…',
    };


    return (
        <Layout>
            <DocumentMeta {...meta}>
                <div className={classes.covidSection}>
                    <div className={classes.contentWrap}>
                        <Container fluid={true}>
                            <div className={classes.covidSectionContent}>
                                <Row>
                                    <Col xs={12}>
                                        <h1 className={classes.title}>Cartel вводит профилактические меры в борьбе с COVID-19</h1>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6}>
                                        <div className={classes.covidSectionPhotoWrap}>
                                            <img className={classes.covidSectionPhoto}
                                                 src={`${process.env.PUBLIC_URL}/images/covidPhoto.jpg`}
                                                 alt="who are we"/>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <p className={classes.description}>
                                            Главный приоритет Cartel во время эпидемии COVID-19 — здоровье и безопасность наших клиентов. Наша цель — минимизировать распространение коронавируса и для этого мы внедряем профилактические меры:
                                        </p>
                                        <p className={classes.description}>
                                            <ul>
                                                <li>
                                                    Двухэтапная стерилизация рабочего инструмента;
                                                </li>
                                                <li>
                                                    Мастера работают только в защитных масках и перчатках;
                                                </li>
                                                <li>
                                                    Дистанция между клиентами более 2-х метров;
                                                </li>
                                                <li>
                                                    Дезинфекция всех поверхностей и помещения;
                                                </li>
                                                <li>
                                                    Проветривание помещения каждый час;
                                                </li>
                                                <li>
                                                    Прием гостей только по предварительной записи;
                                                </li>
                                                <li>
                                                    Температурный скрининг.
                                                </li>
                                            </ul>
                                        </p>
                                        <p className={classes.description}>
                                            Наши гости могут воспользоваться средствами защиты: одноразовые маски, перчатки и антисептик всегда есть на рецепции.
                                        </p>
                                        <p className={classes.description}>
                                            Некоторые наши действия могут вызывать неудобство, но мы считаем, что это правильные и решительные меры, которые помогут защитить здоровье сотрудников и наших гостей от возможности заражения коронавирусом.
                                        </p>
                                        <p className={classes.description}>
                                            Мы же в свою очередь продолжим выполнять нашу миссию и делать сервис еще качественнее.
                                        </p>
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
export default Covid;