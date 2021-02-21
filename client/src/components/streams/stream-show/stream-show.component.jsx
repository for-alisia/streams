/** Libraries */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

/** Redux */
import { fetchStream } from '../../../actions';

const StreamShow = ({ fetchStream, match, stream }) => {
  useEffect(() => {
    fetchStream(match.params.id);
  }, [fetchStream, match]);
  return (
    <div>
      {stream ? (
        <div>
          <h1>{stream.title}</h1>
          <h5>{stream.description}</h5>
        </div>
      ) : (
        'No stream with this id'
      )}
    </div>
  );
};
const mapStateToProps = ({ streams }, { match }) => ({ stream: streams[match.params.id] });

export default connect(mapStateToProps, { fetchStream })(StreamShow);
