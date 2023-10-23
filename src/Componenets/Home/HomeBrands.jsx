import { Link } from "react-router-dom";



const HomeBrands = ({brand}) => {

    const {name,image} =brand;

    

    return (
        <div>

          <Link to={`product/${name}`}>

            <div
            className="bg-center bg-cover shadow-lg rounded-lg cursor-pointer"
            style={{ backgroundImage: `url(${image})` }}
          
          >
            <div className="h-60"></div>
            <div className="inset-0 bg-black opacity-70 rounded-lg">
              <h2 className="text-white font-bold text-xl h-16">{name}</h2>
            </div>
          </div>
          </Link>
        
        
        
      </div>
    );
};

export default HomeBrands;