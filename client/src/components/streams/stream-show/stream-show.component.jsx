// @ts-nocheck
/** Libraries */
import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import flv from 'flv.js';

/** Redux */
import { fetchStream } from '../../../actions';

const StreamShow = ({ fetchStream, match, stream }) => {
  const videoRef = useRef();
  useEffect(() => {
    fetchStream(match.params.id);
  }, [fetchStream, match]);
  useEffect(() => {
    if (stream) {
      const player = flv.createPlayer({
        type: 'flv',
        url: `http://localhost:8000/live/${stream.id}.flv`,
      });

      player.attachMediaElement(videoRef.current);
      player.load();

      return () => {
        player.destroy();
      };
    }
  }, [stream]);
  return (
    <div>
      <video ref={videoRef} style={{ width: '100%' }} controls />
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
