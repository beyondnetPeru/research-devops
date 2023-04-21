import { Link } from 'react-router-dom';

const HomePage = (): JSX.Element => {
  return (
    <div>
      <h1>Home Page</h1>
      <div>
        <Link to="/products">
          <button>List Products</button>
        </Link>
        <Link to="/orders">
          <button>List Orders</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
