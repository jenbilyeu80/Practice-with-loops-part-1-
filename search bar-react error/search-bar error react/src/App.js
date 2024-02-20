import React, {useState, useEffect} from"react";
import ReactDOM from "react-dom";


const App = () => {
  const [query, updateQuery] = useState("");
  const [tooShort, isTooShort] = useState(false);

  useEffect( () => {
    isTooShort(query.length < 5); },[query]);
    

     return(
      <div>
        <h1>Search Bar</h1>
        <input type="text" value={query} 
        onChange= {(e) => { updateQuery(e.target.value)}} />
        {
        (tooShort) &&  
        <p style={{color:"red"}}>Error: your query is too short!  </p>
        }
      </div>
     );
}
     
      ReactDOM.render(<App/>, document.getElementById("root"));
export default App;
