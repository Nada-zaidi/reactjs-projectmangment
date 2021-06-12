import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import UserViewItem from 'src/view/user/view/UserViewItem';
import TaskViewItem from 'src/view/task/view/TaskViewItem';

function ProjectView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <TextViewItem
        label= "Title"
        value={record.title}
      />

      <TextViewItem
        label= "Description"
        value={record.description}
      />

      <UserViewItem
        label= "Admins"
        value={record.admins}
      />

      <UserViewItem
        label= "UsersList"
        value={record.usersList}
      />

      <TaskViewItem
        label= "Statut"
        value={record.statut}
      />

      <TaskViewItem
        label= "Task"
        value={record.task}
      />
    </ViewWrapper>
  );
}

export default ProjectView;
