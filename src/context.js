import React, { Component } from 'react'
import axios from 'axios'


const BookContext = React.createContext()

class BookProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            book: '',
            result: [],
            apiKey: 'AIzaSyC40ZAqP1nx5C_M5D-Olbr-7uAR_masIO0'
        }
    }
    handleSubmit() {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${this.state.book}&key=${this.state.apiKey}`)
    }
    render() {
        return <BookContext.Provider value={{}}>
            {this.props.children}
        </BookContext.Provider>   
    }
}



export {BookProvider, BookContext}
