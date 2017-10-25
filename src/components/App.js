import React, { Component } from 'react';
import axios from 'axios';
import MenuBar from './MenuBar';
import VideoList from './VideoList';
import apiKey from '../config/youtube-api-key.json';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: []
    };

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(searchTerm) {
    console.log('Searching videos: ' + searchTerm);

    const searchApi = 'https://www.googleapis.com/youtube/v3/search';
    const queryTerm = encodeURIComponent(searchTerm);
    const url = searchApi + '?q=' + queryTerm + '&key=' + apiKey + '&maxResults=10&part=snippet';

    axios
      .get(url)
      .then(response => {
        const videos = response.data.items.filter(v => v.id.kind === 'youtube#video').map(v => ({
          id: v.id.videoId,
          title: v.snippet.title,
          image: v.snippet.thumbnails.medium
        }));

        this.setState({ videos: videos });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <div className="app">
        <MenuBar onSearch={this.handleSearch} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
