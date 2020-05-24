import React from 'react'
import Layout from "./Layout";
import i18n from '../i18n';

export default () => {
    document.title = `Cartel Barbershop - ${i18n.t('Main')}`;
    return (
        <Layout>
            <p>404</p>
        </Layout>
    )
};