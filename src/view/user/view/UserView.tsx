import React from 'react';
import Roles from 'src/security/roles';
import Spinner from 'src/view/shared/Spinner';
import CustomViewItem from 'src/view/shared/view/CustomViewItem';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import UserStatusView from 'src/view/user/view/UserStatusView';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';

function UserView(props) {
  const { user, loading } = props;

  if (loading || !user) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <TextViewItem
        label="Email"
        value={user.email}
      />
      <TextViewItem
        label="First Name"
        value={user.firstName}
      />
      <TextViewItem
        label="Last Name"
        value={user.lastName}
      />
      <TextViewItem
        label="Phone Number"
        value={user.phoneNumber}
        prefix={'+'}
      />

      <CustomViewItem
        label="Roles"
        value={user.roles}
        render={(value) =>
          value.map((roleId) => (
            <div key={roleId}>
              <span>{Roles.labelOf(roleId)}</span>
            </div>
          ))
        }
      />

      <CustomViewItem
        label="Status"
        value={user.status}
        render={(value) => <UserStatusView value={value} />}
      />
    </ViewWrapper>
  );
}

export default UserView;
