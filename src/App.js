import { useState, useEffect } from "react";

import "./App.css";

const App = () => {
    const name = "Ani";
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(100);
    }, []); // When the dependencies array is empty, the useEffect hook only activates upon the component's creation

    return (
        <div className="App">
            <h1>Hello, {name}!</h1>
            <button
                onClick={() => {
                    setCount((prevCount) => prevCount - 1);
                }}
            >
                -
            </button>
            <span> {count} </span>
            <button
                onClick={() => {
                    setCount((prevCount) => prevCount + 1);
                }}
            >
                +
            </button>
        </div>
    );
};

export default App;
