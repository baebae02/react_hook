import './App.css';
import React from "react";
import {useClick} from "./userHooks/useClick";

const App = () => {
    const sayHello = () => console.log("hello");
    const title = useClick(sayHello);
    return (
        <div className="App">
            <h1 ref={title}>Hi</h1>
        </div>
    );
}

export default App;
