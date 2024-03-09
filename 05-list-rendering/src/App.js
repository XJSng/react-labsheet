import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  const shops = [
    "McDonalds",
    "KFC",
    "Burger King",
    "Chick-fil-A",
    "Five Guys"
  ]

  const events = [
    {
      "title": "Taylor Swift Meet and Greet",
      "date": "21st June 2029",
      "time": "3pm"
    },
    {
      "title": "Lucky Draw",
      "date": "22nd June 2029",
      "time": "5pm"
    },
    {
      "title": "Lion Dance",
      "date": "23rd June 2029",
      "time": "1pm"
    }
  ]

  const temp = [
    <li>McDonalds</li>
  ]

  const renderShops = () => {
const jsxElements = []
for (let s of shops) {
  jsxElements.push(<li className="list-group-item">{s}</li>)
}
return jsxElements

  }

  return (
    <div className="container">
    <h1 className="mt-3">Shop Directory</h1>
    <ul className="list-group">
    {renderShops()}
    </ul>

    <h2 className="mt-3" >Map Method</h2>
    {
        shops.map(function (s) {
          return <div className="card">
            <div className="card-body">
              {s}
            </div>
          </div>
        })
      }

      <h2 className="mt-3">Upcoming Events</h2>
      <p>Advance mapping method</p>
      {
        events.map(function (e) {
          return (<div className="card">
            <div className="card-body">
              <div className="card-title">
                <h4>{e.title}</h4>
              </div>
              <ul>
                <li>Date:{e.date}</li>
                <li>Time:{e.time}</li>
              </ul>

            </div>
          </div>)
        })
      }
    </div>
  );
}

export default App;
