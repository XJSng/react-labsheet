import logo from './logo.svg';
import React from "react"
import sunflowers from "./sunflowers.jpg"
import "./App.css"
import "./style.css"

function App() {
  return (
    <> {/* This is the same as <React.Fragment> */}
      {/* Whatever JSX the component returns will
      be part of the screen */}
      <h1 style={{ color: "red" }}>Hello World</h1>
      <p>We can add a paragraph here</p>
      {/* How about adding images */}
      <img src={require("./logo.svg").default} />
      <img style={{
        width: "50%",
        height: "50%"
      }} src={sunflowers} />
      <p className='urgent'>This text is urgent</p>
    </>
  );
}

export default App;
