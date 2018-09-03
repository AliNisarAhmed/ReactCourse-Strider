import React from 'react';

class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = { term: '' };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }

  handleInputChange(event) {
    event.persist();
    this.setState(() => ( { term: event.target.value } ));
  }
  
  onSearchSubmit(event) {
    event.preventDefault();
    const term = this.state.term;
    console.log(term)
    this.props.onVideoSearch(term);
  }
  
  render() {
    return (
      <div className="search-bar">
      <form onSubmit={this.onSearchSubmit}>
        <input 
          value={this.state.term} 
          onChange={this.handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>
      </div>
    );
  }
}

export default SearchBar;