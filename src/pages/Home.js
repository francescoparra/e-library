import React, { useState } from "react";
import Searchbar from "../components/Searchbar";
import axios from "axios";
import Advice from "../components/Advice";
import Loading from "../components/Loading";
import Booklist from "../components/Booklist";
import '../style/components/books.scss'

export default function Home() {
  let [book, setBook] = useState("");
  let [result, setResult] = useState([]);
  const [advice, setAdvice] = useState(true);
  const [loading, setLoading] = useState(false);

  function handleChange(event) {
    book = event.target.value;
    setBook(book);
    if (book !== "") {
      setAdvice(false);
      searchAxios();
    } else {
      setAdvice(true);
    }
  }

  function searchAxios() {
    setAdvice(false);
    setLoading(true);
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${book}`)
      .then((data) => {
        setResult(data.data.items);
        setLoading(false);
      });
  }

  function renderPage() {
    if (advice) {
      return <Advice />;
    } else if (loading) {
      return <Loading />;
    } else if (result === undefined) {
      return <h1>Book not found</h1>;
    } else {
      return <Booklist result={result} />;
    }
  }

  return (
    <section>
      <Searchbar handleChange={handleChange} />
        {renderPage()}
    </section>
  );
  
}
