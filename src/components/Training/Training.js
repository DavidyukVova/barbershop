import React from 'react';
import Layout from "../Layout";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import {PlaneSection} from "./PlaneSection";
import ThemeTraining from "./ThemeTraining";
import i18n from "../../i18n";

const Training = () => {
    document.title = `Cartel Barbershop - ${i18n.t('Training')}`;
    return (
        <Layout>
            <FirstSection/>
            <SecondSection/>
            <PlaneSection/>
            <ThemeTraining/>
        </Layout>
    )
};
export default Training;