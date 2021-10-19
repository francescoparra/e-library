import React from 'react'
import { FaSearch } from 'react-icons/fa'


export default function Searchbar({handleChange, handleSubmit}) {

    return (
        <>
            <section className='search'>
                <form className='search-form' onSubmit={handleSubmit}>
                    <div className='form-container'>
                        <input className='search-input' type='text'
                            placeholder='Search a book'
                            onChange={handleChange}
                        />
                        <button type='button' className='search-btn' onClick={handleSubmit}>
                            <FaSearch />
                        </button>
                    </div>
                </form>
            </section>
            <div className='line' />       
        </>
    )
}


