import { ethers } from "ethers";

export const AppHandler = (reqest) => {
    let provider = new ethers.JsonRpcProvider("");  
    let time = new Date().toLocaleString();
    return {
        "12345": reqest,
        "provider": provider,
        "time": time
    }
};