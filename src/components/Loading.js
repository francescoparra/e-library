import React from 'react'
import loadingGif from '../images/loading.gif'

export default function Loading() {
    return (
        <div className='loading'>
            <h4>Books loading...</h4>
            <img src={loadingGif} alt='Loading' />
        </div>
    )
}