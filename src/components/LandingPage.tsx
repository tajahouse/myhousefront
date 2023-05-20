import React from "react";
import Typewriter from 'typewriter-effect';


  type ThemeStyle = {
    themeStyle: object;
  }

const LandingPage: React.FunctionComponent<ThemeStyle> = (props) =>{
    const colors = props.themeStyle;
    return(
        <div>
            <span className='typewriter_intro'>
            <p
            >Welcome to My House app where you can</p>
            <Typewriter
             options={{
              strings: ['organize family events', 'keep track of schedules', 'assign chores', 'set up allowances', 'communicate safely'],
              autoStart: true,
              loop: true,
              cursorClassName: 'typewriter',
              skipAddStyles: true,
              delay: 30,
                      }}
            />
      </span>
        </div>
    );
}

export default LandingPage;