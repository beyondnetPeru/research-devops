import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Order } from '../models';
import { getOrders } from '../services/orderServices';

const OrderPage = () => {
  const [orders, setOrders] = useState([] as Order[]);

  useEffect(() => {
    getOrders().then((orders) => setOrders(orders));
  }, []);

  return (
    <>
      <div>
        <h1>Order List</h1>
      </div>
      <div>
        <div>{JSON.stringify(orders)}</div>
      </div>
      <br />
      <div>
        <Link to="/">
          <button>Return Home</button>
        </Link>
      </div>
    </>
  );
};

export default OrderPage;
