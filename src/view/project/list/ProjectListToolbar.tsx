import projectSelectors from 'src/modules/project/projectSelectors';
import destroyActions from 'src/modules/project/destroy/projectDestroyActions';
import destroySelectors from 'src/modules/project/destroy/projectDestroySelectors';
import selectors from 'src/modules/project/list/projectListSelectors';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import ConfirmModal from 'src/view/shared/modals/ConfirmModal';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import Toolbar from 'src/view/shared/styles/Toolbar';
import ReactTooltip from 'react-tooltip';

function ProjectToolbar(props) {
  const [
    destroyAllConfirmVisible,
    setDestroyAllConfirmVisible,
  ] = useState(false);

  const dispatch = useDispatch();

  const selectedKeys = useSelector(
    selectors.selectSelectedKeys,
  );
  const loading = useSelector(selectors.selectLoading);
  const destroyLoading = useSelector(
    destroySelectors.selectLoading,
  );

  const hasPermissionToDestroy = useSelector(
    projectSelectors.selectPermissionToDestroy,
  );
  const hasPermissionToCreate = useSelector(
    projectSelectors.selectPermissionToCreate,
  );

  const doOpenDestroyAllConfirmModal = () => {
    setDestroyAllConfirmVisible(true);
  };

  const doCloseDestroyAllConfirmModal = () => {
    setDestroyAllConfirmVisible(false);
  };

  const doDestroyAllSelected = () => {
    doCloseDestroyAllConfirmModal();

    dispatch(destroyActions.doDestroyAll(selectedKeys));
  };


  const renderDestroyButton = () => {
    if (!hasPermissionToDestroy) {
      return null;
    }

    const disabled = !selectedKeys.length || loading;

    const button = (
      <button
        disabled={disabled}
        className="btn btn-primary"
        type="button"
        onClick={doOpenDestroyAllConfirmModal}
      >
        <ButtonIcon
          loading={destroyLoading}
          iconClass="far fa-trash-alt"
        />{' '}
       Destroy
      </button>
    );

    if (disabled) {
      return (
        <span
          data-tip= "Must select a row"
          data-tip-disable={!disabled}
          data-for="project-list-toolbar-destroy-tooltip"
        >
          {button}
          <ReactTooltip id="project-list-toolbar-destroy-tooltip" />
        </span>
      );
    }

    return button;
  };

  return (
    <Toolbar>
      {hasPermissionToCreate && (
        <Link to="/project/new">
          <button className="btn btn-primary" type="button">
            <ButtonIcon iconClass="fas fa-plus" />{' '}
            New
          </button>
        </Link>
      )}

      {renderDestroyButton()}


      {destroyAllConfirmVisible && (
        <ConfirmModal
          title= "are You Sure ?"
          onConfirm={() => doDestroyAllSelected()}
          onClose={() => doCloseDestroyAllConfirmModal()}
          okText= "Yes"
          cancelText= "No"
        />
      )}
    </Toolbar>
  );
}

export default ProjectToolbar;
