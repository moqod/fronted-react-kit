import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { addLocaleData, IntlProvider } from 'react-intl';
import App from './components/App';
import Login from './components/Login';
import PrivateRoute from './utils/PrivateRoute';
import store from './utils/store'
import registerServiceWorker from './registerServiceWorker';
import 'typeface-roboto';
import './index.css';

const locale = localStorage.getItem('lang_key') || 'en';
const languages = {
  en: require('./translations/en.json')['en']
};
const localeData = languages[locale];

addLocaleData(localeData);
addLocaleData({
  locale: locale,
  parentLocale: 'en'
});

ReactDOM.render(
  <Provider store={store}>
    <IntlProvider locale={locale} defaultLocale={locale} messages={localeData}>
      <Router>
        <div>
          <PrivateRoute path="/" component={App}/>
          <Route path="/login" component={Login}/>
        </div>
      </Router>
    </IntlProvider>
  </Provider>, document.getElementById('root')
);
registerServiceWorker();
