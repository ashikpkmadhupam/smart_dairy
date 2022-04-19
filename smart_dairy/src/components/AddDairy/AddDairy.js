import './AddDairy.css'
import NavBar from '../Navigation/NavBar';
import { useState } from 'react';
import DatePicker from 'react-date-picker';

const AddDairy = () => {

    const [selectedDate, setSelectedDate] = useState(new Date());
    const [content, setContent] = useState("");

    const updateContent = (event) => {
        setContent(event.target.value);
    }

    const addDairy = () => {

        const sDate = selectedDate.getDate()+"/"+(selectedDate.getMonth()+1)+"/"+selectedDate.getFullYear();

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