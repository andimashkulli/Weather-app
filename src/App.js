import React from "react";
import "./index.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faLocationDot} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import axios from 'axios';


//apikey : f41340a756b76058331853edd1bf77c7

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=f41340a756b76058331853edd1bf77c7`;

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
       
      })
      setLocation('')
    }
  }

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday,", "Monday,", "Tuesday,", "Wednesday,", "Thursday,", "Friday,", "Saturday,"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }


    return(
      
      <div className={(typeof data.main != "undefined") ? ((data.main.temp > 16) ? 'bg-warm absolute top-0 right-0 left-0  bottom-0 m-auto  w-72 h-100  rounded-4 bg-cover shadow-shadowColor shadow-2xl transition-all' : 'bg-cold absolute top-0 right-0 left-0 bottom-0 m-auto  w-72 h-100 rounded-4 bg-cover shadow-shadowColor shadow-2xl transition-all') : 'absolute top-0 right-0 left-0 bottom-0 m-auto  w-72 h-100 bg-cold rounded-4 bg-cover shadow-shadowColor shadow-2xl transition-all'}>
     
      <div className="gradient bg-gradient-to-t from-black to-transparent w-72 h-97 opacity-30 inline">
      </div>
      <div className="section1 flex ml-8 mt-12 items-center justify-start space-x-3  ">

      <FontAwesomeIcon icon={faLocationDot} className="text-white scale-125  opacity-85" />
      <h6 className="text-textColor3   text-sm">{data.name}</h6> 
     
   
    </div>
   <div className="section5 flex justify-start items-end">
    <h1 className="text-headerColor text-8xl pt-16  font-sans font-medium ">   {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}</h1>
   
   </div>
   <div className="section4 flex flex-col justify-center text-center items-center">
   <h6 className="text-white pt-44 text-xss font-semibold">{dateBuilder(new Date())}</h6>
   <input type="text" formMethod="post" 
     value={location}
     onChange={event => setLocation(event.target.value)}
     onKeyPress={searchLocation}  
     placeholder="Search..."
   className=" mt-4 w-52 h-10 rounded-md text-sm pl-2 bg-glass border-sm border-textColor2 border-opacity-40 backdrop-blur-sm text-textColor2  focus:outline-none focus:placeholder:opacity-0 placeholder:transition-all placeholder:text-textColor2"/>
           {data.weather ? <h6 className="text-textColor2  font-medium text-sm pt-8 ">{data.weather[0].main}</h6> : null}   
   </div>
 
 
      </div>

       );

    }
export default App;

