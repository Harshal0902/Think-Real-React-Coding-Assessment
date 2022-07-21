import React from 'react'
import ErrorImg from '../assets/error.svg'

export default function Error() {
    return (
        <div className='grid place-items-center py-8'>
            <img src={ErrorImg} alt='error' className='w-56 h-56' />
            <h1 className='text-xl p-3'>Cannot load request</h1>
        </div>
    )
}
