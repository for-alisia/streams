/** Libraries */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

/** Redux */
import { fetchStream, editStream } from '../../../actions';

/** Components */
import { StreamForm } from '../index';

const StreamEdit = ({ match: { params }, fetchStream, stream, editStream }) => {
  useEffect(() => {
    fetchStream(params.id);
  }, [fetchStream, params]);

  const onSubmit = (formValues) => {
    editStream(stream.id, formValues);
  };
  return (
    <div>
      {stream ? (
        <div>
          <h3>Edit a stream</h3>
          <StreamForm onSubmit={onSubmit} initialValues={_.pick(stream, 'title', 'description')} />
        </div>
      ) : (
        "Doesn't have a stream with this id"
      )}
    </div>
  );
};

const mapStateToProps = ({ streams }, { match: { params } }) => ({ stream: streams[params.id] });

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);
