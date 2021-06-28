import React, { Component } from "react";

export class ImageList extends Component {
  render() {
    let images = this.props.images.map((image) => {
      return <img key={image.id} src={image.urls.regular} />;
    });
    return <div className="imagelist">{images}</div>;
  }
}

export default ImageList;
