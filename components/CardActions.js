import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
if (!process.env.EXCLUDE_SASS) {
  import('carbon-components/consumables/scss/components/card/card.scss');
}

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

const CardActions = ({ children, className, ...other }) => {
  const cardActionClasses = classNames({
    'bx--card-footer__app-actions': true,
    [className]: className,
  });

  return (
    <div className={cardActionClasses} {...other}>
      {children}
    </div>
  );
};

CardActions.propTypes = propTypes;

export default CardActions;
