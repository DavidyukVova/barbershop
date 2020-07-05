import React from 'react';
import classes from './Training.module.css'
import i18n from '../../i18n';
import {Col, Container, Row} from "react-bootstrap";

const ThemeTraining = () => {
    return (
        <div className={classes.themeTraining}>
            <div className={classes.contentWrap}>
                <Container fluid={true}>
                    <Row>
                        <Col xs={12}>
                            <h2 className={classes.title}>
                                {i18n.t('Training topics')}
                            </h2>
                            <p className={classes.smallDescription}>
                                {i18n.t('All topics are included in each course lasting from five lessons. \n The teacher selects themes for one-day programs individually.')}
                            </p>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col lg={10} md={12}>
                            <div className={classes.bottomBlock}>
                                <p>
                                    - {i18n.t('Selection and proper use of the tool;')}
                                </p>
                                <p>
                                    - {i18n.t('Development of a technician with a clipper;')}
                                </p>
                                <p>
                                    - {i18n.t('Mastering scissors in combination with thinning technology;')}
                                </p>
                                <p>
                                    - {i18n.t('Combination of acquired skills in modern haircuts;')}
                                </p>
                                <p>
                                    - {i18n.t('Quality material for the master’s portfolio on Instagram;')}
                                </p>
                                <p>
                                    - {i18n.t('Work with a safety razor shaving and edging;')}
                                </p>
                                <p>
                                    - {i18n.t('Beard decoration.')}
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
};
export default ThemeTraining;