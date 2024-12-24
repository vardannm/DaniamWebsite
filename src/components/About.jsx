
function About() {
  const sections = [
    {
      id: 1,
      headline: "Mission",
      image:
        "https://img.freepik.com/free-vector/realistic-neon-lights-background_52683-59889.jpg?semt=ais_hybrid",
      text: "At YourBank, our mission is to empower our customers to achieve financial success. We are dedicated to delivering innovative banking solutions that cater to their unique needs. Through personalized services, expert guidance, and cutting-edge technology, we aim to build strong, lasting relationships with our customers. Our mission is to be their trusted partner, helping them navigate their financial journey and realize their dreams.",
    },
    {
      id: 2,
      headline: "Vision",
      image:
        "https://img.freepik.com/free-vector/neon-design-colorful-background_23-2149084790.jpg",
      text: "Our vision at YourBank is to redefine banking by creating a seamless and personalized experience for our customers. We envision a future where banking is accessible, transparent, and tailored to individual preferences. Through continuous innovation and collaboration, we strive to be at the forefront of the industry, setting new standards for customer-centric banking. Our vision is to be the preferred financial institution, known for our unwavering commitment to excellence, trust, and customer satisfaction.",
    },
  ];
  return (
    <div className="bg-cardGray min-h-screen pt-32">
      <div className="bg-neutral-800 rounded-2xl w-5/6 pb-96 pt-8 pl-8 m-auto relative">
      <img
            src="/images/cardBackground.svg"
            className="absolute top-0 right-0 w-72 h-72 object-cover rounded-lg z-10"
          />
        <div className="bg-cardGray rounded-tl-2xl rounded-bl-2xl rounded-br-2xl w-1/2 h-48 flex flex-col gap-7 p-4 relative z-20">
          <p className="text-2xl text-white">What we are doing</p>
          <p className="text-white font-thin ">
            mckNCFM, Ssamfbejkf.ADNAMS cm.cnNCS.M CNSAMC SAN D.S DNMCBDSNDNS DNS
            NSA DFBFJKEHBFJSND NSM CNSAD NWSWDBJWBDJWB DNS FCNS FEBFJEKNF/d s
            fns fdbjenbfjbjdfn
          </p>
        </div>
        <div className="bg-cardGray rounded-2xl w-1/2  absolute top-8 right-10 z-10 overflow-hidden">
          <img
            src="https://img.freepik.com/free-vector/abstract-neon-lights-background-design_52683-44643.jpg"
            alt="Descriptive Alt Text"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="xl:ml-36 mt-12 md:ml-20 sm:ml-10 ">
        <p className="text-4xl  text-cyan-300 font-light">Mission & Vision</p>
        <p className="text-xl  text-white font-thin w-5/6 pt-4">
          We envision being a leading force in the industry, driven by
          innovation, integrity, and inclusivity, creating a brighter financial
          future for individuals and businesses while maintaining a strong
          commitment to customer satisfaction and community development
        </p>
      </div>
      <div className="container mx-auto w-5/6 py-8">
        {sections.map((section, index) => (
          <div
            key={section.id}
            className={`flex flex-col md:flex-row items-center gap-44 mb-12 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Text Section */}
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-4 text-white">
                {section.headline}
              </h2>
              <p className="text-white font-thin">{section.text}</p>
            </div>
            {/* Image Section */}
            <div className="flex-1">
              <div className="rounded-lg shadow-2xl bg-customGray hover:shadow-indigo-500">
              <img
                src={section.image}
                alt={`Image for ${section.text}`}
                className=" shadow-lg  px-14 pt-14 hover:px-0 hover:pt-0 hover:scale-105 hover:w-full hover:object-cover hover:h-full hover:rounded-2xl transition-all duration-300"
              />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
