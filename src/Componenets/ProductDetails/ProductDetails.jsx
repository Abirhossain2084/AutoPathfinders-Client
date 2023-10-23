import { useLoaderData } from "react-router-dom";


const ProductDetails = () => {

    const product =useLoaderData()
    console.log(product);
    return (
        <div>
            <h2>details of :{product.name}</h2>
        </div>
    );
};

export default ProductDetails;