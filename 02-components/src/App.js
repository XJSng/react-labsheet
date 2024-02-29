import ImageFrame from "./ImageFrame";
import SumOfTwo from "./SumOfTwo";
import cake from "./cake.jpg"
import Shout from "./Shout";

function sayGoodbye() {
  return "Bye Bye"
}

function displayHeader() {
  return <h1>About Me</h1>
}

function Alert(props) {
  return <div style={{
    color: props.bgColor ?? "orange",
    padding: "10px",
    "font-size":" 30px"
  }}>{props.msg ?? "Default Alert Message"}</div>
  // Same as {props.msg ? props.msg = "Default"} This is known as Nullish coalescing operator
}

// My method
// function SumOfTwo(props) {
//   return parseInt(props.a) + parseInt(props.b)
// return parseInt(props.a) + parseInt(props.b)
// }

const Footer = () => <div>@2024</div>

function App() {
  return (
    <>
      {displayHeader()}
      <h2> {sayGoodbye()}</h2>

      {/* A component in React
    1. is a function
    2. first alphabet of the function name is Uppercase
    3. return JSX
    A component is your own custom "tag" in jsx
    */}
      <Alert />
      
      <h2>Why use Components</h2>
      {/* Why use a Component? */}
      {/* Because Components are functions, they can receive parameters
       - You can add patameter as PROPS, they are key value pairs you can use
      */}
      <Alert msg="HELP GET HELP" bgColor="red"/>
      {/* Another Alert message indenpent of each other */}
      <Alert msg="CODE BLUE!!!" bgColor="blue"/>

      <h2>Routing</h2>
      {/* Let's create a new component in a different file */}
      <figure>
        <ImageFrame img={(cake)} alt="Its a cake image" style={{}}/>
      </figure>
      <h3>Hands On 2.2</h3>
      <Shout msg="Help me!!"/>
      <h3>Method 1 of Hands On 2.3</h3>
      {/* <SumOfTwo a="2" b="3"/> */}

      <h3>Method 2 of Hands On 2.3</h3>
      <SumOfTwo/>
      <Footer />
    </>
  );
}

export default App;
