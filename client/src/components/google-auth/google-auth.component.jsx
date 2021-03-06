// @ts-nocheck
/** Libraries */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

/** Redux */
import { signIn, signOut } from '../../actions';

/** Data */
import { OATH_KEY } from '../../keys';

const GoogleAuth = ({ isSignedIn, signIn, signOut }) => {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    window.gapi.load('client:auth2', async () => {
      await window.gapi.client.init({ clientId: OATH_KEY, scope: 'email' });
      setAuth(window.gapi.auth2.getAuthInstance());
    });
  }, []);

  useEffect(() => {
    if (auth !== null) {
      onAuthChange(auth.isSignedIn.get());
      auth.isSignedIn.listen(onAuthChange);
    }
  }, [auth]);

  const onAuthChange = (isSignedIn) => {
    isSignedIn ? signIn(auth.currentUser.get().getId()) : signOut();
  };

  const onSignClick = () => {
    isSignedIn ? auth.signOut() : auth.signIn();
  };

  return isSignedIn !== null ? (
    <button className="ui red google button" onClick={onSignClick}>
      <i className="google icon"></i>
      {isSignedIn ? 'Sign out' : 'Sign in'}
    </button>
  ) : null;
};

const mapStateToProps = ({ auth: { isSignedIn } }) => ({ isSignedIn });

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);

/** Class-based variation */
// class _GoogleAuth extends React.Component {
//   componentDidMount() {
//     window.gapi.load('client:auth2', () => {
//       window.gapi.client
//         .init({
//           clientId: OATH_KEY,
//           scope: 'email',
//         })
//         .then(() => {
//           this.auth = window.gapi.auth2.getAuthInstance();
//           this.onAuthChange(this.auth.isSignedIn.get());
//           this.authListener = this.auth.isSignedIn.listen(this.onAuthChange);
//         });
//     });
//   }

//   componentWillUnmount() {
//     this.authListener = null;
//   }

//   onAuthChange = (isSignedIn) => {
//     isSignedIn ? this.props.signIn(this.auth.currentUser.get().getId()) : this.props.signOut();
//   };

//   onSignInClick = () => {
//     this.auth.signIn();
//   };

//   onSignOutClick = () => {
//     this.auth.signOut();
//   };

//   renderAuthButton() {
//     if (this.props.isSignedIn === null) {
//       return null;
//     } else if (this.props.isSignedIn) {
//       return (
//         <button className="ui red google button" onClick={this.onSignOutClick}>
//           <i className="google icon"></i>
//           Sigh Out
//         </button>
//       );
//     } else {
//       return (
//         <button className="ui red google button" onClick={this.onSignInClick}>
//           <i className="google icon"></i>
//           Sign In with Google
//         </button>
//       );
//     }
//   }

//   render() {
//     return <div>{this.renderAuthButton()}</div>;
//   }
// }
