import { NextApiRequest, NextApiResponse } from 'next';

export function getAll(req: NextApiRequest, res: NextApiResponse) {
    const data = { message: 'Hello from the API!' };
    res.status(200).json(data);
}

export function getSingle(req: NextApiRequest, res: NextApiResponse) {
    const data = { message: 'Single!' };
    res.status(200).json(data);
}