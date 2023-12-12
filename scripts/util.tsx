function getRandomHash(max) {
    return Math.floor(Math.random() * max);
}

export const AppHandler = (reqest) => {
    let time: string = new Date().toLocaleString();
    const hasbase = () => {
        let S: string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-"
        let N: number = 32;
        return Array.from(Array(N)).map(() => S[Math.floor(Math.random() * S.length)]).join('')
    };
    const haldler = () => {

    };
    return {
        time: time,
    };
};
