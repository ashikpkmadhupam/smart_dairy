import './AddDairy.css'
import NavBar from '../Navigation/NavBar';
import { useState } from 'react';
import DatePicker from 'react-date-picker';
import { DAIRY_ABI,DAIRY_ADDRESS } from '../SmartContract/DairyConfig';
import Web3 from 'web3';

const AddDairy = () => {

    const [selectedDate, setSelectedDate] = useState(new Date());
    const [content, setContent] = useState("");

    const updateContent = (event) => {
        setContent(event.target.value);
    }

    const addDairy = async () => {

        const sDate = selectedDate.getDate()+"/"+(selectedDate.getMonth()+1)+"/"+selectedDate.getFullYear();
        const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');
        const accounts = await web3.eth.requestAccounts();
        const dairyContract = new web3.eth.Contract(DAIRY_ABI,DAIRY_ADDRESS);
        const amount = 0.000005;
        dairyContract.methods.addDairy(sDate,content).send({from : accounts[0],value:web3.utils.toWei(amount.toString(),'ether')});

    }

    return (
      <>
        <NavBar />
        <div className='add-container'>
                <p>Add Dairy</p>
                <div className='date-container'>
                    <DatePicker onChange={setSelectedDate} value={selectedDate} />
                </div>
                <textarea className='dairy-content' rows='9' placeholder='Start writing dairy...'  value={content} onChange={updateContent}/>
                <button className='add-button' onClick={addDairy}>Add Dairy</button>
        </div>
        
      </>
    );
  };

export default AddDairy;  