// Convert the variable App into an ES6 arrow function that returns the same JSX.  Make sure the JSX returned by APP remains unmodified.

import React from "react";
import ReactDOM from "react-dom";

const App = () => {
    return (
        <div> 
            <h1>Did you know?</h1>
            <p>Adult sea otters typically weigh between 14 and 45 kg. </p>
        </div>
    );
}
ReactDOM.render(
    <APP />,
    document.getElementById("root")
);
export default App; 

// Add a new props argument to the CustomButton Functional Component.  Have CustonButton return a <button> with its text set to the value of props.text,

import React from "react";
import ReactDOM from "react-dom";

export const CustomButton = () => {
    return (
            <button>
                {props.text}
            </button>
        

    );
}

ReactDOM.render(
    <CustomButton text="Log In" />,
    document.getElementById=("root")

);

// Observe the use of ReactDOM.render(). It sends the JSX attribute hours to the Calendar component.  Add the proper syntax inside of the span element
// of the Calendar component so that, when <Calendar> is CanvasRenderingContext2D, it prints the avalibility for Mr. Finksberg.

import React from "react";
import ReactDOM from "react-dom";

export const Calendar = (props) => {
    return (
        <div>
            <h3>Mr. Finksberg's Availability</h3>
            <p>
                <strong>Mon-Fri:</strong>
                <span>{props.hours}</span>
            </p>
        </div>
    );
}

ReactDOM.render(
    <Calendar hours="10am - 4pm" />,
    document.getElementById("root")
);