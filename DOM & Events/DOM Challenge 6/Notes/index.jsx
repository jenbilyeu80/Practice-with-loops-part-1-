//Add a <span> element to the greeting variable with the text Welcome Home

import React from "react";

export const greeting =(
    <span>(Welcome Home)</span> );

// Convert the App class from a functional Component into a Class Comoinent Modify App so that it returns the provided JSX with render().

import React from "react";
import { ReactDOM } from "react-dom";
    

class App extends React.Component{
    render(){
        return (
            <div>
                <h3>Top Scores</h3>
                <ol>
                    <li>Sarah: 50 Points </li>
                    <li>Anna: 48 Points  </li>
                    <li>Mark: 12 Points </li>
                </ol>
            </div>
        );
    }
}
ReactDOM.render(
    <App />,
    document.getElementById("root")
);
export default App; 


// Complete the <a> tag inside render() by accessing and incorporating the appropriate property url into the href attribute

import React from "react";
import ReactDom from "ReactDOM"

export default class App extends
React.Component{
    constructor(props){
        super(props);
    }
    renders(){
        return (
            <div>
                <h2>Want to learn more about the Zoo?</h2>
                <p>You can visit us online at the below link?  Our websites has a ton of helpful resources and information, like our featured 
                    'Animal of the month' and Zoo hours! 
                </p>
                <a href={this.props.url}>
                    Click here to visit!
                </a>
            </div>
        );
    }
}
ReactDom.render(
    <App url="htpps://getmimo.com/"/>,
    document.getElementById("root")
);

// Modify the constructor() of MYVideoPlayer so that the component can accept props.  Complete the this.props code inside render() 
// based on the attributes provided by <MyVideoPlayer> in REactDOM.render().


import React from "react";
import ReactDom from "ReactDOM"

export default class MyVideoPlayer
extends React.Component{
    constructor(props){
    super(props);
}
render() {
    const title = this.props.title;
    const author =this.props.author;
    const thumb = this.props.thumbnail;
    const publish= this.props.datePublished;
    const views = this.props.views;
    return(
        <div>
            <h2>{title}</h2>
        <div className= "previewWindow"> 
        <img src = {thumb} alt={title} />
        <img className="play" src="https://mimo.app/i/player-button-play.png"/>
        </div>
        <h4>Video Details: </h4>
        <p className="views"> {views} views</p>
        <p className="creator">By: {author}</p>
        <p className="publish">Published:{publish}</p>
        </div>
    );
}
}
ReactDom.render(
    <MyVideoPlayer title="the Matrices: A Review"
    author= "ChrisReviews"
    thumbnail="https://mimo.app/i/chris.png"
    datePublished="04/09/2022"
    views={142930} />,
    document.getElementById("root")
);

// Modify incrementCount() so that the state value coount is incremneted by 10


import React from "react";
import ReactDom from "ReactDOM"

export default class Counter extends React.Component{
constructor(){
    super();
    this.state ={
        count:0
    }
}
compenentDidMount(){
    this.incrementCount();

}
incrementCount = () => {
    this.state.count+10
}

render(){
    return(
        <div>
            <p>The count is currently:</p>
            <h1>{this.state.count}</h1>
            </div>
    );
}
}

ReactDOM.render(
    <Counter />,
    document.getElementById("root")
);

/*The component Basket has an udpate method updateFruit() that adds a newFruit into the state array fruitBasket.  Modify onClick in the <button> so that,
 when clicked, it will add strawberries to the fruit <basket></basket*/


import React from "react";
import ReactDom from "ReactDOM"

export default class Basket extends React.Component {
    constructor (){
        super();
        this.state ={
            fruitBasket:["apple", "oranges", "bananas"]

        };
    }
    updateFruit = (newFruit) => {
        this.setState(prevState => ({fruitBasket:
            prevState.fruitBasket.concat(newFruit)
    }));
}
render(){
    return (
        <div>
            <ul id="fruits">
                {this.state.fruitBasket.map(fruit, i => {
                    return (
                        <li key={"fruit" +i}>{fruit}</li>
                    );
                })}
                </ul>
                <button id="add_more" onClick={() =>
                this.updateFruit("strawberries")
            }
            >
                Add More Strawberries!
            </button>
        </div>
    );
}
}
ReactDom.render(
    <Basket />,
    document.getElementById("root")
);

/*Complete the code so that any changes to your favorite quote is rendered and display in the first<p> element, and any changes to the source
of that quote is rendered and displayed in the second <p> element.*/


import React from "react";
import ReactDom from "ReactDOM"

export default class App extends
React.Component{
    constructor(props){
    super(props);
    this.state ={
        favoriteQuote:"",
        book:""
    };
}
handleFavoriteQuoteInput = (e) => {
    this.setState({favoriteQuote:e.target.value})
}
handleBookInput = (e)=>{
    this.setState({book:e.target.value});
}
render(){
    return(
        <form>
            <h1>My Favorite Quote</h1>
            <p className="quote">{this.state.favoriteQuote}</p>
            <input 
            id="quoteInput"
            type="text"
            placeholder="Typeth thy quote here..."
            onChange={this.handleFavoriteQuoteInput} />
            <hr />
            <h3>This comes from the book/story called:</h3>
            <p className ="book">{this.state.book}</p>
            <input 
            id="bookInput"
            type="text"
            placeholder="Where did it come from?"
            onChange={this.handleBookInput} />

        </form>
    );
}
}
ReactDOM.render(
    <App />,
    document.getElementById("root")
);

