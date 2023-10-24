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
      const response = await fetch('http://localhost:5000/cartproduct/add-to-cart', {
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
    <div className="grid justify-center my-20 relative">
  <img className="h-96 rounded-2xl" src={product.photo} alt={product.name} />
  <h2 className="">{product.name}</h2>
  <p>Type: {product.type}</p>
  <p>Price: ${product.price}</p>
  <p>Description: {product.description2}</p>
  <p>Rating: {product.rating}</p>
  <button
    className="btn bg-purple-600 hover-bg-purple-900 absolute bottom-4 left-1/2 transform -translate-x-1/2"
    onClick={handleAddToCart}
  >
    Add to Cart
  </button>
</div>

  );
};

export default ProductDetails;
