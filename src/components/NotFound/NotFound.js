import React from 'react'
import Layout from "../Layout";
import i18n from '../../i18n';
import classes from './NotFound.module.css'

export default () => {
    document.title = `Cartel Barbershop - ${i18n.t('Not found')}`;
    return (
        <Layout>
            <div className={classes.notFoundBlock}>
                <div className={classes.text}>
                    <p>404</p>
                    <p>Not Found</p>
                </div>
            </div>
        </Layout>
    )
};