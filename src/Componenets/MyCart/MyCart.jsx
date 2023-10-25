import { useLoaderData } from "react-router-dom";

const MyCart = () => {
  const cartproducts = useLoaderData();

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
      {cartproducts.map((product, index) => (
        <div key={index} className="glass text-white shadow-lg rounded-lg overflow-hidden">
          <img src={product.photo} alt={product.name} className="w-full h-48 object-cover object-center" />

          <div className="p-6">
            <p>Product Name: {product.name}</p>
            <p>Type: {product.type}</p>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <p>Rating: {product.rating}</p>
          </div>

          <div className="flex justify-between p-6">
            <button className="btn btn-secondary">Remove from Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyCart;
