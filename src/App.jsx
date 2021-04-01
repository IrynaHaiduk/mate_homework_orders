import React from 'react';
import './App.scss';
import { OrderList } from './components/OrderList';

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
    <OrderList orders={preparedOrders} />
  </div>
);
