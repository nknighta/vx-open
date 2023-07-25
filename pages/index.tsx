import React from "react";
import ThreeBox from "../components/threebox";
import VARIUSHeader from "../components/header";
export default function Index() {
        
    return (
        <>
            <VARIUSHeader/>
            <div style={{
                display: "flex",
                justifyContent: "center",
                position: "relative",
                color: "black",
                height: "600px",
            }}>
                <div style={{
                    position: "absolute",
                    width: "100%",
                }}>
                    <ThreeBox />
                </div>
                <div style={{
                    position: "absolute",
                    width: "100%",
                    height: "50vh",
                    fontSize: "4.3rem",
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    padding: 50,
                    margin: 50,
                    color: "#fff"
                }}>
                    Welcome Web3 development.
                </div>
            </div>
       </>
    )
}
