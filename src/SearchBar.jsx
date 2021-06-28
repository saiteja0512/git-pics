import React, { Component } from "react";

export class SearchBar extends Component {
  state = {
    term: "",
  };

  onSubmitForm = (e) => {
    e.preventDefault();
    this.props.onSubmitFunc(this.state.term);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitForm}>
          <input
            value={this.state.term}
            onChange={(e) => this.setState({ term: e.target.value })}
            type="text"
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
