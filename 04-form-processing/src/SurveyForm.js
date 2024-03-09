import { useState } from 'react'

export default function SurveyForm() {
    const [name, setName] = useState("")
    const [color, setColor] = useState("")
    const [country, setCountry] = useState("singapore")
    return <>
        <h1>Survey Form</h1>
        <div>
            <label>Name</label>
            <input type="text" className="form-control"
                value={name}
                onChange={(e) => {
                    // all `onChange` event handlers take one parameter
                    // - the event. The event contains every info about the change
                    // like which key is pressed, which form control etc. etc.
                    setName(()=> e.target.value)
                }}/>
        </div>
        <div>
            <label>Favourite Colour:</label>
            <input type='radio'
                value="red"
                className='ms-2 me-2'
                name="color"
                checked={color == "red"}
                onChange={() => {
                    setColor("red")
                }}
            /><label>Red</label>
            <input type='radio'
                value="yellow"
                className='ms-2 me-2'
                name="color"
                checked={color == "yellow"}
                onChange={() => {
                    setColor("yellow")
                }}/><label>Yellow</label>
            <input type='radio'
                value="green"
                className='ms-2 me-2'
                name="color"
                checked={color == "green"}
                onChange={() => {
                    setColor("green")
                }}
            /><label>Green</label>
        </div>
        <div>
            <label>Country</label>
            <select value={country} className='form-control' onChange={(event)=>{
                setCountry(event.target.value)
            }}>
                <option value="singapore">Singapore</option>
                <option value="malaysia">Malaysia</option>
                <option value="indonesia">Indonesia</option>
            </select>
        </div>
    </>
}