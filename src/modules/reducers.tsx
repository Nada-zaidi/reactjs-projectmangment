import { connectRouter } from 'connected-react-router';
import layout from 'src/modules/layout/layoutReducers';
import auth from 'src/modules/auth/authReducers';
import tenant from 'src/modules/tenant/tenantReducers';
import user from 'src/modules/user/userReducers';
import settings from 'src/modules/settings/settingsReducers';
import project from 'src/modules/project/projectReducers';
import task from 'src/modules/task/taskReducers';
import { combineReducers } from 'redux';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    layout,
    auth,
    tenant,
    user,
    settings,
    project,
    task,
  });
