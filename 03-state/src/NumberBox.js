import {useState} from "react";

export default function NumberBox() {
    const [count, setCount] = useState(0)
// 1. The current value of the state variable
// 2. A function to modify the value of the variable
// 3. userState(0) means start count variable with 0

    return <div style={{
        padding:"10px",
        "text-align": "center",
        width: "100px",
        height: "50px",
        border: "1px solid black"
    }} onClick={() => {
       // For React to know a state variable has changed is
       // to use the mutator function which is setCount
        // setCount(count + 1) // This works but is not preferred
        setCount(()=> count+ 1) // This is preferred because stateCount is asynchronous
    }}
    >{count}</div>

}

// If there is anything that can be change visually
// It is a state variable.

/* UseState is one of the many React hooks
    A reacthook is a function that provide some react features
*/



// export default function NumberBox() {
//     return <div style={{
//         width: "100px",
//         height: "50px",
//         border: "1px solid black"
//     }} onClick={() => {
//         alert("Box has been clicked!")
//     }}
//     >Click Me!</div>

// }