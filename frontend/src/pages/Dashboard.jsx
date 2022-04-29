import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import GoalForm from '../components/GoalForm';
import { getGoals, reset } from '../features/goalSlice';
import GoalItem from '../components/GoalItem';


let weekDays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

let now = new Date();
let diena = weekDays[ now.getDay() ];


const Dashboard = () => {




const navigate = useNavigate();
const dispatch = useDispatch();
const {user} = useSelector((state) => state.auth);

const {goals, isLoading, isError, message} = useSelector((state) => state.goals)


useEffect(()=>{

  if(isError){
    console.log(message);
  }


  if(!user){
    navigate('/login');
  }

  dispatch(getGoals());
  return ()=>{
    dispatch(reset())
  }

}, [user, navigate, isError, message, dispatch]);

  return (
    < >
      <div className='heading white'>
          <h1>Happy {diena} &#128524; ☕ </h1>
          <p className='welcome-message'>Add your first goal, <strong>{user && user.name}</strong></p>
          <GoalForm/>

          <div className='content'>
              {goals.length > 0 ? (
                <div className='goals'>
                  {
                    goals.map((goal) => (
                      <GoalItem key={goal._id} goal={goal}/>
                    ))
                  }
                </div>
              ) : (
                <h3>You have not set any goals</h3>
              )}
          </div>
      </div>
    </>
  )
}

export default Dashboard