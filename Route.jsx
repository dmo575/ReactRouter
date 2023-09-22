import { useContext, useEffect } from "react";
import { BrowserContext } from "./BrowserRouter";

function Route({children, path}) {

    const {currURL, setURL} = useContext(BrowserContext);

    if(path === currURL.pathname) {
        return (
            <>
            {children}
            </>
        );
    }

    return null;
}

export default Route;