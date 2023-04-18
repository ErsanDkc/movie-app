import React from "react";
import image from "../image/image.jpg";
import { useNavigate } from "react-router-dom";

function MovieCard({ data }) {
  const navigate = useNavigate();

  const handleDetail = (id) => {
    navigate(`/${id}`);
  };
  return (
    <div
      style={{ width: "80%", margin: "0 auto" }}
      className="d-flex flex-row flex-wrap justify-content-center gap-3"
    >
      {data.map((item) => (
        <div key={item.id} className="card" style={{ width: "18rem" }}>
          <div style={{ width: "285px", height: "400px" }} className="mb-3">
            <img
              src={
                item.poster_path
                  ? `https://image.tmdb.org/t/p/original${item.poster_path}`
                  : image
              }
              className="card-img-top object-fit-contain"
              alt={item.title}
            />
          </div>
          <div className="card-body mt-2">
            <h5 className="card-title mb-2">{item.title}</h5>
            <p className="card-text">{item.overview.substring(0, 100)}...</p>
          </div>
          <button
            onClick={() => handleDetail(item.id)}
            className="btn btn-primary"
          >
            Go to detail
          </button>
        </div>
      ))}
    </div>
  );
}

export default MovieCard;
