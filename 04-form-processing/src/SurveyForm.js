import { useState } from 'react'

export default function SurveyForm() {
    const [name, setName] = useState("")
    const [color, setColor] = useState("")
    const [country, setCountry] = useState("singapore")
    const [fruits, setFruit] = useState([]) //empty array

    const handleCheckBoxChange = (event) => {
        if (event.target.checked) {
            // how to add a value to a state variable
            // This is called functional programming
            // // 1. clone the array
            //     const cloned = fruits.slice()
            // // 2. update the clone
            //     cloned.push(event.target.value)
            // // 3. replace the clone into the state
            //     setFruit(cloned)

            // Method 2 Preferred method
            // We spread the array with [...fruit]
            const cloned = [...fruits, event.target.value]
            setFruit(cloned)

            // There is a problem.

        } else {
            // // 1. clone the array
            // const cloned = fruits.slice()

            // // 2. find the index of the element we are removing
            // const indexToRemove = fruits.findIndex(f => f == event.target.value);

            // // 3. delete the index from the cloned array
            // cloned.splice(indexToRemove, 1);

            // // 4. replace the modified array into the state
            // setFruit(cloned);

            // Method 2
            const cloned = [...fruits.slice(0, indexToRemove), // This removes everything left of the fruit we want to remove
                            ...fruits.slice(indexToRemove + 1)]// This removes everything right of the fruit we want to remove
            // Imagine we have this array of fruits.
            setFruits(cloned);
        }
    }



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
                    setName(() => e.target.value)
                }} />
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
                }} /><label>Yellow</label>
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
            <select value={country} className='form-control' onChange={(event) => {
                setCountry(event.target.value)
            }}>
                <option value="singapore">Singapore</option>
                <option value="malaysia">Malaysia</option>
                <option value="indonesia">Indonesia</option>
            </select>
        </div>
        <div>
            <label>Fruit</label>
            <input type='checkbox'
                name="fruits"
                value="apple"
                className='ms-2 me-2'
                checked={fruits.includes('apple')}
                onChange={handleCheckBoxChange}
            /><label>Apple</label>

            <input type="checkbox"
                name="fruits"
                value="orange"
                className='ms-2 me-2'
                checked={fruits.includes('orange')}
                onChange={handleCheckBoxChange}
            />
            <label>Orange</label>

            <input type="checkbox"
                name="fruits"
                value="pineapple"
                className='ms-2 me-2'
                checked={fruits.includes('pineapple')}
                onChange={handleCheckBoxChange}
            />
            <label>Pineapple</label>

            <input type="checkbox"
                name="fruits"
                value="durian"
                className='ms-2 me-2'
                checked={fruits.includes('durian')}
                onChange={handleCheckBoxChange}
            />
            <label>Durian</label>
        </div>
    </>
}