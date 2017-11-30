import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {term: ''};
  }
  
  render() {
    return <input onChange={(e) => {console.log(e.target.value)}} />
  }

}

export default SearchBar;