import React from 'react';

class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = { term: '' };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(term) {
    // event.persist();
    this.setState({ term });
    this.props.onVideoSearch(term);
  }
  
  render() {
    return (
      <div className="search-bar">
        <input 
          value={this.state.term} 
          onChange={event => this.handleInputChange(event.target.value)}/>
        <p>Value in Input: {this.state.term}</p>
      </div>
    );
  }
}

export default SearchBar;