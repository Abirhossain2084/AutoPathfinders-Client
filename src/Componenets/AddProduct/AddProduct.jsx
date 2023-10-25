import Swal from "sweetalert2";


const AddCoffee = () => {

    const handleAddCoffee = (event) => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const photo = form.photo.value; // Corrected field name to lowercase "photo"

        const newProduct = { name, type,price, description,  rating, photo };

        console.log(newProduct);


        //send data to server


        fetch('http://localhost:5000/product',{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(newProduct)
        })
        .then(res => res.json())
        .then(data=>{
            console.log(data);

            if(data.insertedId){
                Swal.fire({
                    title: 'Added!',
                    text: 'Product has been added',
                    icon: 'success',
                    confirmButtonText: 'Okay!'
                  })
            }
        })

    };

    return (
        <div
  className="bg-transparent glass my-20 p-6 h-[600px] rounded-lg shadow-md container mx-auto"
  style={{
    backgroundImage: 'url("https://i.ibb.co/8jVKX3s/alexander-grey-62vi3-TG5-EDg-unsplash.jpg")', // Replace with the path to your image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
            <h1 className="text-4xl font-extrabold text-purple-900 text-center mb-4">Add Product</h1>
            <form 
            onSubmit={handleAddCoffee}
            className="space-y-4 p-10">
                {/* 1st Section */}
                <div className="md:flex md:space-x-4">
                    <div className="w-full md:w-1/2">
                        <div className="form-control">
                            <label htmlFor="name" className="label">
                                <span className="label-text text-black">Product Name</span>
                            </label>
                            <input type="text" id="name" name="name" placeholder="Product Name" className="input input-bordered w-full" />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="form-control">
                            <label htmlFor="quantity" className="label">
                                <span className="label-text text-black">Type</span>
                            </label>
                            <input type="text" id="type" name="type" placeholder="Type" className="input input-bordered w-full" />
                        </div>
                    </div>
                </div>

                {/* 2nd Section */}
                <div className="md:flex md:space-x-4">
                    <div className="w-full md:w-1/2">
                        <div className="form-control">
                            <label htmlFor="suplier" className="label">
                                <span className="label-text text-black">Price</span>
                            </label>
                            <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="form-control">
                            <label htmlFor="taste" className="label">
                                <span className="label-text text-black">Short Description</span>
                            </label>
                            <input type="text" id="taste" name="description" placeholder="Description" className="input input-bordered w-full" />
                        </div>
                    </div>
                </div>

                {/* 3rd Section */}
                <div className="md:flex md:space-x-4">
                    <div className="w-full md:w-1/2">
                        <div className="form-control">
                            <label htmlFor="category" className="label">
                                <span className="label-text text-black">Rating</span>
                            </label>
                            <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full" />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="form-control">
                            <label htmlFor="photo" className="label">
                                <span className="label-text text-black">Photo</span>
                            </label>
                            <input type="text" id="photo" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                        </div>
                    </div>
                </div>

             


                {/* Add Button */}
                <div className="text-center">
                    <button type="submit" className="btn bg-purple-800 hover:bg-purple-700 text-white py-2 px-4 rounded-md">Add Product</button>
                </div>
            </form>
        </div>
    );
};

export default AddCoffee;
