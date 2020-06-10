import React from 'react'
import LayoutMain from "../LayoutMain";
import FirstSection from "./FirstSection";
import i18n from '../../i18n';
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import FourSection from "./FourSection";
import FiveSection from "./FiveSection";
import SixthSection from "./SixthSection";

export default () => {
    document.title = `Cartel Barbershop - ${i18n.t('Main')}`;
    return (
        <LayoutMain>
            <FirstSection/>
            <SecondSection/>
            <ThirdSection/>
            <FourSection/>
            <FiveSection/>
            <SixthSection/>
        </LayoutMain>
    )
};
