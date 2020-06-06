import i18n from "i18next";
//import { reactI18nextModule } from "react-i18next";
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

// import translationEN from './translations/en';
import translationRU from './translations/ru';
import translationUK from './translations/uk';

import {initReactI18next} from "react-i18next";
import intervalPlural from 'i18next-intervalplural-postprocessor';

import moment from "moment";

// the translations
const resources = {
    // en:{
    //     translation: translationEN
    // },
    uk: {
        translation: translationUK
    },
    ru: {
        translation: translationRU
    }
};

export const languages = ['ru', 'uk'];

i18n
//    .use(reactI18nextModule)
    .use(LanguageDetector)
    .use(Backend)
    .use(initReactI18next)
    .use(intervalPlural)
    .init({
            resources,
            fallbackLng: "en",
            keySeparator: false, // we do not use keys in form messages.welcome
            whitelist: languages,
            interpolation: {
                escapeValue: false, // react already safes from xss
                format: (value, format, lng) => {
                    if(value instanceof Date) return moment(value).format(format);
                    return value;
                }
            }
        }
    );


export default i18n;