import React from 'react';
import BulkOrder from '../components/BulkOrder';
import OrderTracking from '../components/OrderTracking';

const OrdersPage = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center', marginTop: '2rem' }}>Wholesale Orders</h1>
      <BulkOrder />
      <hr style={{ margin: '2rem 0' }} />
      <OrderTracking />
    </div>
  );
};

export default OrdersPage;
