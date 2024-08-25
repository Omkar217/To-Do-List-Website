import { useState } from 'react';

function Count()
{
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
      };
      
      return(
        <button className='kid' onClick={handleClick}>
            Clicked {count} times
        </button>
      )
  

}

export default Count