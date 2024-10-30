import React from "react";
import blogimg1 from "../images/blogimg1.jpg";
import blogimg2 from "../images/blogimg2.jpg"; 
import blogimg3 from "../images/blogimg3.jpg"; 
export default function Blog() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card" style={{ width: "100%" }}>
            <img className="card-img-top" src={blogimg1} alt="Card" />
            <div className="card-body">
              <h5 className="card-title">Gadgets</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="/" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card" style={{ width: "100%" }}>
            <img className="card-img-top" src={blogimg2} alt="Card" />
            <div className="card-body">
              <h5 className="card-title">Future of Ai</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="/" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card" style={{ width: "100%" }}>
            <img className="card-img-top" src={blogimg3} alt="Card" />
            <div className="card-body">
              <h5 className="card-title">Tech Innovations</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="/" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
