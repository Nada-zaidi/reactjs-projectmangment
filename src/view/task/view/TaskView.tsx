import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import UserViewItem from 'src/view/user/view/UserViewItem';
import ProjectViewItem from 'src/view/project/view/ProjectViewItem';

function TaskView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <TextViewItem
        label="Title"
        value={record.title}
      />

      <TextViewItem
        label="Description"
        value={record.description}
      />

      <UserViewItem
        label="AssignedTo"
        value={record.assignedTo}
      />

      <TextViewItem
        label="Statut"
        value={
          record.statut
        }
      />

      <TextViewItem
        label="DateCompletion"
        value={record.dateCompletion}
      />

      <ProjectViewItem
        label="Project"
        value={record.project}
      />
    </ViewWrapper>
  );
}

export default TaskView;
