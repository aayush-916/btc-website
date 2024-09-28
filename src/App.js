
import Nav from "./Nav";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";
import { FaShieldAlt, FaAward, FaUsers, FaLifeRing } from "react-icons/fa";

//npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
function App() {
  return (
    <>
      <Nav />
      {/* Slicer image */}
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        {/* Carousel Indicators */}
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        {/* Carousel Inner */}
        <div className="carousel-inner">
          {/* First Slide */}
          <div className="carousel-item active" data-bs-interval="10000">
            <img
              src="/image/sl-0.jpg"
              className="d-block img_size"
              alt="First slide"
            />
          </div>

          {/* Second Slide */}
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src="/image/sl-2.jpg"
              className="d-block img_size"
              alt="Second slide"
            />
          </div>

          {/* Third Slide */}
          <div className="carousel-item">
            <img
              src="/image/sl-4.webp"
              className="d-block img_size"
              alt="Third slide"
            />
          </div>
        </div>

        {/* Previous Control */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>

        {/* Next Control */}
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>><>>>>>>>>>>>>>>>>>>>>>>>>>> */}

      <div className="tw-bg-[#353535] tw-py-10">
        <h3 id="product" className="tw-text-center tw-text-3xl tw-font-bold tw-mb-6 tw-text-white">
          <span className="tw-text-transparent tw-bg-clip-text tw-bg-gradient-to-r tw-from-purple-400 tw-to-pink-600">
            Our
          </span>{" "}
          Products
        </h3>
        <p className="tw-text-center tw-text-lg tw-text-gray-300 tw-mb-10">
          Premium-Quality Full HD 1080p CCTV Security Cameras Video Surveillance
          System with Night Vision At Affordable Price
        </p>

        <div className="container text-center mt-4">
          <div className="row">
            {/* Card 1 */}
            <div className="col-lg-4 col-md-6 tw-mb-4">
              <div className="card tw-transition-all tw-duration-300 hover:tw-scale-105">
                <img
                  src="/image/Day-night.jpg"
                  className="card-img-top size"
                  alt="Day/Night CCTV Camera"
                />
                <div className="card-body">
                  <p className="card-text">Day/Night CCTV Camera</p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-lg-4 col-md-6 tw-mb-4">
              <div className="card tw-transition-all tw-duration-300 hover:tw-scale-105">
                <img
                  src="/image/zoom-camera.jpg"
                  className="card-img-top size"
                  alt="Extra Zoom Camera"
                />
                <div className="card-body">
                  <p className="card-text">Extra Zoom Camera</p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-lg-4 col-md-6 tw-mb-4">
              <div className="card tw-transition-all tw-duration-300 hover:tw-scale-105">
                <img
                  src="/image/wireless.webp"
                  className="card-img-top size"
                  alt="Wireless CCTV Cameras"
                />
                <div className="card-body">
                  <p className="card-text">Wireless CCTV Cameras</p>
                </div>
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="row">
            {/* Card 4 */}
            <div className="col-lg-4 col-md-6 tw-mb-4">
              <div className="card tw-transition-all tw-duration-300 hover:tw-scale-105">
                <img
                  src="/image/IPCamera.jpg"
                  className="card-img-top size"
                  alt="Network/IP CCTV Cameras"
                />
                <div className="card-body">
                  <p className="card-text">Network/IP CCTV Cameras</p>
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="col-lg-4 col-md-6 tw-mb-4">
              <div className="card tw-transition-all tw-duration-300 hover:tw-scale-105">
                <img
                  src="/image/night-vision.jpg"
                  className="card-img-top size"
                  alt="Night Vision CCTV Camera"
                />
                <div className="card-body">
                  <p className="card-text">Night Vision CCTV Camera</p>
                </div>
              </div>
            </div>

            {/* Card 6 */}
            <div className="col-lg-4 col-md-6 tw-mb-4">
              <div className="card tw-transition-all tw-duration-300 hover:tw-scale-105">
                <img
                  src="/image/full-hd.webp"
                  className="card-img-top size"
                  alt="High Definition (HD) CCTV Camera"
                />
                <div className="card-body">
                  <p className="card-text">High Definition (HD) CCTV Camera</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

      <section className="tw-bg-gray-100 tw-py-12 tw-text-center">
        <h2 className="tw-text-4xl tw-font-bold tw-text-violet-800 tw-mb-8">
          Why Choose Us
        </h2>
        <p className="tw-text-lg tw-mb-12 tw-max-w-2xl tw-mx-auto">
          Our CCTV surveillance camera systems are trusted by more than 100
          businesses, universities, government facilities, and residential
          customers. Enjoy superior quality cameras, a 2-year warranty, and
          unlimited support from the industry’s #1 tech support team.
        </p>

        <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-8">
          <div className="tw-bg-white tw-rounded-lg tw-py-8 tw-shadow-md tw-transition-transform tw-duration-300 hover:tw-scale-105">
            <FaShieldAlt className="tw-text-5xl tw-text-blue-600 tw-mb-4 tw-mx-auto" />
            <h3 className="tw-text-2xl tw-font-bold">Top-Quality Security</h3>
            <p className="tw-text-gray-700 tw-mt-2">
              Industry-leading CCTV cameras designed for durability and clarity.
            </p>
          </div>

          <div className="tw-bg-white tw-rounded-lg tw-py-8 tw-shadow-md tw-transition-transform tw-duration-300 hover:tw-scale-105">
            <FaAward className="tw-text-5xl tw-text-yellow-500 tw-mb-4 tw-mx-auto" />
            <h3 className="tw-text-2xl tw-font-bold">2-Year Warranty</h3>
            <p className="tw-text-gray-700 tw-mt-2">
              We offer a no-questions-asked 2-year warranty on all products.
            </p>
          </div>

          <div className="tw-bg-white tw-rounded-lg tw-py-8 tw-shadow-md tw-transition-transform tw-duration-300 hover:tw-scale-105">
            <FaUsers className="tw-text-5xl tw-text-green-500 tw-mb-4 tw-mx-auto" />
            <h3 className="tw-text-2xl tw-font-bold">
              Trusted by 100+ Clients
            </h3>
            <p className="tw-text-gray-700 tw-mt-2">
              Our CCTV systems are trusted by businesses, universities, and
              homes.
            </p>
          </div>

          <div className="tw-bg-white tw-rounded-lg tw-py-8 tw-shadow-md tw-transition-transform tw-duration-300 hover:tw-scale-105">
            <FaLifeRing className="tw-text-5xl tw-text-red-600 tw-mb-4 tw-mx-auto" />
            <h3 className="tw-text-2xl tw-font-bold">24/7 Support</h3>
            <p className="tw-text-gray-700 tw-mt-2">
              Get unlimited tech support from our highly-trained experts
              anytime.
            </p>
          </div>
        </div>
      </section>

      {/* >>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */}

      <div  className="tw-bg-gray-100 tw-py-12 tw-px-4">
        <h2 id="service" className="tw-text-4xl tw-text-center tw-font-bold tw-mb-8 tw-text-gray-800">
          Our Services
        </h2>
        <p className="tw-text-center tw-mb-12 tw-text-gray-600">
          We offer a complete range of CCTV solutions, from installation to
          repair, ensuring your security is always in top shape.
        </p>

        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-6 tw-max-w-6xl tw-mx-auto">
          <div className="tw-bg-white tw-shadow-lg tw-rounded-lg tw-overflow-hidden tw-transition-transform tw-transform hover:tw-scale-105">
            <img
              src="/image/installation.jpeg"
              alt="CCTV Installation"
              className="tw-w-full tw-h-48 tw-object-cover"
            />
            <div className="tw-p-6">
              <h3 className="tw-text-xl tw-font-semibold tw-text-gray-800">
                CCTV Camera Installation
              </h3>
              <p className="tw-text-gray-600 tw-mt-2">
                Professional installation of CCTV systems to ensure maximum
                coverage and security.
              </p>
            </div>
          </div>

          <div className="tw-bg-white tw-shadow-lg tw-rounded-lg tw-overflow-hidden tw-transition-transform tw-transform hover:tw-scale-105">
            <img
              src="/image/maintenance.jpg"
              alt="CCTV Maintenance"
              className="tw-w-full tw-h-48 tw-object-cover"
            />
            <div className="tw-p-6">
              <h3 className="tw-text-xl tw-font-semibold tw-text-gray-800">
                CCTV Camera Maintenance
              </h3>
              <p className="tw-text-gray-600 tw-mt-2">
                Routine maintenance services to keep your security systems in
                top condition.
              </p>
            </div>
          </div>

          <div className="tw-bg-white tw-shadow-lg tw-rounded-lg tw-overflow-hidden tw-transition-transform tw-transform hover:tw-scale-105">
            <img
              src="/image/monitoring.jpeg"
              alt="CCTV Monitoring"
              className="tw-w-full tw-h-48 tw-object-cover"
            />
            <div className="tw-p-6">
              <h3 className="tw-text-xl tw-font-semibold tw-text-gray-800">
                CCTV Camera Monitoring
              </h3>
              <p className="tw-text-gray-600 tw-mt-2">
                24/7 CCTV monitoring to ensure that your property is always safe
                and secure.
              </p>
            </div>
          </div>

          <div className="tw-bg-white tw-shadow-lg tw-rounded-lg tw-overflow-hidden tw-transition-transform tw-transform hover:tw-scale-105">
            <img
              src="/image/repair.jpg"
              alt="CCTV Repair"
              className="tw-w-full tw-h-48 tw-object-cover"
            />
            <div className="tw-p-6">
              <h3 className="tw-text-xl tw-font-semibold tw-text-gray-800">
                CCTV Camera Repair
              </h3>
              <p className="tw-text-gray-600 tw-mt-2">
                Fast and reliable repair services to fix any issues with your
                CCTV system.
              </p>
            </div>
          </div>
        </div>
      </div>

  {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
  <div id="about" className="tw-bg-white tw-py-16 tw-px-4">
  <h2 className="tw-text-4xl tw-text-center tw-font-bold tw-mb-8 tw-text-gray-800">
    Why Our Clients Love <span className="tw-text-violet-800 tw-font-extrabold tw-font-mono tw-italic">Balaji Trading Company</span>
  </h2>
  <p className="tw-text-center tw-text-gray-600 tw-mb-12">
    Trusted by more than 100 businesses,Schools, universities, Restaurant , and residential customers. Here’s what they have to say about us.
  </p>
  
  <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-8 tw-max-w-6xl tw-mx-auto">
    <div className="tw-bg-gray-100 tw-shadow-lg tw-rounded-lg tw-overflow-hidden tw-transition-transform tw-transform hover:tw-scale-105">
      <div className="tw-p-6">
        <blockquote className="tw-text-gray-600">
          "The team at Balaji Trading Company installed our CCTV system seamlessly. The quality of the cameras is top-notch, and their support is always there when needed."
        </blockquote>
        <p className="tw-mt-4 tw-font-bold tw-text-gray-800">- Rishabh, Restaurant Owner</p>
      </div>
    </div>

    <div className="tw-bg-gray-100 tw-shadow-lg tw-rounded-lg tw-overflow-hidden tw-transition-transform tw-transform hover:tw-scale-105">
      <div className="tw-p-6">
        <blockquote className="tw-text-gray-600">
          "Their maintenance services are excellent! I’ve never had an issue with my system, and the team at Balaji is always on time for routine checkups."
        </blockquote>
        <p className="tw-mt-4 tw-font-bold tw-text-gray-800">- Rahul., Schools Principal</p>
      </div>
    </div>

    <div className="tw-bg-gray-100 tw-shadow-lg tw-rounded-lg tw-overflow-hidden tw-transition-transform tw-transform hover:tw-scale-105">
      <div className="tw-p-6">
        <blockquote className="tw-text-gray-600">
          "Balaji Trading Company provided an exceptional solution for our residential security. Their cameras and monitoring services give us peace of mind."
        </blockquote>
        <p className="tw-mt-4 tw-font-bold tw-text-gray-800">- Rohit, Homeowner</p>
      </div>
    </div>
  </div>
</div>

<div className="tw-fixed tw-bottom-4 tw-right-4 tw-flex tw-justify-end tw-items-center">
  <a
    href="https://wa.me/+918877039718"
    target="_blank"
    rel="noopener noreferrer"
    className="tw-bg-green-500 tw-p-2 tw-rounded-full tw-shadow-lg tw-transition-transform tw-transform hover:tw-scale-110"
  >
    <img
      src="/image/whatsapp-icon.webp"
      alt="WhatsApp"
      className="tw-w-10 tw-h-10"
    />
  </a>
</div>
    
{/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

<footer className="tw-bg-[#15161d] tw-text-white tw-pt-8 tw-pb-4">
  <div className="container tw-max-w-screen-xl tw-mx-auto tw-px-4 md:tw-px-8">
    {/* Company Name */}
    <div className="tw-text-center tw-mb-6">
      <h2
        className="tw-text-3xl tw-font-bold tw-text-[#f5ba31] tw-mb-2"
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        Balaji Trading Company
      </h2>
      <p className="tw-text-gray-300">
        Trusted CCTV solutions for businesses and homes.
      </p>
    </div>

    {/* Partner Brands Section */}
    <div className="tw-text-center tw-mb-6">
      <h3 className="tw-text-2xl tw-font-semibold tw-mb-4">Our Partner Brands</h3>
      <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-3 tw-gap-8 tw-justify-items-center">
        <div>
          <img
            src="/image/hikvision.png"
            alt="Hikvision"
            className="tw-w-24 tw-h-24 tw-transition hover:tw-scale-105"
          />
          <p className="tw-mt-2 tw-font-medium tw-text-gray-300">HIK VISION</p>
        </div>
        <div>
          <img
            src="/image/dahua.webp"
            alt="Dahua"
            className="tw-w-24 tw-h-24 tw-transition hover:tw-scale-105"
          />
          <p className="tw-mt-2 tw-font-medium tw-text-gray-300">Dahua Technology</p>
        </div>
        <div>
          <img
            src="/image/cpplus.jpeg"
            alt="CP Plus"
            className="tw-w-24 tw-h-24 tw-transition hover:tw-scale-105"
          />
          <p className="tw-mt-2 tw-font-medium tw-text-gray-300">CP Plus</p>
        </div>
      </div>
    </div>

    {/* Contact Info Section */}
    <div id="contact" className="tw-text-center tw-mb-6">
      <h3 className="tw-text-2xl tw-font-semibold tw-mb-4">Contact Us</h3>
      <p className="tw-text-gray-300">
        Contact Number:{" "}
        <a href="tel:8877039718" className="tw-text-[#f5ba31]">
          +91 8877039718
        </a>
      </p>
      <p className="tw-text-gray-300">
        Email:{" "}
        <a href="mailto:balalitrading@gmail.com" className="tw-text-[#f5ba31]">
          balalitrading@gmail.com
        </a>
      </p>
      <p className="tw-text-gray-300">
        Address: Balaji Trading Company, 841417, Mashrak, Bihar
      </p>
    </div>

    {/* Footer Bottom */}
    <div className="tw-text-center tw-pt-4 tw-border-t tw-border-gray-600 tw-mt-6">
      <p className="tw-text-gray-400">
        &copy; 2024 Balaji Trading Company. All rights reserved.
      </p>
    </div>
  </div>
</footer>



    </>
  );
}

export default App;
