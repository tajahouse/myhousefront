import React from 'react';
import Typewriter from 'typewriter-effect';
import Header from './Header';
import '../styles/App.css';


const App = () =>{
  return(
    <div>
    <Header/>
      <span className='typewriter_intro'>
          <p>Welcome to My House app where you can</p>
          <Typewriter
            options={{
              strings: ['organize family events', 'keep track of schedules', 'assign chores', 'set up allowances', 'communicate safely'],
              autoStart: true,
              loop: true,
              cursorClassName: 'typewriter',
              skipAddStyles: true,
                      }}
            />
      </span>
    </div>
  );
}
export default App;