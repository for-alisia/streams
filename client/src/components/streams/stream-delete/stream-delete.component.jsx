/** Libraries */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

/** Components */
import { Modal } from '../../ui';

/** Router */
import history from '../../../history';

/** Redux */
import { deleteStream, fetchStream } from '../../../actions';

const StreamDelete = ({ stream, deleteStream, fetchStream, match }) => {
  const onDismiss = () => {
    history.push('/');
  };

  const onDelete = () => {
    deleteStream(stream.id);
  };

  const actions = (
    <>
      <button className="ui negative button" onClick={onDelete}>
        DELETE
      </button>
      <button className="ui button" onClick={onDismiss}>
        CANCEL
      </button>
    </>
  );

  useEffect(() => {
    fetchStream(match.params.id);
  }, [fetchStream, match]);

  return (
    <Modal
      title="DELETE STREAM"
      content={`Are you sure you want to delete the stream: ${stream ? stream.title : ''}?`}
      actions={actions}
      onDismiss={onDismiss}
    />
  );
};

const mapStateToProps = ({ streams }, { match }) => ({ stream: streams[match.params.id] });

export default connect(mapStateToProps, { deleteStream, fetchStream })(StreamDelete);
