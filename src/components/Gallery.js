import React, { Component } from "react";
// TABLE

class Gallery extends Component {
  render() {
    // const captions = [
    //   "test caption 1",
    //   "test caption 2",
    //   "test caption 3",
    //   "test caption 4",
    //   "test caption 5",
    //   "test caption 6",
    //   "test caption 7",
    //   "test caption 8"
    // ];
    let images = [];
    for (let i = 0; i < 24; i++) {
      images.push("/photos/" + i + ".jpg");
    }

    return (
      <div className="galleryPhotos">
        {images.map(elem => (
          <img alt="" src={elem} />
        ))}
        {/* {captions.map(cap => (
          <div>{cap}</div>
        ))} */}
      </div>
    );
  }
}

export default Gallery;
