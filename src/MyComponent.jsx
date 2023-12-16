import Child from "./Child";

const MyComponent = () => {
    return (
        <div
            style={{
                padding: "2rem",
                backgroundColor: "#9ED2BE"
            }}>
            <h1>MyComponent</h1>
            <Child />
        </div>
    )
}

export default MyComponent;