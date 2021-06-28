import React, { Component } from "react";

import "./App.css";
import Unsplash from "./Unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends Component {
  state = {
    images: [],
  };
  onSubmit = async (term) => {
    const response = await Unsplash.get("/search/photos", {
      params: { query: term },
    });
    this.setState({ images: response.data.results });
    // this.setState({ images: response.results });
  };
  render() {
    return (
      <div className="App">
        <SearchBar onSubmitFunc={this.onSubmit} />
        Found: {this.state.images.length}
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
