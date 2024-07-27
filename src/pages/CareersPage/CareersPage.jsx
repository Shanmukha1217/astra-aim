import { useEffect, useRef, useState } from "react";
import "./CareersPage.css";
import JobCard from "../../components/JobCard/JobCard";
import Carousel from "../../components/Carousel/Carousel";
import hotImage from "../../assets/hot.png";
import careersBanner from "../../assets/careers-banner-final.jpg";
import careers from "../../careers";
import { useLocation } from "react-router-dom";
import Loading from "../../components/Loading/Loading";

const CareersPage = () => {
  const allJobsRef = useRef(null);
  const { pathname } = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      {isLoading && <Loading />}
      <img className="hero" src={careersBanner} alt="careers banner image" />
      <h1 className="hot-jobs">
        <img className="" src={hotImage} alt="" /> Hot Jobs
      </h1>
      <Carousel careers={careers} />
      <h1 style={{ textAlign: "center", margin: "30px 0" }}>All Jobs</h1>
      <div className="alljobs-container" ref={allJobsRef}>
        <JobCard allJobsRef={allJobsRef} />
      </div>
    </div>
  );
};

export default CareersPage;
