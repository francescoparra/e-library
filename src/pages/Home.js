import React, { useState } from 'react'
import Searchbar from '../components/Searchbar'
import axios from 'axios'
import Advice from '../components/Advice'
import Loading from '../components/Loading'
import Booklist from '../components/Booklist'

export default function Home() {

    const [book, setBook] = useState('')
    const [result, setResult] = useState([])
    const [advice, setAdvice] = useState(true)
    const [loading, setLoading] = useState(false)

    function handleChange(event) {
        const book = event.target.value;
        setBook(book)
        setAdvice(true)
    }

    function handleSubmit(event) {
        setAdvice(false)
        setLoading(true)
        event.preventDefault();
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${book}`)
            .then(data => {
                setResult(data.data.items);
                setLoading(false)
            })
    }
    console.log(result);

    return (
        <div>
            <Searchbar
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
            {advice ? <Advice /> :
                loading ? <Loading /> :
                    result === undefined ?
                        <h1>Book not found</h1>
                        : <Booklist result={result} />
            }
        </div>
    )
}





