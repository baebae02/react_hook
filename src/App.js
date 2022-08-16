import { useEffect } from "react";

const useBeforeLeave = onBefore => {

    const handle = event => {
        console.log(event);
        const { clientY } = event;
        if (clientY) {
            onBefore();
        }
    };
    useEffect(() => {
        if (typeof onBefore === "function") {
            document.addEventListener('mouseleave', handle);
            console.log('event enroll');
            return () => document.removeEventListener('mouseleave', handle);
        }
    }, []);
};

export default function App(props) {
    useBeforeLeave(() => console.log("Plz"));
    return (
        <div className="App">
            <div>App</div>
        </div>
    );
};
