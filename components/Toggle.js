import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
if (!process.env.EXCLUDE_SASS) {
  import('@console/bluemix-components/consumables/scss/base-elements/toggle/toggle.scss');
}

const propTypes = {
  className: PropTypes.string,
  defaultToggled: PropTypes.bool,
  onToggle: PropTypes.func,
  id: PropTypes.string.isRequired,
  toggled: PropTypes.bool,
  labelA: PropTypes.string.isRequired,
  labelB: PropTypes.string.isRequired,
};

const defaultProps = {
  defaultToggled: false,
  labelA: 'Off',
  labelB: 'On',
  onToggle: () => {},
};

const Toggle = ({ className, defaultToggled, toggled, onToggle, id, labelA, labelB, ...other }) => {
  let input;
  const wrapperClasses = classNames(
    'toggleWrapper',
    [className]: className
  );

  const checkedProps = {};

  if (typeof toggled !== 'undefined') {
    checkedProps.checked = toggled;
  } else {
    checkedProps.defaultChecked = defaultToggled;
  }

  return (
    <div className={wrapperClasses}>
      <input
        {...other}
        {...checkedProps}
        type="checkbox"
        id={id}
        className="bx--toggle"
        onChange={evt => { onToggle(input.checked, id, evt); }}
        ref={el => { input = el; }}
      />

      <label className="bx--toggle__label" htmlFor={id}>
        <span className="bx--toggle__text--left">{labelA}</span>
        <span className="bx--toggle__appearance"></span>
        <span className="bx--toggle__text--right">{labelB}</span>
      </label>
    </div>
  );
};

Toggle.propTypes = propTypes;
Toggle.defaultProps = defaultProps;

export default Toggle;
