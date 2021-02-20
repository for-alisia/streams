// @ts-nocheck
/** Libraries */
import React from 'react';
import { Field, reduxForm } from 'redux-form';

/** Components */
import { FormInput } from '../../ui';

const validate = (formValues) => {
  const errors = {};

  !formValues.title && (errors.title = 'Title should not be empty');
  !formValues.description && (errors.description = 'Description should not be empty');

  return errors;
};

const StreamForm = ({ handleSubmit, onSubmit }) => {
  return (
    <div>
      <form className="ui form error" onSubmit={handleSubmit(onSubmit)}>
        <Field name="title" component={FormInput} label="Enter title" />
        <Field name="description" component={FormInput} label="Enter description" />
        <button className="ui button primary">Submit</button>
      </form>
    </div>
  );
};

export default reduxForm({ form: 'streamForm', validate })(StreamForm);
