import { useContext } from "react";
import { MyAppContext } from ".";

const GrandChild = () => {
    const { someFunction, key1 } = useContext(MyAppContext);// Since the value passed inside the MyAppContext is an object so we will use object Destructuring
    console.log(someFunction);
    return(
        <div
            style={{
                padding: "2rem",
                backgroundColor: "#FFD9B7"
            }}>
            <h1>GrandChild</h1>
            <p>{key1}</p>
            <button onClick={someFunction}>Call my Func</button>
        </div>
    )
}

export default GrandChild;
