/* import './App.css';
import React, {useState} from 'react'; */

// ejercicio 1

/*function App() {
  
  const [counter, setCounter] = useState(0)
  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
    
  );
}*/

// ejercicio 2

/*function App() {
  
  const [counter, setCounter] = useState(0)
  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
    
  );
  }*/

  // ejercicio 3
  
/*  import React, {useState, useEffect} from 'react';

 function App () {

  const [count, setCount] = useState(0);

  useEffect(() => {setCount(count + 1);

return () => {
  console.log('Cleanup');
}

  },[])

return (

  <div className="App">
    <h1>{count}</h1>
  </div>

);

}
*/
// ejercicio 4

import React, {useState, useEffect} from 'react';

function App () {

 const [count, setCount] = useState(0);

 useEffect(() => {setCount(count + 1);

return () => {
 console.log('Cleanup');
}

 },[])

return (

 <div className="App">
   <h1>{count}</h1>
 </div>

);

}

export default App;
