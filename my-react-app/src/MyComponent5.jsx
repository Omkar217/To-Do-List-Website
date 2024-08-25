import React, {useState, useEffect } from 'react';

function MyComponent5()
{
    const [count, setCount] = useState(0);

    useEffect(() => {
        if(count > 5)
        {
            document.title = 'My Portfolio | Home ';
        }
    },[count > 5]);

    function addCount() {
        setCount(c => c + 1 );
    }

    return(
    <>
    <p> Count : {count} </p>
           <button onClick={addCount}> Add </button>
    </>);


}

export default MyComponent5;