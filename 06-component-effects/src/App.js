import './App.css';
import { useState, useEffect } from "react"
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [shops, setShops] = useState([])
  const [events, setEvents] = useState([])

  const loadShops = async () => {
    const response = await axios.get('json/shops.json');
    setShops(response.data);
  }

  useEffect(()=>{
// callback function cannot be async
const loadShopData = async()=> {
const response = await axios.get("json/shops.json")
setShops(response.data)
}
//Call the function immediately
loadShopData()
  }, [])

  const loadEvent = async () => {
    const response = await axios.get('json/events.json');
    setEvent(response.data);
  }


  useEffect(()=>{

    const loadEvents = async() => {
      const response = await axios.get("json/events.json");
      setEvents(response.data);
    }

    loadEvents();

  },[])

  return (
    <div className="container">
      <h1 className="mt-3">Shop Directory</h1>
      <button onClick={loadShops}>Load Shops</button>
      <ul>
        {
          shops.map((shop, index) => {
            return <li key={index}>{shop}</li>
          })
        }
      </ul>
      <h1>Events</h1>
      {
        events.map((event, index)=>{
          return <div className='card'>
            <div className='card-title'>
              {event.title}
            </div>
            <div>
              {event.date}
            </div>
            <div>
              {event.time}
            </div>
          </div>
        })
      }
    </div>
  );
}

export default App;