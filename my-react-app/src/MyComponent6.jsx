import React, {useState, useEffect} from "react";

function MyComponent6(){

    const[width, setWidth] = useState(window.innerWidth);
    const[height, setheight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("Event Listener Added.");

        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("Event Listener Removed");
        }
     },[]);
    window.addEventListener("resize",handleResize);
    console.log("Event Listener Added");

    function handleResize()
    {
        setWidth(window.innerWidth);
        setheight(window.innerHeight);
    }
    return(<>
        <p>Window Width: {width}px</p>
        <p>Window Height: {height}px</p>
    </>);
}

export default MyComponent6;