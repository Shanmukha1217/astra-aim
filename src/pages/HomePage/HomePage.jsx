import { useEffect, useRef, useState } from "react";
import HomeHero from "../../components/HomeHero/HomeHero";
import CardImg from "../../assets/delivery-box1.jpg";
import astraAimImg from "../../assets/about-image.png";
import ContactUs from "../ContactUs/ContactUs.jsx";
import "./HomePage.css";
import { Link, useLocation } from "react-router-dom";
import Loading from "../../components/Loading/Loading.jsx";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const nextSectionRef = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="homepage">
      {isLoading && <Loading />}
      <HomeHero nextSectionRef={nextSectionRef} />
      <div ref={nextSectionRef} className="next-section first-section">
        <h1 className="section-title">Our Product</h1>
        <div className="info">
          <div className="first-section-left">
            <h1>RushRabbit</h1>
            <h2 className="desc">
              Time is precious,
              <br />
              Spend it on what matters! <br /> Let us handle delivery!
            </h2>
            <button className="btn secondary-btn">
              <Link to="/product" className="link">
                Dive in
              </Link>
            </button>
          </div>
          <img src={CardImg} alt="A parcel" />
        </div>
      </div>

      <div className="second-section">
        <img src={astraAimImg} alt="" />
        <div className="info">
          <h2 className="about-title">ABOUT US</h2>
          <h1 className="about-tagline">
            Directing Dreams, Crafting Destinies
          </h1>
          <p className="about-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi,
            sed, voluptas corporis deserunt quas voluptatem tenetur ratione nemo
            non perferendis praesentium voluptate placeat hic natus obcaecati
            architecto, consectetur ad soluta?
          </p>
        </div>
        <div className="inner-container">
          <div className="btns-container">
            <button>About</button>
            <button>Mission</button>
            <button>Vision</button>
          </div>
          <h2>Lorem Ipsum</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
            assumenda magni nesciunt illo fugiat placeat consectetur velit
            inventore iste officia. Nesciunt nemo ducimus adipisci magnam
            quaerat enim voluptatem vitae repellendus!
          </p>
          <button>Read more</button>
        </div>
      </div>
      <ContactUs />
    </div>
  );
};

export default HomePage;
