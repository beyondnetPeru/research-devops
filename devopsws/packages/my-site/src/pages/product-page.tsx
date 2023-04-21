import { Link } from 'react-router-dom';

const ProductPage = () => {
  return (
    <>
      <div>
        <h1>Produtc Page</h1>
      </div>
      <div>
        <Link to="/">
          <button>Return Home</button>
        </Link>
      </div>
    </>
  );
};

export default ProductPage;
