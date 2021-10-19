import React from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
    return (
        <div>
            <section className='error-section'>
                <div className='error-banner'>
                    <h1>404 Error</h1>
                    <div />
                    <p>Page not found</p>
                    <Link to='/' className='error-btn'>
                        Back Home
                    </Link>
                </div>
            </section>
        </div>
    )
}
