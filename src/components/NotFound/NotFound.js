import React from 'react'
import Layout from "../Layout";
import i18n from '../../i18n';
import classes from './NotFound.module.css'
import {StatusCode} from "react-http-status-code";


const NotFound = () => {

    document.title = `Cartel Barbershop - ${i18n.t('Not found')}`;
    return (
        <Layout>
            <StatusCode code={404}>
                <div className={classes.notFoundBlock}>
                    <div className={classes.text}>
                        <p>404</p>
                        <p>Not Found</p>
                    </div>
                </div>
            </StatusCode>
        </Layout>
    )
};
export default NotFound;