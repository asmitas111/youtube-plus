import React, { Component } from 'react';

class MyProfile extends Component {
  state = {
    profileName: 'Asmita'
  };

  handleUpdateProfile = (event) => {
    this.setState({
      profileName: event.target.value
    });
  };

  render() {
    return (
      <div>
         <h3>Profile Info</h3>
        <input
          type="text"
          value={this.state.profileName}
          onChange={this.handleUpdateProfile}>
          </input>
        <p>Entered Profile Name: {this.state.profileName}</p>{' '}
      </div>
    );
  }
}

export default MyProfile;
