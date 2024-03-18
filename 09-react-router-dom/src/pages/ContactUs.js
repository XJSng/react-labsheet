import {useState} from "react"
import { useNavigate } from "react-router-dom"

export default function ContactUs() {
   
    // Hooks cannot be created inside a if, while, for
    // or another nested function
    const navigate = useNavigate()
    
    const [formState,setFormState] = useState({
        'fullName': '',
        'email':''
    })

    const updateFormField = (e)=> {
        const keyBeingChanged = e.target.name
        const newValue = e.target.value

        setFormState({
            // In objects, you can add javascript expressions with []
            // Spread the first value pair
            ...formState,
            [keyBeingChanged]:newValue
        })        
    }
    
    return <>
    <h1>Contact Us</h1>
    <div className="mt-3">
        <label>Full Name:</label>
        <input type="text" 
        name="fullName"
        value={formState.fullName}
        onChange={updateFormField}/>
    </div>
    <div className="mt-3">
        <label>Email:</label>
        <input type="text"
        name="email"
        value={formState.email}
        onChange={updateFormField}/>
    </div>
    <button className="btn btn-primary mt-3" 
    onClick={()=>{
        navigate("/form-submitted", {
            state:formState
        })
    }}>Submit</button>
    </>
}