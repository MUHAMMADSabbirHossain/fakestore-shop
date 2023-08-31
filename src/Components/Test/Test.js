import React, { useState } from 'react';

const Test = (props) => {
    // console.log(count);
    const [count, setCount] = useState(0.0);

    /*    const plus = () => {
           setCount(count + 1);
       }
       const minus = () => {
           if (count > 0) {
               setCount(count - 1);
           }
       }
    */
    return (
        <div>
            <h1>You get {count}% discount.</h1>
            <h1>This is test. Clicked for discount.</h1>
            <div className="count mt-5">
                <button className='ms-3 p-3' onClick={() => { setCount(count + 1) }}>+</button>
                <button className='ms-3 p-3' onClick={() => { count > 0 ? setCount(count - 1) : alert("Negative number is not allowed."); }}>-</button>
            </div>
        </div >
    );
};

export default Test;