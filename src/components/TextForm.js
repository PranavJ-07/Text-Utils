import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!", "success");
  };

  const handleLoClick = () => {
    // console.log("Uppercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase!", "success");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Cleared all the strings!", "success");
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    // console.log("handleExtraSpaces was clicked");
    // console.log("text is: " + text);
    // setText("new text"); // This will update the state correctly
    props.showAlert("Handled the extra spaces efficiently!", "success");
  }

  const handleCopy = () => {
    // var text = document.getElementById("myBox");
    // text.select();
    navigator.clipboard.writeText(text);  // as the navigator api is used here the above 2 lines and the below line are not necessary
    // document.getSelection().removeAllRanges(); // This is n ecessary to remove the selection from the textarea
    props.showAlert("Copied the entered string!", "success");
  }

  // this is necessary to handle the change in the textarea
  // and update the state accordingly
  // event is the parameter that will be passed to the function
  // when the onChange event is triggered
  // event.target.value is the value of the textarea
  const handleOnChange = (event) => {
    // console.log("On change");
    // console.log("text is: " + text);
    // setText("new text"); // This will update the state correctly
    setText(event.target.value); // Use event to get the value from the textarea
  };

  const [text, setText] = useState("");
  // text = "new text"; // This line is not necessary and will not update the state
  // setText("new text"); // This will update the state correctly
  return (
    
    <>
      <div className="container"  style={{color: props.mode==='dark'?'white':'#002a7e'}}>
        <h1 className = "mb-3">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#002a7e'}}
            id="myBox"
            rows="10"
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
          Convert to LowerCase
        </button> 
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>
          Clear Contents
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>
          Handle Extra Spaces
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
          Copy Contents
        </button>
      </div>
      <div className="container my-3" style={{color: props.mode==='dark'?'white':'#002a7e'}}>
        <h1>Your text Summary</h1>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters
        </p>
        <p>
            {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read
        </p>
        <h2>Preview</h2>
        <p>
          {text.length>0 ? text : "Nothing to preview!"};
        </p>
      </div>
    </>
  );
}
