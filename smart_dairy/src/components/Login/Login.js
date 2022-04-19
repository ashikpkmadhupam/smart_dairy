import './Login.css'
import NavBar from '../Navigation/NavBar';
import { useState } from 'react';

import Web3 from 'web3';
import { useDispatch } from 'react-redux';
import { updateAccount } from '../../Redux/Account';
import { updateLoggedIn } from '../../Redux/LoginState';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [isWallet, setIsWallet] = useState(false);
  let navigate = useNavigate(); 

  let login = async () => {
    const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');
    const accounts = await web3.eth.requestAccounts();
    dispatch(updateAccount(accounts));
    dispatch(updateLoggedIn(true));
    navigate('/');

  }

  const checkWallet = () => {
    if (typeof window.ethereum !== 'undefined') {
      setIsWallet(true);
    } else {
      alert("No wallet present. PLease install a wallet like MetaMask");
      setIsWallet(false);
    }
  }

  const isLoggedIn = useSelector((state) => state.login.value)
  const account = useSelector((state) => state.account.value)

  const dispatch = useDispatch();

    return (
      <>
        <NavBar />
        <section className="login-section">
          {!isWallet && !isLoggedIn && <p>Welcome to Smart Dairy. This is a decentralized application to write daily dairy. We are making use of Web3 and Etherium block chain for saving daily dairies of our user. Blockchain enables us to secure the user data in decentralized manner so that only authorized users can access thier daily dairy. To login to Daily Dairy users need to use a blockchain wallet such as Meta Mask. Please check whether wallet is enabled or not using below button.</p>}
          { !isLoggedIn && !isWallet &&<button className='check-wallet-button' onClick={checkWallet}>Check Wallet</button>}
          { !isLoggedIn && isWallet && <p>Greate! Wallet is present. Please proceed to login</p>  }
         { !isLoggedIn && isWallet &&  <button className='login-button' onClick={login}>Login</button>}
         {isLoggedIn && <p>Logged in  with Account {account}</p>}
        </section>
      </>
    );
  };

export default Login;  