import React from 'react';
import './App.scss';

import ordersFromServer from './api/orders.json';
import usersFromServer from './api/users.json';
import productsFromServer from './api/products.json';

const preparedOrders = ordersFromServer.map(order => ({
  ...order,
  user: usersFromServer
    .find(user => user.id === order.userId),
  products: productsFromServer
    .filter(product => product.orderId === order.id),
}));

export const App = () => (
  <div className="container">
    {preparedOrders.map(order => (
      <div className="ui card">
        <div className="ui content">
          <div className="ui description">
            <p>
              {`${order.title} - ${order.user.name}`}
            </p>
            <ul className="ui list">
              {order.products.map(product => (
                <li>{product.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    ))}
  </div>
);
