import React,{useState} from 'react'


export default function FormText(props) {

  const handleUpChange = () =>{
     let newText=text.toUpperCase();
     setText(newText);
    // console.log(text)
    props.showAlert( "Text is converted to UpperCase", "success")
    
  }

  const handleLowChange = () =>{
     let newText=text.toLowerCase();
     setText(newText);
    props.showAlert( "Text is converted to LowerCase", "success")
  }
  
  const handleClearChange = () =>{
    let newText="";
    setText(newText);
    props.showAlert( "Text is cleared", "success")
  }
  
  const handleCopyChange = ()=> {
    let Text = document.getElementById("textArea") ;
    Text.select();
    //  console.log(text)
    navigator.clipboard.writeText(Text.value);
    props.showAlert( "Text is copied", "success")
  }
  
  const handleExtraSpaces = ()=> {
    let newText = text.split(/[ ]+/);
    //  console.log(text)
    setText(newText.join(" "));
    props.showAlert( "Extra spaces are deleted", "success")
  }

  const handleOnChange = (event) => {
        setText(event.target.value)
  }

  const [text, setText] = useState("");
  return (
      <>
      <div className={`container text-${props.mode==="light"?"dark":"light"}` }>
        <h1>{props.heading}</h1>
        <div className= {`mb-3 container text-${props.mode==="light"?"dark":"light"}`}>
            <textarea className={`form-control text-${props.mode==="light"?"dark":"light"} bg-${props.mode}`} value={text} onChange={handleOnChange}  id="textArea" rows="8"></textarea>
        </div>
            <button className="btn btn-primary mx-1" onClick = {handleUpChange} >UPPERCASE</button>
            <button className="btn btn-primary mx-1" onClick = {handleLowChange} >lowercase</button>
            <button className="btn btn-primary mx-1" onClick = {handleClearChange} >Clear</button>
            <button className="btn btn-primary mx-1" onClick = {handleCopyChange} >Copy</button>
            <button className="btn btn-primary mx-1" onClick = {handleExtraSpaces} >Delete Extra Spaces</button>
        </div>
        <div className={`container my-3 text-${props.mode==="light"?"dark":"light"}`}>
          <h1>Your Text Summary</h1>
          <p>{text.split(".").filter((element)=>{return element.length!==0}).length} sentences, {text.split(" ").filter((element)=>{return element.length!==0}).length} words, {text.length} letters</p>
          <p>{text.split(" ").filter((element)=>{return element.length!==0}).length * 0.008} minutes to read</p>
          <h3>Preview</h3>
          <p>{text.length>0?text:"Enter something in Box to preview here"}</p>

        </div>
    </>
  )
}
