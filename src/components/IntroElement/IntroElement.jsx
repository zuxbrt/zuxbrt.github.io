import * as React from 'react';
import { useState, useRef, useEffect} from 'react';

const IntroElement = (props) => {
  const [main_text, setMainText] = useState('');

  const final_main_text = "Hi. I'm Zulfo, Full Stack Web Developer.";
  const main_text_index = useRef(0);

  useEffect(() => {
    function addText(){
      setMainText(previous => previous + final_main_text[main_text_index.current]);
      main_text_index.current++;
    }
    if(main_text_index.current < final_main_text.length){
      let addCharacter = setInterval(addText, 100);
      return () => clearInterval(addCharacter)
    }
  }, [main_text])

  return (
    <div>
      <p className='text'>{main_text}</p>

      <div className='languages__wrapper'>

        <div className='row'>

          <div className='column languages-card'>

            <p className='title'>Languages I'm experienced at:</p>

            <div className='languages__row'>
              <a className='lang__icon php' href="https://github.com/zuxbrt?tab=repositories&q=&type=&language=php" target='_blank' rel='noreferrer' title='PHP repos'>PHP</a>
              <a className='lang__icon js' href="https://github.com/zuxbrt?tab=repositories&q=&type=&language=javascript" target='_blank' rel='noreferrer' title='JS repos'>Javascript</a>
              <div className='lang__icon css' href='#'>Css/Sass</div>
              <div className='lang__icon html' href='#'>Html</div>
            </div>
          </div>

          <div className='column languages-card'>
            <p className='title'>Languages I'm learning in my free time:</p>
            <div className='languages__row'>
              <div className='lang__icon learning'>Python</div>
              {/* <div className='lang__icon learning'>Java</div> */}
            </div>
          </div>

        </div>

      </div>
      
      <div className='frameworks__wrapper'>
        <p className='headline'>Frameworks I've worked with:</p>

        <div className='frameworks__row'>
          <a className='single-framework' href='https://symfony.com/'>Symfony</a>
          <a className='single-framework' href='https://polymer-library.polymer-project.org/3.0/docs/devguide/feature-overview'>Polymer</a>
          <a className='single-framework' href='https://emberjs.com/'>Ember.js</a>
          <a className='single-framework' href='https://vuejs.org/'>Vue.js</a>
          <a className='single-framework' href='https://reactjs.org/'>React.js</a>
          <a className='single-framework' href='https://nextjs.org/'>Next.js</a>
          <a className='single-framework' href='https://threejs.org/'>Three.js</a>
          <a className='single-framework' href='https://laravel.com'>Laravel</a>
        </div>
      </div>

    </div>
  )

}

export default IntroElement;