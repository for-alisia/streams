/** Libraries */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

/** Redux */
import { fetchStreams } from '../../../actions';

const StreamList = ({ streams, fetchStreams, currentUserId, isSignedIn }) => {
  useEffect(() => {
    fetchStreams();
  }, []);

  return (
    <div>
      <h2>Streams</h2>
      <div className="ui celled list">
        {streams.map((stream) => (
          <div className="item" key={stream.id}>
            {stream.userId === currentUserId ? (
              <div className="right floated content">
                <button className="ui button primary">Edit</button>
                <button className="ui button negative">Delete</button>
              </div>
            ) : (
              ''
            )}
            <i className="large middle aligned icon camera" />
            <div className="content">
              {stream.title}
              <div className="description">{stream.description}</div>
            </div>
          </div>
        ))}
      </div>
      {isSignedIn ? (
        <div style={{ textAlign: 'right' }}>
          <Link to="/streams/new" className="ui button primary">
            Create stream
          </Link>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

const mapStateToProps = ({ streams, auth: { isSignedIn, userId } }) => {
  return { streams: Object.values(streams), currentUserId: userId, isSignedIn };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
