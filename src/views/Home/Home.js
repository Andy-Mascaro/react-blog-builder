import React, { useState } from 'react';

import Preview from '../../components/Preview/Preview';
import Editor from '../../components/Editor/Editor';

import './Home.css';

export default function Home() {
  const [title, setTitle] = useState('title');
  const [subtitle, setSubtitle] = useState('subtitle');
  const [font, setFont] = useState('font');
  const [align, setAlign] = useState('align');
  const [text, setText] = useState('text');
  // add useState calls here for title, subtitle, font, align, and text

  return (
    <main>
      <div>
        <Preview 
          font={font} 
          align={align} 
          subtitle={subtitle} 
          title={title} 
          text={text} />
        <Editor 
          setFont={setFont}
          setAlign={setAlign}
          setSubtitle={setSubtitle}
          setTitle={setTitle}
          setText={setText}

        />
   

        {/* pass the state variables as props to the presentational components */}
    
      </div>
    </main>
  );
}
