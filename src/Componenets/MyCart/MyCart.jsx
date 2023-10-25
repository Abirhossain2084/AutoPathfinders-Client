import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const MyCart = () => {

  // const{user} =useContext(AuthContext)
  // console.log(user);
  // const userCartItems = cartproducts.filter((product) => product.userId === user.userId);
 
  const cartproducts = useLoaderData();

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 my-20">
      {cartproducts.map((product, index) => (
        <div key={index} className="glass bg-black text-white shadow-lg rounded-lg overflow-hidden">
          <img src={product.photo} alt={product.name} className="w-full h-48 object-cover object-center" />

          <div className="p-6">
            <p>Product Name: {product.name}</p>
            <p>Type: {product.type}</p>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <p>Rating: {product.rating}</p>
          </div>

          <div className="flex justify-between p-6">
            <button className="btn bg-purple-800 text-white">Remove from Cart</button>
          </div>
        </div>
      ))}

{/* <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
{userCartItems.map((product, index) => (
<p key={index}>{product.name}</p>
))}
</div> */}

    </div>
  );
};

export default MyCart;
