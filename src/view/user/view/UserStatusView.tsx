import React from 'react';

function UserStatusView(props) {
  const { value } = props;

  if (!value) {
    return null;
  }

  if (value === 'active') {
    return (
      <span className={`badge badge-success`}>
        Active
      </span>
    );
  }

  if (value === 'empty-permissions') {
    return (
      <span className={`badge badge-danger`}>
        "Waiting for Permissions"
      </span>
    );
  }

  return (
    <span className={`badge badge-warning`}>
      Invited
    </span>
  );
}

export default UserStatusView;
