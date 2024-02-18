import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "scripts/prisma";

export default (req: NextApiRequest, res: NextApiResponse) => {
    const data = prisma.aPI.findMany();
    res.status(200).json(data);
};