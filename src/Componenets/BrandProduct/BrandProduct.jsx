import { Link, useLoaderData } from "react-router-dom";
import BrandSwiper from "./BrandSwiper";

const BrandProduct = () => {

  const product = useLoaderData();
  console.log(product);

  return (
    <div>



      {product.length === 0 ? (

<div className="h-[700px] rounded-xl" style={{ backgroundImage: 'url("https://i.ibb.co/ck1mN72/huma-kabakci-o-Rk4-Ep65t-Rc-unsplash.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
<p className="text-6xl text-center font-bold text-white">No Product Found!</p>
<p className="text-xl text-center text-white">Stay tuned</p>


</div>

        
      ) : (

        <div>

          <BrandSwiper></BrandSwiper>

{/* card */}

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {product.map((item, index) => (
            <div key={index} className="glass bg-black text-white shadow-lg rounded-lg overflow-hidden my-20">
              {/* Product Image */}
              <img
                src={item.photo}
                className="w-full h-48 object-cover object-center"
              />

              <div className="p-6 ">
                <p className="text-2xl font-bold my-2"> Name: {item.name}</p>
                <p className="text-xl font-semibold">Type: {item.type}</p>
                <p className="text-xl font-semibold my-4">Price: ${item.price}</p>
                <p className="text-yellow-400"> <span className="text-xl font-bold">Description:</span> {item.description}</p>
                <p className="text-xl  font-semibold my-2">Rating: {item.rating} /10</p>
              </div>

              <div className="relative bottom-2 left-4   flex  gap-6">

                <Link to={`/details/id/${item._id}`}>
                <button className="btn  bg-purple-700 text-white">Details</button>
                </Link>

                <Link to={`/updateproduct/id/${item._id}`}>
                <button className="btn  bg-purple-800 text-white">Update</button>
                </Link>
               
               
              </div>
            </div>
          ))}
        </div>
        </div>
       
        
      )}
    </div>
  );
};

export default BrandProduct;
