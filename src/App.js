import {useFullscreen} from "./userHooks/useFullscreen";

const App = () => {
    const callback = (isFull) => {
        console.log(isFull ? "We are Full" : "We are Small");
    }
    const {element, triggerFull, exitFull} = useFullscreen(callback);
    return (
        <div className="App" style={{ height: "1000vh"}}>
            <div ref={element}>
                <img
                    src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAyMjhfMTE5%2FMDAxNjQ2MDU4NzUyMDMw.JQYQJTbUCUIBzvxgvi6ABRZV7TJD-CuBATDKFgbpYxgg.kmbsip7Kk34GE9ipvONn0v_RYttfweVNbqnoGjJ67nEg.JPEG.ahk1226%2FIMG_2630.JPG&type=sc960_832"
                    height="500px"
                    alt=""
                />
                <button onClick={exitFull}>Exit Full</button>
            </div>
            <button onClick={triggerFull}>Full Screen</button>
        </div>
    );
};

export default App;