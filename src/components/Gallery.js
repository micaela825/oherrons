import React, { Component } from "react";

// TABLE

class Gallery extends Component {
  render() {
    const captions = [
      "test caption 1",
      "test caption 2",
      "test caption 3",
      "test caption 4",
      "test caption 5",
      "test caption 6",
      "test caption 7",
      "test caption 8"
    ];
    let images = [];
    for (let i = 0; i < 8; i++) {
      images.push("/photos/" + i + ".jpg");
    }

    return (
      <div id="galleryPage">
        <h1>gallery</h1>
        <div className="row" id="gallery">
          {images.map((elem, i) => (
            <div id="galleryImage">
              <span className="galleryBox">
                <img height="200" width="200" alt="" src={elem} />
                <div id="galleryCaption">{captions[i]}</div>
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Gallery;
