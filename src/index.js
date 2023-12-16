import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createContext } from "react";

export const MyAppContext = createContext();
const myFunc = () => {
  console.log("Hello from my func");
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MyAppContext.Provider value={{
    key1: "value1",
    key2: "value2",
    someFunction: myFunc,
  }}>
    <App />
  </MyAppContext.Provider>);



