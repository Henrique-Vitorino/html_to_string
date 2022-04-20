import { useState } from 'react';
import './App.css';

function App() {

  const [input,setInput] = useState("")
  const [output,setOutput] = useState("")

  const processarHtml = (html) => {
      if (html === "") {
          return "";
      }

      let result = `${html}`
      // result = result.replace(/\s/g, '');
      // REMOVE TABS
      result = result.replace(/\t/g, '');
      // REMOVE QUEBRA DE LINHA
      result = result.replace(/(\r\n|\n|\r)/gm, '');
      result = result.replaceAll('"', '\\"');
      result = result.replaceAll('/', '\\/');
      setOutput(`"${result}"`)
  }

  const processarString = (string) => {
    if (string === "") {
        return "";
    }

    let result = `${string}`
    result = result.replaceAll('\\"', '"');
    result = result.replaceAll('\\/', '/');
    result = result.slice(1, result.length - 1);    
    setOutput(`${result}`)
  } 



  return (
    <div className="container">
      <h3 style={{color: '#ffffff'}}>HTML</h3>
      <div className="field">
        <textarea value={input} onChange={(e)=>setInput(e.target.value)}></textarea>
      </div>
      <div className='btn-container'>
        <p className="btn" onClick={()=>processarHtml(input)}>Converter html</p>
        <p className="btn" onClick={()=>processarString(input)}>Converter string</p>
      </div>
      <div className="field">
        <textarea value={output} onChange={(e)=>setOutput(e.target.value)}></textarea>
      </div>
    </div>
  );
}

export default App;
