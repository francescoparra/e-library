import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";
import "../style/pages/singlebook.scss";

export default function Singlebook() {
  const { key } = useParams();
  const [singleBook, setSingleBook] = useState([]);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const result = await axios.get(
          "https://www.googleapis.com/books/v1/volumes/" + key
        );
        setSingleBook(result.data);
      } catch (error) {}
    };
    fetchBook();
  }, [key]);

  const author = (authors) => {
    if (!authors) return " Author not available ";
    if (authors.length <= 2) {
      authors = authors.join(" and ");
    } else if (authors.length > 2) {
      authors = authors.join(", ");
    }
    return authors;
  };

  return (
    <div>
      <section className="singleBook-section container">
        <div className="singleBook-container row">
          <div className="singleBook-img col-sm-6 align-top">
              <img
                className="img-fluid rounded"
                src={
                  singleBook?.volumeInfo?.imageLinks?.thumbnail === undefined
                    ? "No image"
                    : singleBook?.volumeInfo?.imageLinks?.thumbnail
                }
                alt={singleBook?.volumeInfo?.title}
              />
          </div>
          <div className="singleBook-info col-sm-6">
          <h2>
                {singleBook?.volumeInfo?.title === undefined
                  ? "No title found"
                  : singleBook?.volumeInfo?.title}
              </h2>
              <h3>By: {author(singleBook?.volumeInfo?.authors)}</h3>
              <h4>
                Category:{" "}
                {singleBook?.volumeInfo?.categories === undefined
                  ? "No categories found"
                  : singleBook?.volumeInfo?.categories[0]}
              </h4>
            <p>
              Description: <br />
              {singleBook?.volumeInfo?.description === undefined
                ? "No description found"
                : singleBook?.volumeInfo?.description}
            </p>
            <p>
              No. of pages:{" "}
              {singleBook?.volumeInfo?.pageCount === undefined
                ? "Number of pages not found"
                : singleBook?.volumeInfo?.pageCount}
            </p>
            <Link to="/">
              <button className="home-btn">Back Home</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
