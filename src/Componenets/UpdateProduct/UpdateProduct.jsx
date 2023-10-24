import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateProduct = () => {
    const product = useLoaderData();

    const {_id, name, type,price, description,  rating, photo } = product;
 
    
    const handleUpdateCoffee = (event) => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const photo = form.photo.value; // Corrected field name to lowercase "photo"

        const UpdateProduct = { name, type,price, description,  rating, photo };

        console.log(UpdateProduct);


        //send data to server


        fetch(`http://localhost:5000/product/id/${_id}`,{
            method:'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(UpdateProduct)
        })
        .then(res => res.json())
        .then(data=>{
            console.log(data);

            if(data.modifiedCount > 0 ){
                Swal.fire({
                    title: 'Updated!',
                    text: 'Product has been Updated',
                    icon: 'success',
                    confirmButtonText: 'Okay!'
                  })
            }
        })

    };
    return (
        

<div className="bg-transparent glass my-20 p-6 rounded-lg shadow-md container  mx-auto">
<h1 className="text-4xl font-bold text-white text-center mb-4">Update Product </h1>
<h1 className="text-2xl font-bold text-white text-center mb-4">Name :{name} </h1>
<h1 className="text-2xl font-bold text-white text-center mb-4">Type :{type}</h1>
<form 
onSubmit={handleUpdateCoffee}
className="space-y-4 p-10">
    {/* 1st Section */}
    <div className="md:flex md:space-x-4">
        <div className="w-full md:w-1/2">
            <div className="form-control">
                <label htmlFor="name" className="label">
                    <span className="label-text">Product Name</span>
                </label>
                <input type="text" id="name" name="name" defaultValue={name} placeholder="Product Name" className="input input-bordered w-full" />
            </div>
        </div>
        <div className="w-full md:w-1/2">
            <div className="form-control">
                <label htmlFor="quantity" className="label">
                    <span className="label-text">Type</span>
                </label>
                <input type="text" id="type" name="type" defaultValue={type} placeholder="Type" className="input input-bordered w-full" />
            </div>
        </div>
    </div>

    {/* 2nd Section */}
    <div className="md:flex md:space-x-4">
        <div className="w-full md:w-1/2">
            <div className="form-control">
                <label htmlFor="suplier" className="label">
                    <span className="label-text">Price</span>
                </label>
                <input type="text" name="price" defaultValue={price} placeholder="Price" className="input input-bordered w-full" />
            </div>
        </div>
        <div className="w-full md:w-1/2">
            <div className="form-control">
                <label htmlFor="taste" className="label">
                    <span className="label-text">Short Description</span>
                </label>
                <input type="text" id="taste" name="description" defaultValue={description} placeholder="Description" className="input input-bordered w-full" />
            </div>
        </div>
    </div>

    {/* 3rd Section */}
    <div className="md:flex md:space-x-4">
        <div className="w-full md:w-1/2">
            <div className="form-control">
                <label htmlFor="category" className="label">
                    <span className="label-text">Rating</span>
                </label>
                <input type="text" name="rating" defaultValue={rating} placeholder="Rating" className="input input-bordered w-full" />
            </div>
        </div>
        <div className="w-full md:w-1/2">
            <div className="form-control">
                <label htmlFor="photo" className="label">
                    <span className="label-text">Photo</span>
                </label>
                <input type="text" id="photo" name="photo" defaultValue={photo} placeholder="Photo URL" className="input input-bordered w-full" />
            </div>
        </div>
    </div>

 


    {/* Add Button */}
    <div className="text-center">
        <button type="submit" className="btn bg-purple-400 hover:bg-purple-700 text-white py-2 px-4 rounded-md">Update Product</button>
    </div>
</form>
</div>
    );
};

export default UpdateProduct;