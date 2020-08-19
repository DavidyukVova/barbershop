import React from 'react';
import Layout from "../Layout";
// import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import {PlaneSection} from "./PlaneSection";
import ThemeTraining from "./ThemeTraining";
import i18n from "../../i18n";
import DocumentMeta from 'react-document-meta';

const Training = () => {
    const meta = {
        title: i18n.t('Barber training from scratch ᐉ CARTEL 💈 Academy of Berber Art'),
        description: i18n.t('CarteL Academy is where you learn how to cut and shave under the supervision of experienced masters. Do you dream of working in a barbershop? Come to us for a 30-day course with practical experience.'),
    };


    return (
        <Layout>
            <DocumentMeta {...meta}>
                {/*<FirstSection/>*/}
                <SecondSection/>
                <PlaneSection/>
                <ThemeTraining/>
            </DocumentMeta>
        </Layout>
    )
};
export default Training;