import './App.css';
import React from 'react';

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


const themes = {
  light: {
    foreground: "#000000",
    backgroud: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    backgroud: "#222222"
  }
};

const ThemeContext = React.createContext(themes.light);

export default function App() {
  return (
  <ThemeContext.Provider value={themes.dark}>
  <Toolbar />
  </ThemeContext.Provider>
);
}

function Toolbar(props) {
    return(
    <div>
      <ThemedButton/>
    </div>
    );
}

function ThemedButton() {
  const theme = React.useContext(ThemeContext);
  return (
    <button style={{background: theme.background, color: theme.foreground }}>
      I m styled by theme context!
    </button>

  );
}

// ejercicio 5

