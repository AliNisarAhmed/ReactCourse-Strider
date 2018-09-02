import React from 'react';

class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = { term: '' };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    // event.persist();
    this.setState({ term: event.target.value });
  }
  
  render() {
    return (
      <div>
        <input value={this.state.term} onChange={this.handleInputChange}/>
        <p>Value in Input: {this.state.term}</p>
      </div>
    );
  }
}

export default SearchBar;