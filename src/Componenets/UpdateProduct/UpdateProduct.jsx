import { useLoaderData } from "react-router-dom";


const UpdateProduct = () => {
    const product = useLoaderData();
    console.log(product);
    return (
        <div>
            <h2>update here</h2>
        </div>
    );
};

export default UpdateProduct;