import React, { Component } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';

class InstaFeedPage extends Component {
  state = {
    isLoading: true,
    isError: false,
    photos: []
  };

  componentDidMount() {
    // ideal lifecycle hook to connect with REST API
    // What's the REST API URL?
    // What's the HTTP Method? GET
    // What's the REST API CLIENT TOOL? Axios
    axios
      .get('https://jsonplaceholder.typicode.com/photos?_limit=20')
      .then((res) => {
        console.log(res.data);
        // TODO: make use of above data and display UI.
        this.setState({
          isLoading: false,
          isError: false,
          photos: res.data
        });
      })

      .catch((err) => {
        console.log(err);
        this.setState({
          isLoading: false,
          isError: true
        });
      })

      .finally(() => {
        console.log('it is over!');
      });
  }

  render() {
    // Loader
    if (this.state.isLoading) {
      return (
        <div className="text-center">
          <div className="spinner-border text-danger" role="status"></div>
        </div>
      );
    }

    if (this.state.isError) {
      return (
        <div className="alert alert-danger" role="alert">
          Sorry! Unable to fetch photos. Try again later.
        </div>
      );
    }

    return (
      <div className="row">
        <Helmet>
          <title>Insta Feed Page</title>
        </Helmet>
        {this.state.photos.map(({ id, url, title }) => (
          <div className="col-md-3" key={id}>
            <div className="card shadow-sm">
              <img src={url} alt={title} />
              <div className="card-body">
                <p className="card-text">{title}</p>
              </div>
            </div>
          </div>
        ))}
        ;
      </div>
    );
  }
}

export default InstaFeedPage;
