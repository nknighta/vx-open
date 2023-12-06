import { ethers } from 'ethers';

function getRandomHash(max) {
    return Math.floor(Math.random() * max);
}

export const AppHandler = (reqest) => {
    let time = new Date().toLocaleString();
    const hasbase = () => {
        let S = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-"
        let N = 32;
        return Array.from(Array(N)).map(() => S[Math.floor(Math.random() * S.length)]).join('')};
    const apihash = () => {
        let base = 0, i;
        let test = time + "xxts";
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
        hash: hasbase() + hash + hasbase(),
    };
};
