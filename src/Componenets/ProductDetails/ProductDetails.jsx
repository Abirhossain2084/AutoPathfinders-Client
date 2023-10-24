import { useLoaderData } from "react-router-dom";


const ProductDetails = () => {

    const product =useLoaderData()
    const {_id, name, type,price, description,  rating, photo } = product;
    return (
        <div>
            <h2>details of :{name}</h2>
        </div>
    );
};

export default ProductDetails;