import React from 'react'
import { Link } from 'react-router-dom'

export default function Bookcard({ id, image, title, authors }) {
    return (
        <div>
            <section className='book-section' >
                <div className='book-container'>
                    <div className='book-image'>
                        <img src={image === undefined ? '' : image} alt={title} />
                    </div>
                    <div>
                        <h4>{title}</h4>
                        <h5>{authors} </h5>
                    </div>
                    <Link to={`books/${id}`}>
                        <button className='link-btn'>
                            See more
                        </button>
                    </Link>
                </div>
            </section>
        </div>
    )
}

