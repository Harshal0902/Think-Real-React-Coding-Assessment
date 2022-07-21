import React from 'react'
import { DataContext } from '../context/provider'

export default function CreateJson() {

    const { setJsonText } = React.useContext(DataContext);

    const onValueChange = (e) => {
        setJsonText(e.target.value);
    }

    return (
        <div>
            <textarea className="w-full h-56 border-2 border-gray-200 rounded-2xl p-3 text-lg" onChange={(e) => onValueChange(e)} />
        </div>
    )
}
