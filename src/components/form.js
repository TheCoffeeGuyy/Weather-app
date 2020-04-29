import React from 'react';
import './form.css';
const Form = props => {
    return (

        <div className="container">
            <form onSubmit={props.loadWeather} onInvalid={props.onInvalid} onInput={props.onInput} name="form">
                <div className="row">

                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 offset-md-2">
                        <input type="text" className="form-contrl" name="city" autoComplete="off" placeholder="City"  required/>
                    </div>

                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        <input type="text" className="form-contrl" name="country" autoComplete="off" placeholder="Country" required/>
                    </div>
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        <button type="submit" className="btn btn-warning mt-3">Get weather</button>
                    </div>
                </div>
            </form>
        </div>
        
    

    );
}
export default Form;