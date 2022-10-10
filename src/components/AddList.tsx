import React, { useState } from 'react'
import {ofState as Props } from '../App';

interface IProps {
    people: Props['people']
    setPeople: React.Dispatch<React.SetStateAction<Props['people']
    >>
}

const AddList: React.FC<IProps> = ({people, setPeople}) => {
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

    const handleClick = (): void => {
        if (
            !input.name ||
            !input.age ||
            !input.img 
        ) 
            return 
        
        setPeople([
            ...people,
            {
                name: input.name,
                age: parseInt( input.age),
                img: input.img,
                note: input.note
            } 
        ]);
        setInput ({
            name:'',
            age:'',
            note:'',
            img:''
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
            name='img'
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
        <button 
            className='AddList-btn'
            onClick={handleClick}
        >
            Add to  the list 
        </button>    
    </div>
  )
}

export default AddList