import { NextApiRequest, NextApiResponse } from 'next';
import { AppHandler } from 'scripts/util';

const ether = () => {
    return 'ok';
};
const handler = (req: NextApiRequest, res: NextApiResponse) => {
    const id = req.query;
    const cwstatus = AppHandler(id);
    const { addres, } = req.query;
    const x = ether();
    res.status(200)
        .json(
            {
                status: x,
                connect: cwstatus
            }
        );
}

export default handler;