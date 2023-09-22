import { useContext } from "react";
import { BrowserContext } from "./BrowserRouter";


function Link({children, path}) {

    const {currURL, setURL} = useContext(BrowserContext);

    function handleClick() {
        window.history.pushState({}, '', path);
        setURL(new URL(window.location.origin + path));
    };

    return <a onClick={handleClick}>{children}</a>
}

export default Link;