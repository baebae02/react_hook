import {useNotification} from "./userHooks/useNotification";

const App = () => {
    const triggerNoti = useNotification("can I change your noti?", { body: "It's me"
    });
    return (
        <div className="App" style={{ height: "1000vh"}}>
            <button onClick={triggerNoti}>Hello</button>
        </div>
    );
};

export default App;