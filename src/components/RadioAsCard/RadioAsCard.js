import React from 'react';

import { Card } from '@/components';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Clickable } from 'reakit/Clickable';
import { Radio as BaseRadio } from 'reakit/Radio';

import styles from './RadioAsCard.module.scss';

/**
 * Base Radio on top of reakit - styling only
 */
// eslint-disable-next-line react/display-name
const RadioAsCard = React.forwardRef(
  ({ disabled, id, label, description, hasError, ...other }, ref) => (
    <label
      id={id ? `${id}-label` : null}
      htmlFor={id}
      className={classNames(styles.container, {
        [styles.disabled]: disabled,
      })}
    >
      <BaseRadio
        id={id}
        ref={ref}
        className={styles.input}
        {...other}
        tabIndex="-1"
        disabled={disabled}
      />
      <Clickable
        disabled={disabled}
        as={Card}
        className={classNames(styles.card, {
          [styles.hasError]: hasError,
        })}
      >
        {label && (
          <h2 className={styles.heading}>
            {label}
          </h2>
        )}
      </Clickable>
    </label>
  ),
);

RadioAsCard.propTypes = {
  disabled: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.string,
  description: PropTypes.string,
  hasError: PropTypes.bool,
};
RadioAsCard.defaultProps = {
  disabled: false,
  label: null,
  description: null,
  hasError: false,
};

export default RadioAsCard;
