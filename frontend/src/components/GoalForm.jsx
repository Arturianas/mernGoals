import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {createGoal} from '../features/goalSlice'

const GoalForm = () => {


const [ text, setText] = useState('');
const dispatch = useDispatch();

const onSubmit = e => {
    e.preventDefault();

    dispatch(createGoal({text}));
    setText('')
}


  return (
    <div className='section'>
        <form className='enterGoal' onSubmit={onSubmit}>
            <div className='goal-form-group'>
                <label htmlFor='text'></label>
                <input
                    type='text'
                    name='text'
                    id='text'
                    placeholder='&#9997; Add Goal...'
                    value={text}
                    onChange={(e)=> setText(e.target.value)}
                />
            </div>
            <div className='addGoal'>
                <button
                    className='btn btn-block'
                    type='submit'
                > +
                </button>
            </div>
        </form>
    </div>
  )
}

export default GoalForm