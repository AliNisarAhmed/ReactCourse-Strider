import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = "AIzaSyD1gVsSwM2mWPX8x6ISvHQOnweKnuAzHng";


class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      videos: [],
      selectedVideo: null 
    };

    this.onVideoSelect = this.onVideoSelect.bind(this);
    this.onVideoSearch = this.onVideoSearch.bind(this);

    this.onVideoSearch('ronaldo');
  }

  onVideoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState(() => ({ 
        videos,
        selectedVideo: videos[0] 
      }));
    });

  }

  onVideoSelect(selectedVideo) {
    this.setState(() => ({ selectedVideo }))
  }

  render() {
    return (
      <div>
        <SearchBar onVideoSearch={this.onVideoSearch}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
          videos={this.state.videos} 
          onVideoSelect={this.onVideoSelect}  
        />
      </div>
    );
  }
}


ReactDOM.render(<App />, document.querySelector('.container'));
