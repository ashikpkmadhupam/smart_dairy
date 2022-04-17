import './App.css';
import {useState} from 'react'
import Web3 from 'web3';


function App() {

  const [account, setAccount] = useState("");

  let login = async () => {
    alert("Loggin in");
    const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');
    const accounts = await web3.eth.requestAccounts();
    setAccount(accounts[0]);
  }

  let logout = async () => {
    alert("Logging out");
    setAccount("Not logged in");
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={login}>Login</button>
        <button onClick={logout}>Logout</button>
        <p>Logged in with {account}</p>
      </header>
    </div>
  );
}

export default App;
