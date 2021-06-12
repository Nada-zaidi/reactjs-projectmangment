import list from 'src/modules/project/list/projectListReducers';
import form from 'src/modules/project/form/projectFormReducers';
import view from 'src/modules/project/view/projectViewReducers';
import destroy from 'src/modules/project/destroy/projectDestroyReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
});
