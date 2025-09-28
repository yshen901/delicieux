import React from 'react';
import { Link } from 'react-router-dom';
import SideIcon from '../stylesheets/assets/side.png';

import withLocation from '../withLocation';
import { withNavigation } from '../withNavigation';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.navigate("/");
      this.props.logout();
  }

  renderErrors() {
    return(
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  getLinks() {
      if (this.props.loggedIn) {
        if (this.props.location.pathname === "/") {
          return <div></div>
        } else {
          return (
            <div className="nav-main">
              <div className="nav-left">
                {/* <button className="nav-button" onClick={() => this.props.openSide("first")}> */}
                  <img src={SideIcon} className="side-button" onClick={() => this.props.openSide("first")} alt=""/>
                {/* </button> */}
                <Link className="nav-button" to="/index">Home</Link>
                <Link className="nav-button" to="/fridge">Fridge</Link>
                <Link className="nav-button" to="/weeklycart">Weekly Summary</Link>
              </div>
              <div className="nav-right">
                <button className="nav-button" onClick={this.logoutUser}>Logout</button>
              </div>
            </div>
          );
        }
      } else {
        return (
            <div className="main-auth" >
              {/* <button onClick={ () => this.props.openModal("login") }>Login</button>
              <button onClick={ () => this.props.openModal("signup") }>Sign Up</button>
               */}
                <Link className="main-sign" to={'/signup'}>Signup</Link>
                <Link className="main-sign" to={'/login'}>Login</Link>
            </div>
        );
      }
  }

  render() {
      return (
        <div className="nav-main">
            { this.getLinks() }
        </div>
      );
  }
}

// TODO: Maybe wrap all of this in a custom withRouter that has both
export default withNavigation(withLocation(NavBar));