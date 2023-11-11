import React from 'react';

import classNames from 'classnames';
import styles from './Card.module.scss';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/display-name
const Card = React.forwardRef(
  ({ children, className, as, variant, noSpacing, ...other }, ref) => {
    const Element = { as };
    return (
      // eslint-disable-next-line react/jsx-pascal-case
      <Element.as
        ref={ref}
        className={classNames(styles[variant], styles.container, className, {
          [styles.noSpacing]: noSpacing,
        })}
        {...other}
      >
        {children}
      </Element.as>
    );
  },
);

Card.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'elevated', 'rounded']),
  as: PropTypes.string,
  noSpacing: PropTypes.bool,
};
Card.defaultProps = {
  className: '',
  as: 'div',
  variant: 'default',
  noSpacing: false,
};
export { Card as default };
