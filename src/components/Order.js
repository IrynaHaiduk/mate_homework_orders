import React from 'react';
import { orderType } from '../types';

export const Order = ({ order }) => (
  <div className="ui card">
    <div className="ui content">
      <div className="ui description">
        <p>
          {`${order.title} - ${order.user.name}`}
        </p>

        <ul className="ui list">
          {order.products.length > 0
            ? (
              order.products.map(product => (
                <li key={product.id}>{product.name}</li>
              ))
            )
            : (
              <b>No products</b>
            )}
        </ul>
      </div>
    </div>
  </div>
);

Order.propTypes = {
  order: orderType,
};
