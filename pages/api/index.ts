import { NextApiRequest, NextApiResponse } from 'next';
import { AppHandler } from 'scripts/util';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    const id = req.query;
    const cwstatus = AppHandler(id);
    res.status(200).json({
        name: 'varius inc.',
        connect: cwstatus
    });
};

export default handler;
