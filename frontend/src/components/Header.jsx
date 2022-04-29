import React from 'react'
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { MdOutlineLogout, MdCode } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import {Link, useNavigate} from 'react-router-dom'
import { logout, reset } from '../features/authSlice';

const Header = () => {

const navigate = useNavigate();
const dispatch = useDispatch();
const {user} = useSelector((state) => state.auth);


const onLogout = () => {
  dispatch(logout());
  dispatch(reset());
  navigate('/');
}




  return (
    <div className='header'>
      <div className='logo'>
        <Link to='/'>GoalSetter</Link>
      </div>

      <ul>

        {user? (
          <li className='btnLogout'>
            <button  onClick={onLogout}>
                 Logout
            </button>
          </li>
        ) : (
          <>
            <li>
          <Link to='/login'>
            <FaSignInAlt/> Login
          </Link>
        </li>
        <li>
          <Link to='/register'>
            <FaUser/> Register
          </Link>
        </li>
          </>
        )}
      </ul>

    </div>
  )
}

export default Header