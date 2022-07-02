import React from "react";
import { Link } from "react-router-dom";

export default function Bookcard({ id, image, title, authors }) {
  authors = authors.split(", ")[0];
  title = title.length >= 35 ? title.substring(0, 35) + "..." : title;
  return (
    <div className="col-sm-4">
      <div className="card my-3 mx-3">
        <img
          className="card-img-top book-image"
          src={image === undefined ? "" : image}
          alt={title}
        />
        <div className="card-body text-center card-text-div">
          <h5 className="card-title">{title.replace(authors, "")}</h5>
          <p className="card-text">{authors}</p>
          <Link to={`books/${id}`}>
            <button className="seeMoreBtn">See more</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
