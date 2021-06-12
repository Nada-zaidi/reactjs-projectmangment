import list from 'src/modules/task/list/taskListReducers';
import form from 'src/modules/task/form/taskFormReducers';
import view from 'src/modules/task/view/taskViewReducers';
import destroy from 'src/modules/task/destroy/taskDestroyReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
});
