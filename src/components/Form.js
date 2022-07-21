import React from 'react'
import { DataContext } from '../context/provider';

const Form = ({ onSendClick }) => {

  const { formData, setFormData } = React.useContext(DataContext);

  const onUrlChange = (e) => {
    setFormData({ ...formData, url: e.target.value });
  }

  const handleChange = (e) => {
    setFormData({ ...formData, type: e.target.value });
  }


  return (
    <div className='flex space-x-4 flex-row items-center justify-center pt-8 px-44'>

      <div className=''>
        <select className='uppercase text-xl px-2 py-1 rounded-xl border-2 border-blue-500 w-24 font-semibold' onChange={(e) => handleChange(e)} value={formData.type} >
          <option value={'POST'}>Post</option>
          <option value={'GET'}>Get</option>
        </select>
      </div>

      <div>
        <input type='text' className='w-[28rem] text-xl px-2 py-1 rounded-xl border-2 border-gray-300 focus:border-blue-400' placeholder='URL' onChange={(e) => onUrlChange(e)} />
      </div>

      <div className=''>
        <button className='uppercase bg-blue-500 text-xl px-2 py-1 text-white rounded-xl' onClick={() => onSendClick()}>Send</button>
      </div>

    </div>
  )
}

export default Form;