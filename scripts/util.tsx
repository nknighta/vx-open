

function getRandomHash(max) {
    return Math.floor(Math.random() * max);
}

export const AppHandler = (reqest) => {
    let time: string = new Date().toLocaleString();
    const hasbase = () => {
        let S:string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-"
        let N:number  = 32;
        return Array.from(Array(N)).map(() => S[Math.floor(Math.random() * S.length)]).join('')};
    const apihash = () => {
        let base: number = 0, i;
        let test: string = time + "xxts";
        for (i = 0; i < test.length; i++) {
            base = test.charCodeAt(i) + ((base << 5) - base);
            base = base & base;
            base |= 0;
        }
        return base;
    }
    const hash:number = apihash();
    return {
        '12345': reqest,
        time: time,
        hash: hasbase() + hash + hasbase(),
    };
};
