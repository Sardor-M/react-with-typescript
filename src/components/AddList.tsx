import React, { useState } from 'react'

const AddList = () => {
    // two-way binding 
    const [input, setInput] =useState({ 
        name:'',
        age:'',
        note:'',
        img:''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

  return (
    <div className='AddList'>
        <input 
            name='name'
            type='text'
            placeholder='Name'
            className='AddList-input'
            value={input.name}
            onChange={handleChange}
        />
        <input 
            name='age'
            type='text'
            placeholder='Age'
            className='AddList-input'
            value={input.age}
            onChange={handleChange}
        />
        <input 
            name='url'
            type='text'
            placeholder='Url'
            className='AddList-input'
            value={input.img}
            onChange={handleChange}
        />
        <textarea
            name='note'
            placeholder='Notes'
            className='AddList-input'
            value={input.note}
            onChange={handleChange}
        />
    </div>
  )
}

export default AddList