import { MyAppContext } from "./index";
import GrandChild from "./GrandChild";
import { useContext } from "react";

const Child = () => {
    const { key2 } = useContext(MyAppContext);
    return (
        <div
            style={{
                padding: "2rem",
                backgroundColor: "#7EAA92"
            }}>
            <h1>Child</h1>
            {key2}
            <GrandChild />
        </div>
    )
}

export default Child;