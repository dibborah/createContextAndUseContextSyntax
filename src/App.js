// prop drilling

// ------ context wrapper value = {} -------

// component
//    |
// child
//    |
// grand child

// ------ context wrapper end -------

// context 

// to avoid prop drilling we use context

// how to use Context ?
// part 1
// step 1 : import createContext from React
// step 2 : create context outside the component (start w/ capital letter)// Hum usually context ko function ke bahar h create karte hain kiuki humme isko use karna padta hain puuree function main
// step 3 : wrap application in context_name.Provider

// part 2
// step 1: import useContext
// step 2: import the context_name defined or created using createContext()
// Step 3: wrapped the defined context_name inside the useContext() and store the value inside a varible or may also destructure the value

// Doo kam hote hain :
// part 1. provider
// part 2. consume

// We wrap the defined context create using the createContext inside the Most parent component inside which lies the child components, grandChild components and the great grand child components
// So the value passed in the defined context name provider is accessible throughout the children and grandChildren and greatGrandChildren and so on and so fourth

// # So we usually wrap the context inside the index.js file b/c the most supreme parent the App.js lies there inside which lies all the other components used throughout the Application

import MyComponent from "./MyComponent";

// const MyAppContext = createContext();
// export const MyAppContext = createContext();// 1. Export the MyAppContext this way , Or

const App = () => {
  return (
    // <MyAppContext.Provider value={myFunc}>
      <div
        style={{
          padding: "2rem",
          backgroundColor: "#C8B4E2",
          height: "100vh"
        }}>
        <h1>App</h1>
        <MyComponent/>
      </div>
  )
}

export default App;
// export {MyAppContext}; // 2. This way
