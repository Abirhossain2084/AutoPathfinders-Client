import { Link, useLoaderData } from "react-router-dom";

const BrandProduct = () => {

  const product = useLoaderData();
  console.log(product);

  return (
    <div>
      {product.length === 0 ? (

        <div className="my-60">
            <p>There is no product</p>
        </div>
        
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {product.map((item, index) => (
            <div key={index} className="glass text-white shadow-lg rounded-lg overflow-hidden">
              {/* Product Image */}
              <img
                src={item.photo}
                className="w-full h-48 object-cover object-center"
              />

              <div className="p-6">
                <p className="">Brand Name: {item.name}</p>
                <p className="">Type: {item.type}</p>
                <p className="">Price: ${item.price}</p>
                <p className="">Description: {item.description}</p>
                <p className="">Rating: {item.rating}</p>
              </div>

              <div className="flex justify-between p-6">

                <Link to={`/details/${item._id}`}>
                <button className="btn btn-secondary">Details</button>
                </Link>

                <Link to={`/updateproduct/${item._id}`}>
                <button className="btn btn-primary">Update</button>
                </Link>
               
               
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BrandProduct;
