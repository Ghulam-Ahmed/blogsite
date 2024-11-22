import React from "react";
import Css from "../App.css";
import Slide1 from "../images/slide3.jpg";
import Slide2 from "../images/slide2.jpg";
import Slide3 from "../images/slide3.jpg";

export default function Carousel() {
  return (
    <div id="carouselExampleFade" class="carousel slide carousel-fade">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={Slide1} class="d-block w-100" alt="technology" />
        </div>
        <div class="carousel-item">
          <img src={Slide2} class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src={Slide3} class="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}
