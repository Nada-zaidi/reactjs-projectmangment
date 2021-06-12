import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import actions from 'src/modules/user/view/userViewActions';
import selectors from 'src/modules/user/view/userViewSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';
import UserView from 'src/view/user/view/UserView';

function UserViewPage(props) {
  const dispatch = useDispatch();
  const match = useRouteMatch();

  const loading = useSelector(selectors.selectLoading);
  const user = useSelector(selectors.selectUser);

  useEffect(() => {
    dispatch(actions.doFind(match.params.id));
  }, [dispatch, match.params.id]);

  return (
    <>
      <Breadcrumb
        items={[
          ["Dashboard", '/'],
          ["Users", '/user'],
          ["View User"],
        ]}
      />

      <ContentWrapper>
        <PageTitle>View User</PageTitle>


        <UserView loading={loading} user={user} />
      </ContentWrapper>
    </>
  );
}

export default UserViewPage;
