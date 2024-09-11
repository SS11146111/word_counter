import { useState } from 'react'

export const Main = () => {

    const [text, setText] = useState("");
    let trimmedText = text.trim();
    let words = trimmedText.split(" ").filter(word => word !== "");

  return (
    <div className='main'>
        <textarea placeholder='Type or paste your text here ...' name="text" value={text} onChange={(e) => setText(e.target.value)} ></textarea>
        <button onClick={() => setText("")} className='clear'>Clear</button>
        <div className='result'>
            <div className='characters'>Characters: {text.length}</div>
            <div className='words'>Words: {words.length}</div>
        </div>
    </div>
  )
}
