import React from 'react';
import classes from './Homepage.module.css'
import i18n from '../../i18n';
import {Col, Container, Row} from "react-bootstrap";

export const FiveSection = () => {
    return (
        <div className={classes.fourSection}>
            <div className={classes.contentWrap}>
                <Container fluid={true}>
                    <Row>
                        <Col xs={12}>
                            <h2 className={classes.title}>
                                {i18n.t('Gallery')}
                            </h2>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
};
export default FiveSection