import React, {useState, useEffect} from"react";
import ReactDOM from "react-dom";

const App = () => {
  const [username, updateUsername] = useState("React Connoisseur");
  const [password, updatePassword] = useState("");
  const [error, setError] = useState(null);

  useEffect( () => {
    let er = (password.length < 5) ? "You must have a password that is at least 5 characters long" : null;
    setError(er);
  }, [password]);

     return(
      <div>
        <h1>Account Creation</h1>
        <p>Please tell us your intended username and password. Your password must be at least 10 characters long.</p>
        <input type="text" value={username} 
        onChange= {(e) => { updateUsername(e.target.value)}}
        placeholder="What'll your username be?"/>
        <input type="password" value={password} onChange={(e)=>{
          updatePassword(e.target.value)}}
          placeholder="What'll your password be?"/>
        {error != null && 
        <p className="error">{error}</p>}
      </div>
     );
        }
     
      ReactDOM.render(<App/>, document.getElementById("root"));
export default App;
