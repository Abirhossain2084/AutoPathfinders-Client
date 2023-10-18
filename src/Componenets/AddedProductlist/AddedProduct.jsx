import { useLoaderData } from "react-router-dom";
import ProductList from "./ProductList";


const AddedProduct = () => {

    const products = useLoaderData();
    return (
        <div className="container mx-auto my-20">
            

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">

            {
                products.map(product => <ProductList
                key={product._id}

                product={product}
                >

                </ProductList>)
            }
            </div>

        </div>
    );
};

export default AddedProduct;