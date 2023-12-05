import { ethers } from 'ethers';

export const AppHandler = (reqest) => {
    let time = new Date().toLocaleString();
    const apihash = () => {
        let base = 0, i;
        let test = time + "G0435IhAWYNTTnvLYOXs5u";
        for (i = 0; i < test.length; i++) {
            base = test.charCodeAt(i) + ((base << 5) - base);
            base = base & base;
            base |= 0;
        }
        return base;
    }
    const hash = apihash();
    return {
        '12345': reqest,
        time: time,
        hash: hash,
    };
};
