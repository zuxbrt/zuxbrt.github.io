import * as React from 'react';
import { useState, useRef, useEffect} from 'react';

const IntroElement = (props) => {
  const [main_text, setMainText] = useState('');

  const final_main_text = 'Sample text. Sample text, some more sample text. \n I also can write more sample text. But this one is enough.';
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
    </div>
  )

}

export default IntroElement;