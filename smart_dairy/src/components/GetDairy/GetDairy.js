import './GetDairy.css'
import NavBar from '../Navigation/NavBar';
import { useState } from 'react';
import DatePicker from 'react-date-picker';
import { DAIRY_ABI,DAIRY_ADDRESS } from '../SmartContract/DairyConfig';
import Web3 from 'web3';

const GetDairy = () => {

    const [selectedDate, setSelectedDate] = useState(new Date());
    const [content, setContent] = useState("");

    const getDairyFromBlockChain = async() => {
        const sDate = selectedDate.getDate()+"/"+(selectedDate.getMonth()+1)+"/"+selectedDate.getFullYear();
        const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');
        const accounts = await web3.eth.requestAccounts();
        const dairyContract = new web3.eth.Contract(DAIRY_ABI,DAIRY_ADDRESS);
       const bContent =  await dairyContract.methods.getDairy(sDate).call({from : accounts[0]});
       setContent(bContent);
    }


   return ( <>
        <NavBar />
        <div className='get-container'>
                <p>Get Dairy</p>
                <div className='date-container'>
                    <DatePicker onChange={setSelectedDate} value={selectedDate} />
                </div>
                <button className='get-button' onClick={getDairyFromBlockChain}>Get Dairy</button>
         </div>  
         <div className='dairy-content'>
                    <p>{content}</p>
         </div>     
    </> );
}

export default GetDairy;