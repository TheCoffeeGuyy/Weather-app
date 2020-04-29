import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css'
import Weather from './components/weather';
import Form from './components/form';

const key = 'a9bd5533ea44e0f3b142c8c5142a2717';

class App extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         city: '',
         country: '',
         temp: '',
         temp_min: '',
         temp_max: '',
         description: '',
         icon: '',
         error: false,
         advice: ''
      }
   }
   onInvalid = (e) => {
      e.target.setCustomValidity('Please give me a suitable value');
   }
   onInput = (e) => {
      e.target.setCustomValidity('');

   }
   getWeather = async (e) => {
      e.preventDefault();
      let city = e.target.elements.city.value;
      let country = e.target.elements.country.value;
      e.target.reset();
      if (city && country) {
         const adviceAPI = await fetch('https://api.adviceslip.com/advice');
         const adviceData = await adviceAPI.json();
         const apiCall = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${key}`);
         const data = await apiCall.json();
         if (data.cod === 200) {
            console.log(data);
            this.setState({
               city: data.name,
               country: data.sys.country,
               temp: data.main.temp,
               temp_min: data.main.temp_min,
               temp_max: data.main.temp_max,
               description: data.weather[0].description,
               icon: data.weather[0].icon,
               error: false,
               advice: adviceData.slip.advice
            })
         }
         else {
            this.setState({
               error: true
            })
         }
      }
      else {
         this.setState({
            error: true
         })
      }
      
   }

   render() {

      let { city, country, temp_min, temp_max, description, temp, icon, error, advice } = this.state;
      temp_max = Math.floor(temp_max - 273);
      temp_min = Math.floor(temp_min - 273);
      let firstChar = description.charAt(0).toUpperCase();
      let URLicon = `http://openweathermap.org/img/wn/${icon}@2x.png`;
      console.log(URLicon);
      description = firstChar + description.slice(1, description.length);
      return (

         <div className="App">
            <Form loadWeather={this.getWeather} onInvalid={this.onInvalid} onInput={this.onInput}/>
            <Weather city={city} country={country}
               temp={temp}
               temp_min={temp_min}
               temp_max={temp_max}
               description={description}
               URLicon={URLicon}
               error={error}
               advice={advice}
            />
         </div>
      );
   }
}

export default App;
