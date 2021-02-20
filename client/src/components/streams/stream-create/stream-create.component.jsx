/** Libraries */
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

/** Redux */
import { createStream } from '../../../actions';

const validate = (formValues) => {
  const errors = {};

  !formValues.title && (errors.title = 'Title should not be empty');
  !formValues.description && (errors.description = 'Description should not be empty');

  return errors;
};

// TODO: strange error on lost of focus after first symbol was printed
// const StreamCreate = ({ handleSubmit, createStream }) => {
//   const renderError = ({ error, touched }) => {
//     if (error && touched)
//       return (
//         <div className="ui error message">
//           <div className="header">{error}</div>
//         </div>
//       );
//   };

//   const renderInput = ({ input, label, meta }) => {
//     return (
//       <div className={`field ${meta.error && meta.touched ? 'error' : null}`}>
//         <label>{label}</label>
//         <input {...input} autoComplete="off" />
//         <div>{renderError(meta)}</div>
//       </div>
//     );
//   };

//   const onSubmit = (formValues) => {
//     createStream(formValues);
//   };

//   return (
//     <div>
//       <form className="ui form error" onSubmit={handleSubmit(onSubmit)}>
//         <Field name="title" component={renderInput} label="Enter title" />
//         <Field name="description" component={renderInput} label="Enter description" />
//         <button className="ui button primary">Submit</button>
//       </form>
//     </div>
//   );
// };

class StreamCreate extends React.Component {
  renderError = ({ error, touched }) => {
    if (error && touched)
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
  };

  renderInput = ({ input, label, meta }) => {
    return (
      <div className={`field ${meta.error && meta.touched ? 'error' : null}`}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        <div>{this.renderError(meta)}</div>
      </div>
    );
  };

  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <div>
        <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field name="title" component={this.renderInput} label="Enter title" />
          <Field name="description" component={this.renderInput} label="Enter description" />
          <button className="ui button primary">Submit</button>
        </form>
      </div>
    );
  }
}

const formWrapped = reduxForm({ form: 'createStream', validate })(StreamCreate);

export default connect(null, { createStream })(formWrapped);
