import React from 'react';
import './ZoomImage.css';

class ZoomImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cursorPosition: { x: 0, y: 0 },
      isZoomed: false
    };
    this.handleMouseMove = this.handleMouseMove.bind(this);
  }

  handleMouseMove(event) {
    const { left, top, width, height } = event.target.getBoundingClientRect();
    const x = (event.clientX - left) / width;
    const y = (event.clientY - top) / height;
    this.setState({ cursorPosition: { x, y }, isZoomed: true });
  }

  render() {
    const { src, alt, thumbnail } = this.props;
    const { cursorPosition, isZoomed } = this.state;

    return (
      <div className="zoom-image-container" onMouseMove={this.handleMouseMove}>
        <div className="thumbnail-container">
          <img src={thumbnail} alt={alt} className="thumbnail" />
        </div>
        <div className="zoomed-image-container">
          <img
            src={src}
            alt={alt}
            className={`zoomed-image ${isZoomed ? 'zoomed' : ''}`}
            style={{
              transformOrigin: `${cursorPosition.x * 100}% ${cursorPosition.y * 100}%`
            }}
          />
        </div>
      </div>
    );
  }
}

export default ZoomImage;
