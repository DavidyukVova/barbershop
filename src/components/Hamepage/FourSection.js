import React from 'react';
import classes from './Homepage.module.css'
import i18n from '../../i18n';
import {Col, Container, Row} from "react-bootstrap";

const FourSection = () => {
    return (
        <div className={classes.fourSection}>
            <div className={classes.contentWrap}>
                <Container fluid={true}>
                    <Row>
                        <Col xs={12}>
                            <h2 className={classes.title}>
                                {i18n.t('Services and training')}
                            </h2>
                            <p className={classes.smallDescription}>
                                {i18n.t('A haircut has long been a business card of a man, so every day we create new images, helping to reveal your true character, what it is. No need to rack your brains, bring pictures, just trust this to the master and you will find “your own”.')}
                            </p>
                        </Col>
                    </Row>
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
                    </div>
                </Container>
            </div>
        </div>
    )
};
export default FourSection;