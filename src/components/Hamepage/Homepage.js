import React from 'react'
import Layout from "../Layout";
import FirstSection from "./FirstSection";
import i18n from '../../i18n';
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import FourSection from "./FourSection";

export default () => {
    document.title = `Cartel Barbershop - ${i18n.t('Main')}`;
    return (
        <Layout>
            <FirstSection/>
            <SecondSection/>
            <ThirdSection/>
            <FourSection/>
        </Layout>
    )
};
