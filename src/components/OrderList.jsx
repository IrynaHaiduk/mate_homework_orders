import React from 'react';
import PropTypes from 'prop-types';
import { Order } from './Order';
import { orderType } from '../types';

export const OrderList = ({ orders }) => (
  <>
    <h1>Order list</h1>
    {orders.map(item => (
      <React.Fragment key={item.id}>
        <Order order={item} />
      </React.Fragment>
    ))}
  </>
);

OrderList.propTypes = {
  orders: PropTypes.arrayOf(orderType).isRequired,
};
