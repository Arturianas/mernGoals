import React from 'react';
import {useDispatch} from 'react-redux';
import {deleteGoal} from '../features/goalSlice'

const GoalItem = ({goal}) => {

const dispatch = useDispatch();
console.log(goal._id)
  return (
    <div className='goalContainer white'>
        <div className='goal addGoal'>
          <h2>{goal.text}</h2>
          <button  onClick={()=> dispatch(deleteGoal(goal._id))}>
              X
          </button>
        </div>
        <div className='createdAt'>
            {new Date(goal.createdAt).toLocaleString('en-GB')}
        </div>
    </div>
  )
}

export default GoalItem