import React from 'react'

const NewRow = () => {
    return (
        <tr className='text-lg'>
            <td className='p-2 border-2 border-gray-200'>
                <input type="checkbox" className="w-5 h-5 mt-2" />
            </td>
            <td className='p-2 border-2 border-gray-200'>
                <input type='text' className='uppercase w-full text-lg px-2 py-1 rounded-xl border-2 border-gray-300 focus:border-blue-400' />
            </td>
            <td className='p-2 border-2 border-gray-200'>
                <input type='text' className='uppercase w-full text-lg px-2 py-1 rounded-xl border-2 border-gray-300 focus:border-blue-400' />
            </td>
        </tr>
    )
}

export default NewRow
