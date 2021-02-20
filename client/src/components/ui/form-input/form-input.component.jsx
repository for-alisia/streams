/** Libraries */
import React from 'react';

const FormInput = ({ input, label, meta }) => (
  <div className={`field ${meta.error && meta.touched ? 'error' : null}`}>
    <label>{label}</label>
    <input {...input} autoComplete="off" />
    <div>
      {meta.error && meta.touched ? (
        <div className="ui error message">
          <div className="header">{meta.error}</div>
        </div>
      ) : (
        ''
      )}
    </div>
  </div>
);

export default FormInput;
