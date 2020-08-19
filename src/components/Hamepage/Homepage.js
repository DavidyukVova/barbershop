import React from 'react'
import LayoutMain from "../LayoutMain";
import FirstSection from "./FirstSection";
import i18n from '../../i18n';
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import FourSection from "./FourSection";
import FiveSection from "./FiveSection";
import SixthSection from "./SixthSection";
import DocumentMeta from 'react-document-meta';


export default () => {

    const meta = {
        title: i18n.t('CARTEL ᐉ Barbershop in Kiev on Druzhby Narodiv 💈 Men\'s hairdressing'),
        description: i18n.t('CarteL\'s author\'s barbershop in Kiev on Druzhby Narodiv Blvd. 32A. The combination of unsurpassed style and practicality. Free Drinks!'),
    };

    return (
        <LayoutMain>
            <DocumentMeta {...meta}>
                <FirstSection/>
                <FourSection/>
                <SecondSection/>
                <ThirdSection/>
                <FiveSection/>
                <SixthSection/>
            </DocumentMeta>
        </LayoutMain>
    )
};
