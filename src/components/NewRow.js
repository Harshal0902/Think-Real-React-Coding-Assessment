import React from 'react'

const NewRow = ({ addRows, rowId, data, setData }) => {

    const [checkCheckbox, setCheckCheckbox] = React.useState(false);
    
    const handleChange = (e) => {
        
        let result = data.filter(entry => entry.id === Number(e.target.name))[0];
        
        if (!checkCheckbox) {
            setCheckCheckbox(true);
            addRows(oldArr => [...oldArr, rowId]);
            result = { ...result, id: rowId, check: true }
        } else {
            setCheckCheckbox(false);
            result = { ...result, id: rowId, check: false }
        }
        
        let index = data.findIndex((value) => value.id === Number(e.target.name));
        if (index === -1) {
            setData(oldArr => [...oldArr, result]);
        } else {
            const newArray = Object.assign([...data], {
                [index]: result
            });
            setData(newArray)    
        }
    }

    const onTextChange = (e) => {
        let result = data.filter(entry => entry.id === rowId)[0];
        result = { ...result, id: rowId, [e.target.name]: e.target.value }

        let index = data.findIndex((value) => value.id === rowId);
        
        if (index === -1) {
            setData(oldArr => [...oldArr, result]);
        } else {
            const newArray = Object.assign([...data], {
                [index]: result
            });
            setData(newArray)    
        }
    }
    

    return (
        <tr className='text-lg'>
            <td className='p-2 border-2 border-gray-200'>
                <input type="checkbox" className="w-5 h-5 mt-2 checked:bg-blue-500" name={rowId} checked={checkCheckbox} onChange={(e) => handleChange(e)} />
            </td>
            <td className='p-2 border-2 border-gray-200'>
                <input type='text' className='uppercase w-full text-lg px-2 py-1 rounded-xl border-2 border-gray-300 focus:border-blue-400' onChange={(e) => onTextChange(e)} name="key"/>
            </td>
            <td className='p-2 border-2 border-gray-200'>
                <input type='text' className='uppercase w-full text-lg px-2 py-1 rounded-xl border-2 border-gray-300 focus:border-blue-400' onChange={(e) => onTextChange(e)} name="value" />
            </td>
        </tr>
    )
}

export default NewRow
