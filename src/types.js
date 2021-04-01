import PropTypes from 'prop-types';

export const userType = PropTypes.shape({
  name: PropTypes.string.isRequired,
}).isRequired;

export const productType = PropTypes.shape({
  name: PropTypes.string.isRequired,
}).isRequired;

export const orderType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  userId: PropTypes.number.isRequired,
  user: userType,
  products: PropTypes.arrayOf(productType).isRequired,
}).isRequired;
