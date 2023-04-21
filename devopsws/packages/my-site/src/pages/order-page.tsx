import { Link } from 'react-router-dom';

const OrderPage = () => {
  return (
    <>
      <div>
        <h1>Order Page</h1>
      </div>
      <div>
        <Link to="/">
          <button>Return Home</button>
        </Link>
      </div>
    </>
  );
};

export default OrderPage;
