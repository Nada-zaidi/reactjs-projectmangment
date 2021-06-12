import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import FormWrapper from 'src/view/shared/styles/FormWrapper';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import UserAutocompleteFormItem from 'src/view/user/autocomplete/UserAutocompleteFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import taskEnumerators from 'src/modules/task/taskEnumerators';
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import ProjectAutocompleteFormItem from 'src/view/project/autocomplete/ProjectAutocompleteFormItem';

const schema = yup.object().shape({
  title: yupFormSchemas.string(
    "Title",
    {},
  ),
  description: yupFormSchemas.string(
    "Description",
    {},
  ),
  assignedTo: yupFormSchemas.relationToOne(
    "AssignedTo",
    {},
  ),
  statut: yupFormSchemas.enumerator(
    "Statut",
    {
      "options": taskEnumerators.statut
    },
  ),
  dateCompletion: yupFormSchemas.date(
    "DateCompletion",
    {},
  ),
  project: yupFormSchemas.relationToOne(
    "Project",
    {},
  ),
});

function TaskForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      title: record.title,
      description: record.description,
      assignedTo: record.assignedTo,
      statut: record.statut,
      dateCompletion: record.dateCompletion ? moment(record.dateCompletion, 'YYYY-MM-DD').toDate() : null,
      project: record.project,
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: initialValues,
  });

  const onSubmit = (values) => {
    props.onSubmit(props.record?.id, values);
  };

  return (
    <FormWrapper>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="title"
                label="Title"
                required={false}
              autoFocus
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="description"
                label="Description"
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <UserAutocompleteFormItem  
                name="assignedTo"
                label="AssignedTo"
                required={false}
                showCreate={!props.modal}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <SelectFormItem
                name="statut"
                label="Statut"
                options={taskEnumerators.statut.map(
                  (value) => ({
                    value,
                    label: 
                      `${value}`,
                  }),
                )}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <DatePickerFormItem
                name="dateCompletion"
                label="DateCompletion"
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <ProjectAutocompleteFormItem  
                name="project"
                label="Project"
                required={false}
                showCreate={!props.modal}
              />
            </div>
          </div>

          <div className="form-buttons">
            <button
              className="btn btn-primary"
              disabled={props.saveLoading}
              type="button"
              onClick={form.handleSubmit(onSubmit)}
            >
              <ButtonIcon
                loading={props.saveLoading}
                iconClass="far fa-save"
              />{' '}
              Save
            </button>

            {props.onCancel ? (
              <button
                className="btn btn-light"
                type="button"
                disabled={props.saveLoading}
                onClick={() => props.onCancel()}
              >
                <i className="fas fa-times"></i>{' '}
                Cancel
              </button>
            ) : null}
          </div>
        </form>
      </FormProvider>
    </FormWrapper>
  );
}

export default TaskForm;
