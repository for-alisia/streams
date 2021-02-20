// @ts-nocheck
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
        {streams.map(({ id, title, description, userId }) => (
          <div className="item" key={id}>
            {userId === currentUserId ? (
              <div className="right floated content">
                <Link to={`/streams/edit/${id}`} className="ui button primary">
                  Edit
                </Link>
                <Link to={`/streams/delete/${id}`} className="ui button negative">
                  Delete
                </Link>
              </div>
            ) : (
              ''
            )}
            <i className="large middle aligned icon camera" />
            <div className="content">
              {title}
              <div className="description">{description}</div>
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
