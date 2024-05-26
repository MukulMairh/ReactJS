import logo from './logo.svg';
import './App.css';
import { createContext, useState } from 'react';
import Form from './components/Form';
import Post from './components/Post'; // Ensure the case matches the filename

export const ThemeContext = createContext("");
export const CurrentUserContext = createContext("");

function App() {
  const [theme, setTheme] = useState("light");
  const [currentUser, setCurrentUser] = useState("");

  const handleChange = (event) => {
    setTheme(event.target.checked ? "dark" : "light");
  }

  const currentUserContext = { currentUser, setCurrentUser };

  return (
    <div>
      <ThemeContext.Provider value={theme}>
        <CurrentUserContext.Provider value={currentUserContext}>
          <Form />
          <Post /> {/* Ensure Post component is included inside the provider */}
        </CurrentUserContext.Provider>
      </ThemeContext.Provider>
      <input type='checkbox' onChange={handleChange} />Use Dark Theme
    </div>
  );
}

export default App;
