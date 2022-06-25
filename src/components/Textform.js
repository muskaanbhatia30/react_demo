import React,{useState} from 'react'

export default function Textform(props) {
    const [text, setText] = useState('enter text here.....');
    function handleevent()
    {
      console.log("uppercase is pressed "+text);
      let newtext=text.toUpperCase()
      setText(newtext)   
      props.showalert('uppercase done','success')
      
    }
    function cleartext()
    {
        setText('')
        props.showalert('text clear','success')
    }
    function handlechange(event)  //by this we can type in textarea
    {
       setText(event.target.value)
    }
    
 
  return (
      <>
       <div className='container mt-5' style={{color: props.mode==='dark'?'white':'black'}}>
       
       <h1>{props.heading}</h1>
       <div className="mb-3" >
          <textarea className="form-control" onChange={handlechange} value={text} id="exampleFormControlTextarea1" rows="3"></textarea>
       <button className="btn btn-primary mt-4" onClick={handleevent}>convert to uppercase</button>
       <button className="btn btn-primary mt-4 ms-3" onClick={cleartext}>Clear</button>
       </div>
       <div className="conatiner">
         <h3>summary of text</h3>
         <p> {text.split(" ").length} words and {text.length} characters and {text.split("/n").length} paragrphes</p>
         <h3>preview</h3>
         <p>{text.length>0?text:"enter something above to preview"}</p>
     </div>
   </div>
    
      </>
   
  )
}
