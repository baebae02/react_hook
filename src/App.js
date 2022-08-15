import './App.css';
import React from "react";
import {useTitle} from "./userHooks/useTitle";


const App = () => {
    const titleUpdater = useTitle("loading...");
    setTimeout(() => titleUpdater("Home"), 5000);
    return (
        <div className="App">

        </div>
    );
}

export default App;
