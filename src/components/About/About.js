import React from 'react'
import Layout from "../Layout";
import classes from "./About.module.css";
import {Col, Container, Row} from "react-bootstrap";

const About = () => {
    return (
        <Layout>
            <div className={classes.secondSection}>
                <div className={classes.contentWrap}>
                    <Container fluid={true}>
                        <div className={classes.secondSectionContent}>
                            <Row>
                                <Col md={6}>
                                    <div className={classes.secondSectionPhotoWrap}>
                                        <img className={classes.secondSectionPhoto} src={`${process.env.PUBLIC_URL}/images/whoAreWe.jpg`} alt="who are we"/>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <p className={classes.description}>
                                        Cartel на Дружбы Народов — место, где мастер станет твоим другом и соратником, подберет необходимый образ. Своих людей встречаешь нечасто, но когда встречаешь — это бесценно.
                                    </p>
                                    <p className={classes.description}>
                                        Мы не стремимся подстричь как можно быстрее, чтобы поскорее освободить место для новой записи, и не растягиваем визит неоправданно долго. Для нас процесс стрижки — это медитация, в высшей точке которой переплетаются творчество и ремесло. Эта медитация работает только в паре “барбер-клиент”, когда второй доверяет первому.
                                    </p>
                                    <p className={classes.description}>
                                        Именно здесь мы не говорим о лишнем, мы за истинные мужские ценности — индивидуальный характер и стиль.
                                    </p>
                                    <p className={classes.description}>
                                        Cartel — твоя стрижка, твоя истина.
                                    </p>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>
            </div>
        </Layout>
    )
};
export default About;