import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux';
import GoogleAnalytics from 'react-router-ga';
import React from 'react';
import ReactDOM from 'react-dom';

import {
  CLIENT_GOOGLE_ANALYTICS_DEBUG,
  CLIENT_GOOGLE_ANALYTICS_ID,
} from './constants/env';
import { configureStore, configureAgentStore } from './configureStore';
import AgentApp from './AgentApp';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const isLocalhost = window.location.hostname.match(/localhost|127\.0\.0\.1/g);
const [subdomain] = window.location.hostname.split('.');
const [subdomain2] = window.location.hostname.split('-');

const agentPortal =
  (isLocalhost && window.location.pathname.split('/')[1] === 'agent') ||
  subdomain === 'agent' ||
  subdomain2 === 'agent';


if (agentPortal) {
  localStorage.setItem('portal', 'agent');
  const store = configureAgentStore();
  ReactDOM.render(
    <Provider store={store.store}>
      <PersistGate persistor={store.persistor}>
          <BrowserRouter>
            <AgentApp />
          </BrowserRouter>
      </PersistGate>
    </Provider>,
    document.getElementById('root')
  );
  registerServiceWorker();
} else {
  localStorage.setItem('portal', 'client');
  const store = configureStore();
  ReactDOM.render(
    <Provider store={store.store}>
      <PersistGate persistor={store.persistor}>
          <BrowserRouter>
            <GoogleAnalytics
              debug={CLIENT_GOOGLE_ANALYTICS_DEBUG}
              id={CLIENT_GOOGLE_ANALYTICS_ID}
            >
              <App />
            </GoogleAnalytics>
          </BrowserRouter>
      </PersistGate>
    </Provider>,
    document.getElementById('root')
  );
  registerServiceWorker();
}
