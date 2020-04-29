import React from 'react';
import './weather.css'
const Weather = (props) => {
    return (
        <div className="container text-light">
            {props.error && <h1 className="error">Oops! You may enter a city out of the Earth</h1>}
            {!props.error &&
                (<div className="cards pt-4">
                    <div className="location">
                        <h1>{props.city? `${props.city},`:null} {props.country}</h1>
                    </div>
                    <div className="weatherIcon py-4">
                        <img src={props.URLicon} alt="" />
                    </div>
                    <div className="temp">
                        {props.temp ? <h1 className="py-2">{Math.floor(props.temp - 273)}&deg;C</h1> : null}
                    </div>
                    {minMaxTemp(props.temp_min, props.temp_max)}
                    <h4 className="py-3">{props.description}</h4>
                     {props.advice ?<h4 className="py-3 advice">{props.advice}</h4> : null}
                </div>)
            }
        </div>
    )
}
function minMaxTemp(min, max) {
    if (min > -100 && max > -100) {
        return (
            <h3 className="max-min">
                <span className="px-4">{min}&deg;C</span>
            &harr;
                <span className="px-4">{max}&deg;C</span>

            </h3>
        )
    }
}
export default Weather;
//{/*{props.city}, {props.country}*/
///{Math.floor(props.temp -273)
//props.temp_min,props.temp_max
//props.description