// @ts-nocheck
/** Libraries */
import React from 'react';
import { connect } from 'react-redux';

/** Redux */
import { createStream } from '../../../actions';

/** Components */
import { StreamForm } from '../index';

const StreamCreate = ({ createStream }) => {
  const onSubmit = (formValues) => {
    createStream(formValues);
  };

  return (
    <div>
      <h3>Create a stream</h3>
      <StreamForm onSubmit={onSubmit} />
    </div>
  );
};

export default connect(null, { createStream })(StreamCreate);
