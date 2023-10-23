import  { useEffect, useState } from "react";

const HomeExtra2 = () => {

    const [cars, setCars] = useState([]);

    useEffect(() => {
        // Fetch data when the component mounts
        fetch('gallery.json')
            .then((response) => response.json())
            .then((data) => setCars(data))
            .catch((error) => console.error(error));
    }, []); // Empty dependency array means this effect runs once on mount

    return (
        <div className="container mx-auto py-12">
        <h2 className="text-3xl font-extrabold text-center mb-8">Car Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {cars.map((car, index) => (
                <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <img
                        src={car.image}
                        alt={`Car ${index + 1}`}
                        className="w-full h-48 object-cover object-center"
                    />
                </div>
            ))}
        </div>
    </div>
    );
};

export default HomeExtra2;