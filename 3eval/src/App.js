import "./App.css";
import {useState} from 'react';
import Input from "./Components/Input";
import UserCard from "./Components/UserCard";
import useDarkMode from "./hooks/useDarkMode";
function App() {
  const [isDarkMode, toggleDarkMode] = useDarkMode();
 const [text,setText]=useState("");

console.log(isDarkMode);
  
  //import the useDark mode hook here

  return (
    // add the dark-mode class name along with App depending on the boolean value of isDarkMode
    <div data-testid="app-component" className="App" style={{background:isDarkMode===false?'#fff':"#000"}}>
      {/* to toggle the darkMode value of the application */}
      {/* Default value: Dark.  */}
      <button onClick={toggleDarkMode}>{isDarkMode==false?"Dark":"Light"}</button>
       <UserCard  imageURL={'https://images.unsplash.com/photo-1485893086445-ed75865251e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBlb3BsZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=1400&q=60'}
       name="User 1" avatarShape={'round'}
        title='Software Developer'
        description='Testing Description'
        backgroundColor='red'
         />
      {/* use the UserCard component here */}

      <br />
      {/* use the Input component here */}
      <Input type="text" size="md" variant="outline" value={text} handleChange={(e)=>setText(e.target.value)} />

      <div data-testid="input-value">Input value is {text}</div>
    </div>
  );
}

export default App;

/*
imageURL for testing;
1. https://images.unsplash.com/photo-1485893086445-ed75865251e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBlb3BsZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=1400&q=60
2. https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60
*/
