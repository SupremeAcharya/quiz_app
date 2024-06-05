import React from 'react'
import Quiz from './components/Quiz';
import { useState } from 'react';
import Toggle from './components/Toggle';


const App = () => {

  const[isDark, setIsDark] = useState(true);
  return (
  <div className='main' data-theme={isDark ? "dark" : "light"}>
    <div className='navigation' >
        <Toggle
          isChecked={isDark}
          handleChange={() => setIsDark(!isDark)}
          />
      
    </div>
    <div className='quiz-section'>
      <Quiz />
    </div>
  </div>
  )
}


export default App;