import React from 'react';
import styles from './Switch.module.css';
import PropTypes from 'prop-types';

export default function Switch({ on, toggle, color, ...props }) {
  return (
    <label className={`${styles.pureMaterialSwitch} ${color ? styles[color] : ''}`}>
      <input type="checkbox" checked={on ? 'checked' : false} {...props} />
      <span />
    </label>
  );
}

Switch.propTypes = {
  on: PropTypes.bool,
  toggle: PropTypes.func
};
