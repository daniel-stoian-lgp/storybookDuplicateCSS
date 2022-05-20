import React from 'react';
import PropTypes from 'prop-types';

/**
 * Primary UI component for user interaction
 */
export const KeyGuide = ({ children, ...rest }) => {
  const processedChildren =
      children.map(({text, key, ...rest}) => {
        return (
          <div {...rest}>
            <div>{text}</div>
            <div>{key}</div>
          </div>
        )
      })

  return (
      <div {...rest}>
          {processedChildren}
      </div>
  )
};

KeyGuide.propTypes = {
  children: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    key: PropTypes.number
  })),
};
