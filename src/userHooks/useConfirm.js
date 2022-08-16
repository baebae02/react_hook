export const useConfirm = (message = "", onConfirm, onCancle) => {
    if (!onConfirm && typeof onConfirm !== "function") {
        return;
    }
    if (onCancle && typeof onCancle !== "function") {
        return;
    }
    const confirmAction = () => {
        if (window.confirm(message)) {
            onConfirm();
        } else {
            onCancle();
        }
    }
    return confirmAction;
}

/*
* const App = () => {
    const deleteWorld = () => console.log("Delete the world...");
    const abort = () => console.log("Abort");
    const confirmDelete = useConfirm("Are you sure?", deleteWorld, abort);
    return (
        <div className="App">
            <button onClick={confirmDelete}>Delete the World!</button>
        </div>
    );
}

export default App;
* */
