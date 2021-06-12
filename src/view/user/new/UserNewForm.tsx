import { useForm, FormProvider } from 'react-hook-form';
import React, { useState } from 'react';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import TagsFormItem from 'src/view/shared/form/items/TagsFormItem';
import FormWrapper from 'src/view/shared/styles/FormWrapper';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import * as yup from 'yup';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import userEnumerators from 'src/modules/user/userEnumerators';
import { yupResolver } from '@hookform/resolvers/yup';

const singleSchema = yup.object().shape({
  email: yupFormSchemas.email("Email"),
  roles: yupFormSchemas.stringArray(
    "Roles",
    { required: true, min: 1 },
  ),
});

const multipleSchema = yup.object().shape({
  emails: yup
    .array()
    .label("Email(s)")
    .of(
      yup
        .string()
        .transform((cv, ov) => {
          return ov === '' ? null : cv;
        })
        .email("Email is invalid")
        .label("Email")
        .max(255)
        .required(),
    )
    .required().min(1),
  roles: yupFormSchemas.stringArray(
    "Roles",
    { required: true, min: 1 },
  ),
});

function UserNewForm(props) {
  const { single, saveLoading } = props;

  const schema = props.single
    ? singleSchema
    : multipleSchema;

  const [initialValues] = useState(() => ({
    emails: [],
    email: '',
    roles: [],
  }));

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: initialValues,
  });

  const onSubmit = (values) => {
    const { ...data } = values;

    if (data.email) {
      data.emails = [data.email];
      delete data.email;
    }

    props.onSubmit(null, data);
  };

  return (
    <FormWrapper>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-lg-7 col-md-8 col-12">
              {single ? (
                <InputFormItem
                  name="email"
                  label="Email"
                  required={true}
                  autoFocus
                />
              ) : (
                <TagsFormItem
                  name="emails"
                  label="Email(s)"
                  notFoundContent="Separate multiple email addresses using the comma character."
                  required={true}
                />
              )}
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <SelectFormItem
                name="roles"
                label="Roles"
                required={true}
                options={userEnumerators.roles.map(
                  (value) => ({
                    value,
                    label: `Roles.${value}.label`,
                  }),
                )}
                mode="multiple"
              />
            </div>
          </div>

          <div className="form-buttons">
            <button
              className="btn btn-primary"
              disabled={saveLoading}
              type="button"
              onClick={form.handleSubmit(onSubmit)}
            >
              <ButtonIcon
                loading={saveLoading}
                iconClass="far fa-save"
              />{' '}
              Save
            </button>

            {props.onCancel ? (
              <button
                disabled={saveLoading}
                onClick={() => props.onCancel()}
                className="btn btn-light"
                type="button"
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

export default UserNewForm;
