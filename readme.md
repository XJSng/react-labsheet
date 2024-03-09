# Creating a React Application
In your terminal, type in `npx create-react-app <your project name>`
There is another method called vite 

# How to start your React Project
1. Go to the directory in your terminal
2. `npm run start`
3. For Gitpod user, you need to set up an `.env` file with the following content.
- The `.env` file is in the same directory as `package.json`
    - It should content the file  `WDS_SOCKET_PORT=0`
    - This will enable hot reload, changes will be reflected instantly

### What is JSX?
It looks like HTML but they are Javascript object which will be transpolated.
In the transpolation stage, Javascript code is transformed into browser readable format.
JSX can only live within one `<div>` element, therefore it is best to use a react fragment `<> This is a fragment. </>`
You can also use `{}` to write Javascript expression. Example, `{2+2}` will result in `4` on the browser.
- The downside is that the {} MUST RETURN A VALUE

### Compontents in React
Components allow you to create your own 
Components MUST: 
- Be a function
- Must start with Uppercase
- Return JSX
Components can be in their own file but they must be exported out and imported into the App.js file
Components can have (props). Props are pass like attributes in your components like so: 
```
export default function Shout(`props`){
    return <p>{props.msg.toUpperCase()}</p>
  }
```

### Handling Events in React
In React, there is no DOM.
Event handler in React Must be arrow functions
 
### States in React
When the state variable changes, the browser will rerender. Interactions by the user.
To create a state variable using the `useState` Hook
```
import {useState} from 'react'

const [color, setColor] = useState("white")
// If this is the first time the user is clicking on the useState, it will be white
// useState returns 2 results
    // Result 1: the current value of the state variable
    // Result 2: a function to change the state value

setColor("red") // Like Java call for value


return <div>
<div style = {{
    width: "50px",
    height: "50px",
    border: "1px solid black",
    backgroundColor: color
}}></div>
<button onClick={redButtonClick}>Red</button>
        <button onClick={()=>{
            setColor("blue")
        }}>Blue</button>
</div>

```
