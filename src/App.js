import './App.css';
import MyCalendar from './components/Calendar'
import Signinsignout from './components/Signinsignout'
import Eventscomponent from './components/Eventscomponent'
import { useState } from 'react';
import ApiCalendar from "react-google-calendar-api";

const App = () => {
  const [sign, setsign] = useState(ApiCalendar.sign)

  return (
    <div className="App">
      <Signinsignout setsign={setsign} sign={sign} ApiCalendar={ApiCalendar}/>
      <div style={{display:'grid', gridTemplateColumns: '1fr 5fr'}}>
      {sign && <Eventscomponent />}
      {sign && <MyCalendar />}
      </div>
    </div>
  );
}

export default App;

