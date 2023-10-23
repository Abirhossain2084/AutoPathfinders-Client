import { Link } from "react-router-dom";


const ProductList = ({product}) => {

    const {_id,name, type,price, description,  rating, photo } =product;
    return (
        <div className="card glass">
  <figure><img className="h-52 w-full" src={photo} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <h2 className="card-title">${price}</h2>
    <h2 className="card-title">{type}</h2>
    <h2 className="card-title">{rating}</h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary bg-purple-800">Details</button>

      <Link to={`product/${_id}`}>
      <button className="btn btn-primary bg-purple-800">Update</button>
      </Link>
      
    </div>
  </div>
</div>
    );
};

export default ProductList;