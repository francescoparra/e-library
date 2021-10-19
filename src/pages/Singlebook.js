import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import axios from 'axios';
import { Link } from 'react-router-dom';


export default function Singlebook() {

    const { key } = useParams()
    const [singleBook, setSingleBook] = useState([])


    useEffect(() => {
        const fetchBook = async () => {
            try {
                const result = await axios.get(
                    'https://www.googleapis.com/books/v1/volumes/' + key
                );
                setSingleBook(result.data);
            }
            catch (error) { }
        };
        fetchBook();
    }, [key]);

    console.log(singleBook);

    const authors = (authors) => {
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
            <section className='singleBook-section'>
                <div className='singleBook-container'>
                    <div className='singleBook-img'>
                        <img src={singleBook?.volumeInfo?.imageLinks?.thumbnail } alt={singleBook?.volumeInfo?.title} />
                    </div>
                    <div className='singleBook-info'>
                        <h2>{singleBook?.volumeInfo?.title}</h2>
                        <h3>By: {authors(singleBook?.volumeInfo?.authors)}</h3>
                        <h4>Category: {singleBook?.volumeInfo?.categories[0]}</h4>
                        <p>Description: <br/>{singleBook?.volumeInfo?.description}</p>
                        <p>No. of pages: {singleBook?.volumeInfo?.pageCount}</p>
                    <Link to='/'>
                        <button className='home-btn'>Back Home</button>
                    </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
