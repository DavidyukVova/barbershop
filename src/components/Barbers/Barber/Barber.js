import React from 'react'
import classes from '../Barbers.module.css'
import Layout from "../../Layout";
import {connect} from "react-redux";
import i18n from "../../../i18n";
import {Col, Container, Row} from "react-bootstrap";

const Barber = ({match, barbers}) => {
    const {id} = match.params;

    return (
        <Layout>
            <div className={classes.barberPageWrap}>
                <Container>
                    <div>
                    {
                        barbers.barbers
                            .filter((barber, index) => (parseInt(barber.id) === parseInt(id)))
                            .map((barber, index) => (
                                <Row key={`top${index}`}>
                                    <Col md={6}>
                                        <div>
                                            <img src={process.env.PUBLIC_URL+barber.imagePageTop1} alt={barber.name}/>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className={classes.topBlock}>
                                            <h6>
                                                {i18n.t(`${barber.name}`)}
                                            </h6>
                                            <p>
                                                {i18n.t(`${barber.rank}`)}
                                            </p>
                                        </div>
                                        <div className={classes.description}>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem beatae cum ducimus enim neque, qui repellat sed. A accusantium alias dolorem facere fugit ipsam itaque minus, obcaecati quasi voluptatibus. Doloremque impedit laboriosam maiores molestiae porro quis unde! Aliquid cum cupiditate dolorem dolores ipsa mollitia nesciunt rerum suscipit. Architecto consectetur cupiditate doloremque ea eaque ex excepturi, hic, impedit laborum libero natus nemo perspiciatis praesentium, sint ullam. Accusamus atque aut consectetur corporis cumque deleniti doloribus excepturi harum impedit labore laborum laudantium, libero necessitatibus nihil nobis omnis possimus provident quo repellat similique sunt tempore vel veniam. Cum fugit, quos! Dolor earum quisquam veniam.
                                            </p>
                                        </div>
                                    </Col>
                                </Row>
                            ))
                    }
                    </div>
                    <h3 className={classes.title}>
                        {i18n.t('Barber revelations')}
                    </h3>
                    <div>
                    {
                        barbers.barbers
                            .filter((barber, index) => (parseInt(barber.id) === parseInt(id)))
                            .map((barber, index) => (
                                <Row key={`middle${index}`}>
                                    <Col md={6}>
                                        <div className={classes.description}>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem beatae cum ducimus enim neque, qui repellat sed. A accusantium alias dolorem facere fugit ipsam itaque minus, obcaecati quasi voluptatibus. Doloremque impedit laboriosam maiores molestiae porro quis unde! Aliquid cum cupiditate dolorem dolores ipsa mollitia nesciunt rerum suscipit. Architecto consectetur cupiditate doloremque ea eaque ex excepturi, hic, impedit laborum libero natus nemo perspiciatis praesentium, sint ullam. Accusamus atque aut consectetur corporis cumque deleniti doloribus excepturi harum impedit labore laborum laudantium, libero necessitatibus nihil nobis omnis possimus provident quo repellat similique sunt tempore vel veniam. Cum fugit, quos! Dolor earum quisquam veniam.
                                            </p>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div>
                                            <img src={process.env.PUBLIC_URL+barber.imagePageMiddle1} alt={barber.name}/>
                                        </div>
                                    </Col>
                                </Row>
                            ))
                    }
                    </div>
                    <div className={classes.middleBlock}>
                        {
                            barbers.barbers
                                .filter((barber, index) => (parseInt(barber.id) === parseInt(id)))
                                .map((barber, index) => (
                                    <Row key={`middle${index}`}>
                                        <Col xs={12}>
                                            <div>
                                                <img src={process.env.PUBLIC_URL+barber.imagePageBottom1} alt={barber.name}/>
                                            </div>
                                        </Col>
                                        <Col xs={12}>
                                            <div className={`${classes.description} ${classes.bottomDescription}`}>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem beatae cum ducimus enim neque, qui repellat sed. A accusantium alias dolorem facere fugit ipsam itaque minus, obcaecati quasi voluptatibus. Doloremque impedit laboriosam maiores molestiae porro quis unde! Aliquid cum cupiditate dolorem dolores ipsa mollitia nesciunt rerum suscipit. Architecto consectetur cupiditate doloremque ea eaque ex excepturi, hic, impedit laborum libero natus nemo perspiciatis praesentium, sint ullam. Accusamus atque aut consectetur corporis cumque deleniti doloribus excepturi harum impedit labore laborum laudantium, libero necessitatibus nihil nobis omnis possimus provident quo repellat similique sunt tempore vel veniam. Cum fugit, quos! Dolor earum quisquam veniam.
                                                </p>
                                            </div>
                                        </Col>
                                    </Row>
                                ))
                        }
                    </div>
                </Container>
            </div>
        </Layout>
    )
};
const mapStateToProps = (state) => ({
    barbers: state.barbers,
});

export default connect(mapStateToProps)(Barber);