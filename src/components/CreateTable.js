import React from 'react'
import NewRow from './NewRow'

const CreateTable = ({ data, setData }) => {

    const [rows, addRows] = React.useState([0]);

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
                    {
                        rows.map((row, index) => {
                            return <NewRow
                                addRows={addRows}
                                rowId={index}
                                key={index}
                                setData={setData}
                                data={data}
                            />
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default CreateTable
