import React from 'react';
import useGif from '../hooks/useGif';
import { BeatLoader } from 'react-spinners';

function Random() {
   const{gif, loading, fetchGif}=useGif();
    return (
        <div className='random'>
            <h1>Random Gif</h1>
            {(loading)?(<BeatLoader color="#36d7b7" />):(<img src={gif}/>)}
            <button onClick={()=>{fetchGif()}} style={{cursor:'pointer'}}>Generate</button>
        </div>
    )
}
export default Random;
