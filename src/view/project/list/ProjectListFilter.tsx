import actions from 'src/modules/project/list/projectListActions';
import selectors from 'src/modules/project/list/projectListSelectors';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm, FormProvider } from 'react-hook-form';
import yupFilterSchemas from 'src/modules/shared/yup/yupFilterSchemas';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import FilterWrapper from 'src/view/shared/styles/FilterWrapper';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import FilterPreview from 'src/view/shared/filter/FilterPreview';
import filterRenders from 'src/modules/shared/filter/filterRenders';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import UserAutocompleteFormItem from 'src/view/user/autocomplete/UserAutocompleteFormItem';
import TaskAutocompleteFormItem from 'src/view/task/autocomplete/TaskAutocompleteFormItem';

const schema = yup.object().shape({
  title: yupFilterSchemas.string(
    "Title",
  ),
  description: yupFilterSchemas.string(
    "Description",
  ),
  admins: yupFilterSchemas.relationToOne(
    "Admins",
  ),
  usersList: yupFilterSchemas.relationToOne(
    "UsersList",
  ),
  statut: yupFilterSchemas.relationToOne(
    "Statut",
  ),
});

const emptyValues = {
  title: null,
  description: null,
  admins: null,
  usersList: null,
  statut: null,
}

const previewRenders = {
  title: {
    label: "Title",
    render: filterRenders.generic(),
  },
  description: {
    label: "Description",
    render: filterRenders.generic(),
  },
  admins: {
    label: "Admins",
    render: filterRenders.relationToOne(),
  },
  usersList: {
    label: "UsersList",
    render: filterRenders.relationToOne(),
  },
  statut: {
      label: "Statut",
      render: filterRenders.relationToOne(),
    },
}

function ProjectListFilter(props) {
  const rawFilter = useSelector(selectors.selectRawFilter);
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(false);

  const [initialValues] = useState(() => {
    return {
      ...emptyValues,
      ...rawFilter,
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    defaultValues: initialValues,
    mode: 'all',
  });

  useEffect(() => {
    dispatch(actions.doFetch(schema.cast(initialValues), rawFilter));
    // eslint-disable-next-line
  }, [dispatch]);

  const onSubmit = (values) => {
    const rawValues = form.getValues();
    dispatch(actions.doFetch(values, rawValues));
    setExpanded(false);
  };

  const onRemove = (key) => {
    form.setValue(key, emptyValues[key]);
    return form.handleSubmit(onSubmit)();
  };

  return (
    <FilterWrapper>
      <FilterPreview
        onClick={() => {
          setExpanded(!expanded);
        }}
        renders={previewRenders}
        values={rawFilter}
        expanded={expanded}
        onRemove={onRemove}
      />
      <div className="container">
        <div
          className={`collapse ${expanded ? 'show' : ''}`}
        >
          <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="row">
                    <div className="col-lg-6 col-12">
                      <InputFormItem
                        name="title"
                        label= "Title"   
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputFormItem
                        name="description"
                        label= "Description"     
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <UserAutocompleteFormItem  
                        name="admins"
                        label= "Admins"       
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <UserAutocompleteFormItem  
                        name="usersList"
                        label= "UsersList"       
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <TaskAutocompleteFormItem  
                        name="statut"
                        label= "Statut"       
                      />
                    </div>
              </div>

              <div className="row">
                <div className="col-12 filter-buttons">
                  <button
                    className="btn btn-primary"
                    type="submit"
                    disabled={props.loading}
                  >
                    <ButtonIcon
                      loading={props.loading}
                      iconClass="fas fa-search"
                    />{' '}
                    Search
                  </button>
                </div>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </FilterWrapper>
  );
}

export default ProjectListFilter;