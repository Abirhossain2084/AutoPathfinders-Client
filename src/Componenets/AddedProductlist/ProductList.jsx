

const ProductList = ({product}) => {

    const {name, type,price, description,  rating, photo } =product;
    return (
        <div className="card glass">
  <figure><img src={photo} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <h2 className="card-title">${price}</h2>
    <h2 className="card-title">{type}</h2>
    <h2 className="card-title">{rating}</h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary bg-purple-800">Details</button>
      <button className="btn btn-primary bg-purple-800">Update</button>
    </div>
  </div>
</div>
    );
};

export default ProductList;