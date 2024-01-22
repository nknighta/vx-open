import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req

    switch (method) {
        case 'GET':
            res.status(200).json({ name: 'NkightA' })
            break
        case 'POST':
            // Update or create data in your database
            res.status(200).json({ name: 'John Doe' })
            break
        default:
            res.setHeader('Allow', ['GET', 'PUT'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}