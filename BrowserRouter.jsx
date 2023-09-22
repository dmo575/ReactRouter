import { createContext, useState, useEffect } from "react";


export const BrowserContext = createContext();


function BrowserRouter({children}) {

    const [currURL, setURL] = useState(new URL(window.location.href));

    useEffect(() => {

        function handleBackForthButtons(e) {

            e.preventDefault();

            setURL(new URL(window.location.href));
        };

        window.addEventListener('popstate', handleBackForthButtons);

        return () => {
            window.removeEventListener('popstate', handleBackForthButtons);
        };

    }, []);

    return (
        <BrowserContext.Provider value={{currURL, setURL}}>
        {children}
        </ BrowserContext.Provider>
    );

}

export default BrowserRouter;