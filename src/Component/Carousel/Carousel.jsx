import React from "react";
import logo1 from "../../Assets/img/logo1.png";
import logo2 from "../../Assets/img/logo2.png";
import logo3 from "../../Assets/img/logo3.png";
import logo4 from "../../Assets/img/logo4.png";

export default function Carousel() {
  return (
    <section className="carousel__silder">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to={0}
            className="active"
          />
          <li data-target="#carouselExampleIndicators" data-slide-to={1} />
          {/* <li data-target="#carouselExampleIndicators" data-slide-to={2} /> */}
          <li data-target="#carouselExampleIndicators" data-slide-to={3} />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active ">
            <img className="d-block w-100" src={logo1} />
          </div>
          <div className="carousel-item ">
            <img className="d-block w-100" src={logo2} />
          </div>
          {/* <div className="carousel-item ">
            <img className="d-block w-100" src={logo3} />
          </div> */}
          <div className="carousel-item ">
            <img className="d-block w-100" src={logo4} />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    </section>
  );
}
