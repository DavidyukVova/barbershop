import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import i18n, {languages} from './i18n';
import {Route, Switch} from "react-router";
import {withRouter} from "react-router";
import Homepage from './components/Hamepage/Homepage';
import store from "./store";
import * as UserActions from './actions/User';
import * as EnvActions from './actions/Env';
import * as Api from './api';
import NotFound from "./components/NotFound";
import Barbers from "./components/Barbers/Barbers";
import Services from "./components/Servise/Services";
import Gallery from "./components/Gallery/Gallery";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import Barber from "./components/Barbers/Barber/Barber";

class App extends React.Component {

    controlLangPrefix() {
        const {pathname = '', search = ''} = this.props.location;
        const segments = pathname.split('/');
        const currentLang = i18n.language.substr(0, 2);
        const segLang = segments[1].substr(0, 2);

        if (currentLang.toString() !== segLang.toString()) {
            if (languages.indexOf(segLang) >= 0) {
                return i18n.changeLanguage(segLang).then(() => {
                    this.props.history.push(`/${currentLang}${pathname}${search}`);
                    this.forceUpdate();
                });
            } else {
                if (currentLang.toString() !== i18n.language.toString()) {
                    return i18n.changeLanguage(currentLang).then(() => (this.props.history.push(`/${i18n.language}${pathname}${search}`)));
                }
                return this.props.history.push(`/${currentLang}${pathname}${search}`);
            }
        }

    }

    componentDidMount() {
        if (i18n.language.length > 2) {
            i18n.changeLanguage(i18n.language.length.substr(0, 2)).then(e => (
                this.controlLangPrefix().then()
            ))
        } else {
            this.controlLangPrefix();
        }
        store.dispatch(UserActions.getData());
        if (Api.getLogged()) {
            store.dispatch(EnvActions.load());
        }
    }

    render() {
        return (
            <Route>
                {languages.map(lng => (
                        <Route key={lng}>
                            <Switch>
                            <Route exact path={`/${lng}/`} component={Homepage} key="Homepage"/>
                            <Route exact path={`/${lng}/barbers`} component={Barbers} key="barbers"/>
                            <Route exact path={`/${lng}/services`} component={Services} key="services"/>
                            <Route exact path={`/${lng}/gallery`} component={Gallery} key="gallery"/>
                            <Route exact path={`/${lng}/about`} component={About} key="about"/>
                            <Route exact path={`/${lng}/contacts`} component={Contacts} key="contacts"/>
                            <Route path={`/${lng}/barber/:id`} component={Barber} key="barber"/>


                            <Route path={`/${lng}/`} component={NotFound} />
                            </Switch>
                        </Route>
                    )
                )}
            </Route>
        );
    }
}

export default withRouter(App);
