

const BrandSwiper = () => {
    return (
        <div className="mb-20">
            <div className="carousel w-full rounded-lg">
                <div id="slide1" className="carousel-item   relative w-full ">
                  
                    
                    <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/HdHQs1T/tycho-atsma-68-BBDyys-Bgc-unsplash.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-white  text-5xl font-bold">Find Your favourite car </h1>
                                <p className="mb-5">Choose you car with discount . This seson we are offering you up to 10% discount.</p>
                                <button className="btn btn-primary bg-purple-800">Get Started</button>
                            </div>
                        </div>
                    </div>
                    
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    
                    
                    <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/RbJL51b/markus-spiske-BTKF6-G-O8f-U-unsplash.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-white  text-5xl font-bold">Find Your favourite car </h1>
                                <p className="mb-5">Choose you car with discount . This seson we are offering you up to 10% discount.</p>
                                <button className="btn btn-primary bg-purple-800">Get Started</button>
                            </div>
                        </div>
                    </div>
                    
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>


                <div id="slide3" className="carousel-item relative w-full">

                    <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/12mPr37/anthony-rosset-5r5554u-m-Ho-unsplash.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-white  text-5xl font-bold">Find Your favourite car </h1>
                                <p className="mb-5">Choose you car with discount . This seson we are offering you up to 10% discount.</p>
                                <button className="btn btn-primary bg-purple-800">Get Started</button>
                            </div>
                        </div>
                    </div>


                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>


                {/* 
 */}




            </div>
        </div>
    );
};

export default BrandSwiper;