import React, { useState } from "react";
import blogData from "../components/blogData"; // Importing the blog data

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const handleReadMore = (index) => {
    setSelectedPost(index);
  };

  const handleBack = () => {
    setSelectedPost(null);
  };

  return (
    <div className="container mt-4">
      {selectedPost === null ? (
        <div className="row">
          {blogData.map((post, index) => (
            <div className="col-md-4 mb-4" key={post.id}>
              <div className="card" style={{ width: "100%" }}>
                <img className="card-img-top" src={post.image} alt="Card" />
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text">{post.summary}</p>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleReadMore(index)}
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <button className="btn btn-secondary mb-3" onClick={handleBack}>
            Back to Blog
          </button>
          <div className="card">
            <img
              className="card-img-top"
              src={blogData[selectedPost].image}
              alt="Card"
            />
            <div className="card-body">
              <h5 className="card-title">{blogData[selectedPost].title}</h5>
              <p className="card-text">{blogData[selectedPost].content}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
