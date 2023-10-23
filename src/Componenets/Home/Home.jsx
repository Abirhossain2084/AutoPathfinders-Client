import  { useEffect, useState } from "react";
import HomeExtra1 from "./HomeExtra1";
import HomeExtra2 from "./HomeExtra2";
import HomeBrands from "./HomeBrands";



const Home = () => {
    const [brands, setBrands] = useState([]);



    useEffect(() => {
        // Fetch data when the component mounts
        fetch('data.json')
            .then((response) => response.json())
            .then((data) => setBrands(data))
            .catch((error) => console.error(error));
    }, []); // Empty dependency array means this effect runs once on mount


    
    return (
        <div>
            {/* banner */}
            <section className="hero h-[700px] relative bg-center rounded-lg" style={{ backgroundImage: 'url("https://i.ibb.co/YkZ0MnQ/olav-tvedt-o-Va-YMg-BMbs-unsplash.jpg")' }}>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
                    <div className="grid hero-content text-center text-white">
                        <h1 className="text-4xl font-extrabold mb-4">Explore the World of Cars</h1>
                        <p className="text-lg mb-6">Your Ultimate Source for Car Enthusiasts</p>
                        <a href="/blog" className="btn bg-purple-950 btn-primary">Read Our Blog</a>
                    </div>
                </div>
            </section>

            {/* brand list */}
            <section className="py-12 bg-gray-100 my-20">
        <div className="container mx-auto">
          <h2 className="text-5xl font-extrabold text-center mb-8">Our Brands</h2>
          <div className="grid p-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brands.map((brand, index) => 
            <HomeBrands key={brand.id}
            
            brand={brand}
            >

            </HomeBrands>
            )}
          </div>
        </div>
      </section>

     
    

            {/* extra  */}

<HomeExtra1></HomeExtra1>
<HomeExtra2></HomeExtra2>






        </div>
    );
};

export default Home;
