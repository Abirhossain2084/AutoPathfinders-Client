

const HomeExtra1 = () => {

    const backgroundImageUrl = "https://i.ibb.co/PwMjHZM/chris-liverani-HUJDz6-CJEa-M-unsplash.jpg"; 

  const sectionStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
  };
    return (
      

<section className="py-16 my-32 bg-contact bg-cover bg-opacity-60 rounded-xl" style={sectionStyle}>
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-gray-800 text-center bg-white bg-opacity-40 p-8 rounded-lg shadow-lg">
          <h2 className="text-4xl text-white font-bold mb-8">Contact Us</h2>
          <p className="text-lg font-semibold mb-6">
            Have a question, feedback, or just want to say hello? Feel free to get in touch with us using the contact form below. We'll get back to you as soon as possible!
          </p>
          <form className="mb-8">
            <div className="mb-6">
              <label htmlFor="name" className="text-white text-2xl font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="text-white text-2xl font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="text-white text-2xl font-bold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-purple-800 text-white font-medium py-2 px-6 rounded-md hover:bg-blue-600 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
            
       
    );
};

export default HomeExtra1;