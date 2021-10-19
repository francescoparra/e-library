import React from 'react'
import Bookcard from './Bookcard'

export default function Booklist({ result = [] }) {

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
        <>
            <h1 className='list-title'>Books found:</h1>
            {result.map((item, index) => {
                return <Bookcard
                    key={index}
                    id={item.id}
                    image={item?.volumeInfo?.imageLinks?.thumbnail}
                    title={item.volumeInfo.title}
                    authors={authors(item.volumeInfo.authors)}
                />
            })}
        </>
    )
}