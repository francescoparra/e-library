import React from "react";
import '../style/components/searchbar.scss'

export default function Searchbar({ handleChange }) {
  return (
    <>
      <section className="search">
        <div className="search-form">
          <div className="form-container">
            <input
              className="search-input"
              type="text"
              placeholder="Search a book"
              onChange={handleChange}
            />
          </div>
        </div>
      </section>
      <div className="line" />
    </>
  );
}
