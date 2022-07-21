import React from 'react'
import NewRow from './NewRow'

const CreateTable = () => {
    return (
        <div>
            <table className="table-fixed w-full border-2 border-gray-200 rounded-2xl">
                <thead>
                    <tr className='text-xl '>
                        <th className='p-2 border-2 border-gray-200 rounded-l-2xl'></th>
                        <th className='p-2 border-2 border-gray-200'>Key</th>
                        <th className='p-2 border-2 border-gray-200'>Value</th>
                    </tr>
                </thead>
                <tbody>
                    <NewRow />
                </tbody>
            </table>
        </div>
    )
}

export default CreateTable