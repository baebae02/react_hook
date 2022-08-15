import './App.css';
import React from "react";
import {useInput} from "./userInput";

const App = () => {
    const maxLen = value => !value.includes("@");
    const name = useInput('bae', maxLen);
    return (
        <div className="App">
            <p>Hello</p>
            <input placeholder="name" {...name} />
        </div>
    );
}

export default App;
