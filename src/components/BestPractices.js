import React, { useState } from 'react';  
export default function MyComponent  ()  {  
  const [count, setCount] = useState(0);  
  
  const handleIncrement = () => {  
    setCount(count + 1);  
  };  
  
  return (  
    <div className='IncButton'>  
      <p>Count: {count}</p>  
      <button className='inc-btn' onClick={handleIncrement}>Increment</button>  
    </div>  
  );  
};  