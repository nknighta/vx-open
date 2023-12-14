import { NextApiRequest, NextApiResponse } from 'next';


const handler = (req: NextApiRequest, res: NextApiResponse) => {
    const id = req.query;
    const hasbase = () => {
        let S: string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-"
        let N: number = 32;
        return Array.from(Array(N)).map(() => S[Math.floor(Math.random() * S.length)]).join('')
    };
    const api = () => {
        let base = hasbase();
        let S: string = base;
        let N: number = 64;
        return Array.from(Array(N)).map(() => S[Math.floor(Math.random() * S.length)]).join('')
    };
    res.status(200).json(api());
};

export default handler;
