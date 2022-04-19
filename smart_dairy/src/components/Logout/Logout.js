import './Logout.css'
import NavBar from '../Navigation/NavBar';
import { useDispatch } from 'react-redux';
import { updateAccount } from '../../Redux/Account';
import { updateLoggedIn } from '../../Redux/LoginState';
import { useNavigate } from 'react-router-dom';


const Logout = () => {

  const dispatch = useDispatch();
  let navigate = useNavigate(); 

    const logout = () => {
      dispatch(updateAccount(null));
      dispatch(updateLoggedIn(false));
      navigate("/");
    }
    return (
      <>
        <NavBar />
        <section className="hero-section">
          <p>Are you sure? logging out... </p>
          <button onClick={logout} className='logout-button'>Logout</button>
        </section>
      </>
    );
  };

export default Logout;  