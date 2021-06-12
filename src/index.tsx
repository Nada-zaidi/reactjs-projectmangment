import React from 'react';
import ReactDOM from 'react-dom';
import { AuthToken } from './modules/auth/authToken';
import TenantService from './modules/tenant/tenantService';
//import SettingsService from './modules/settings/settingsService';

(async function () {
  AuthToken.applyFromLocationUrlIfExists();
  await TenantService.fetchAndApply();
 // SettingsService.applyThemeFromTenant();

  const App = require('./App').default;
  document.title = "Project Management";
  ReactDOM.render(<App />, document.getElementById('root'));
})();
