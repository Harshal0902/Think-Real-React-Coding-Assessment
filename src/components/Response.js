import React from 'react'

const Response = ({ data }) => {

    let obj = data;
    
    let readableobj = '{ \n';
    for(let key in obj) {
        readableobj += '\t'
        readableobj += (typeof obj[key] === "string")? `${key}: "${obj[key]}"` : `${key}: ${obj[key]}`; 
        if (Object.keys(obj).pop() !== key.toString()) {
            readableobj += ',\n'
        }
    }
    readableobj += '\n}';

  return (
    <div className='px-44 py-4'>
        <h1 className='text-xl p-3'>Response</h1>
        <textarea className="w-full h-56 border-2 border-gray-200 rounded-2xl p-3 text-lg" disabled  value={readableobj}/>
    </div>
  )
}

export default Response