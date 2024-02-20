import React, {useState} from 'react';
import useGif from '../hooks/useGif';
import { BeatLoader } from 'react-spinners';

function Specific() {
    const[type,setType]=useState('funny');
    const{gif, loading, fetchGif}=useGif(type);
   
    return (
        <div className='specific'>
            <h1>{type} Gif</h1>
            {(loading)?(<BeatLoader color="#36d7b7" />):(<img src={gif}/>)}
            <input type='text' placeholder='enter gif type...' onChange={(event)=>{setType(event.target.value);}}/>
            <button onClick={()=>{fetchGif(type)}} style={{cursor:'pointer'}}>Generate</button>
        </div>
    )
}
export default Specific;
