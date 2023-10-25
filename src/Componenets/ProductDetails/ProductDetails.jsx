import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ProductDetails = () => {
  const product = useLoaderData();

  const handleAddToCart = async () => {
    try {
      // Create a cartProduct object with the data you want to save
      const cartProduct = {
        name: product.name,
        type: product.type,
        price: product.price,
        description: product.description,
        rating: product.rating,
        photo: product.photo,
      };

      // Send a POST request to your server to add the product to the cart
      const response = await fetch('https://autopathfinder-server-arqtj2hvl-md-abir-hossains-projects.vercel.app/cartproduct/add-to-cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cartProduct), // Send the cartProduct data in the request body
      });

      if (response.ok) {
        // The item was added to the cart successfully
        Swal.fire({
          title: 'Added!',
          text: 'Product has been added to cart',
          icon: 'success',
          confirmButtonText: 'Okay!'
        })
      } else {
        // There was an error adding the item to the cart
        Swal.fire({
          title: 'Something is Wrong',
          text: 'Try age again',
          icon: 'error',
          confirmButtonText: 'Okay!'
        })
      }
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  };

  return (
    <div className="grid glass rounded-lg bg-black text-white justify-center my-20 relative">
    <div className="flex flex-col items-center"> {/* Centering container */}
      <img className="h-96 mt-4 rounded-2xl" src={product.photo} alt={product.name} />
      <div className="p-6 text-center">
        <p className="text-2xl font-bold my-2">Name: {product.name}</p>
        <p className="text-xl font-semibold">Type: {product.type}</p>
        <p className="text-xl font-semibold my-4">Price: ${product.price}</p>
        <p className="text-yellow-400">
          <span className="text-xl font-bold">Description:</span> {product.description}
        </p>
        <p className="text-yellow-400">
          <span className="text-xl font-bold">Details:</span> {product.description2}
        </p>
        <p className="text-xl font-semibold my-2">Rating: {product.rating} / 10</p>
        <button
          className="btn bg-purple-600 hover-bg-purple-900"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>
  


  );
};

export default ProductDetails;
