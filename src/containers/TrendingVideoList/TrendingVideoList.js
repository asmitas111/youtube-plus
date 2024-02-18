import React, { Component } from 'react';
import TrendingVideo from '../../pages/HomePage/TrendingVideo/TrendingVideo';

// class comp a.k.a. containers/smart components/stateful comp
class TrendingVideoList extends Component {
  /*
   *state is an object
   */

  /*state is a place for keeping comp-wide data */
  state = {
    videoResolution: '4K',
    videos: [
      {
        id: '567865896',
        title: 'Planet Earth',
        description:
          'Earth is a terrestrial planet in the Solar System.Learn About it. ',
        thumbnailUrl:
          'https://via.placeholder.com/250x200/008000/ffffff?text=PlanetEarthII',
        channel: 'BBC Earth',
        views: '10 M',
        publishedDate: '3 weeks ago'
      },
      {
        id: '567865896',
        title: 'News Nation',
        description: 'Catch the latest news from all around the country.',
        thumbnailUrl:
          'https://via.placeholder.com/250x200/000000/ffffff?text=LatestNewsII',
        channel: 'Latest News',
        views: '1 M',
        publishedDate: '3 weeks ago'
      },
      {
        id: '5678243396',
        title: 'Friends Fan',
        description: 'Watch all the episodes of Friends online',
        thumbnailUrl:
          'https://via.placeholder.com/250x200/ff0000/ffffff?text=LatestFriendsEpisodes',
        channel: 'Drama Addict',
        views: '13 M',
        publishedDate: '3 days ago'
      },
      {
        id: '567290545896',
        title: 'TedX India',
        description: 'Catch the latest TedX from all around the country.',
        thumbnailUrl:
          'https://via.placeholder.com/250x200/0000ff/808080?text=TedXIndia',
        channel: 'TED',
        views: '6.5 M',
        publishedDate: '1 week ago'
      }
    ]
  };

  // event handler method
  handleSwitchResolution = () => {
    // within arrow fn -- this keyword will be available
    console.log('Clicked');
    console.log(this);
    //this.state.videoResolution ='8K'; // do not mutate state directly. Use setState().
    this.setState({
      videoResolution: '8K'
    });
  };

  //must have render method
  render() {
    console.log('Inside Render');
    console.log(this.state.videoResolution);
    // must return JSX
    return (
      <div className="row">
        <p>
          Enjoy the trending videos in stunning {this.state.videoResolution}{' '}
          Resolution |
          <button
            className="btn btn-primary ms-2"
            onClick={this.handleSwitchResolution}>
            Switch to 8K
          </button>
        </p>
        <div className="col-md-3">
          <TrendingVideo
            title={this.state.videos[0].title}
            thumbnailUrl={this.state.videos[0].thumbnailUrl}
            channel={this.state.videos[0].channel}
            views={this.state.videos[0].views}
            publishedDate={this.state.videos[0].publishedDate}
            description={this.state.videos[0].description}
          ></TrendingVideo>
        </div>

        <div className="col-md-3">
          <TrendingVideo
            title={this.state.videos[1].title}
            thumbnailUrl={this.state.videos[1].thumbnailUrl}
            channel={this.state.videos[1].channel}
            views={this.state.videos[1].views}
            publishedDate={this.state.videos[1].publishedDate}
            description={this.state.videos[1].description}
          ></TrendingVideo>
        </div>

        <div className="col-md-3">
          <TrendingVideo
            title={this.state.videos[2].title}
            thumbnailUrl={this.state.videos[2].thumbnailUrl}
            channel={this.state.videos[2].channel}
            views={this.state.videos[2].views}
            publishedDate={this.state.videos[2].publishedDate}
            description={this.state.videos[2].description}
          ></TrendingVideo>
        </div>

        <div className="col-md-3">
          <TrendingVideo
            title={this.state.videos[3].title}
            thumbnailUrl={this.state.videos[3].thumbnailUrl}
            channel={this.state.videos[3].channel}
            views={this.state.videos[3].views}
            publishedDate={this.state.videos[3].publishedDate}
            description={this.state.videos[3].description}
          ></TrendingVideo>
        </div>
      </div>
    );
  }
}

export default TrendingVideoList;
