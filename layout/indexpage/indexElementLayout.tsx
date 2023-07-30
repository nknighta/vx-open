import {useEffect, useState} from "react";

export default function IndexElementLayout() {
    const [width, setWidth] = useState<number>(0);
    useEffect(() => {
        setWidth(window.innerWidth);
        window.addEventListener("resize", () => {
            setWidth(window.innerWidth);
        })
    },[width]);
    const padding = width > 968 ? 100 : 20;
    return (
        <div style={{
            fontFamily: `"REM", sans-serif`,
            fontSize: 50,
            wordWrap: "break-word",
            padding : padding,
        }}>
            Low cost and short time <wbr/>
            build Web3 Application for AnyWhere devices.
        </div>
    )
};