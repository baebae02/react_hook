import {useRef} from "react";

const useFullscreen = () => {
    const element = useRef();
    const triggerFull = () => {
        if (element.current) {
            element.current.requestFullscreen();
        }
    }
    const exitFull = () => {
        document.exitFullscreen();
    }
    return {element, triggerFull, exitFull};
}
const App = () => {
    const {element, triggerFull, exitFull} = useFullscreen();
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