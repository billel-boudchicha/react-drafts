import React from 'react';
import PropTypes from 'prop-types';

function RichMedia(props) {
  const { src, width, height, caption } = props.blockProps || props;
  return (
    <figure className="drafts-editor__custom-block rich">
      <div className="rich-media-wrapper">
        <iframe
          src={src}
          width={width}
          height={height}
          frameBorder="0"
          allowFullScreen
        />
      </div>
      {
        caption && (
          <figcaption className="caption">
            {caption}
          </figcaption>
        )
      }
    </figure>
  );
}

RichMedia.propTypes = {
  props: PropTypes.shape({
    blockProps: PropTypes.shape({
      src: PropTypes.string,
      caption: PropTypes.string
    })
  })
};

export default RichMedia;
