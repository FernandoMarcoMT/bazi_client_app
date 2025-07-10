// pages/api/submit-user.ts
import type { NextApiRequest, NextApiResponse } from 'next';
// import { UserData } from '../../types/user';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        // const userData: UserData = req.body;
        const userData: any = req.body;


        // Here, you can process the data (e.g., save to a database)
        console.log('Received user data:', userData);

        // Simulate a successful response
        res.status(200).json({ message: 'User data received successfully', data: userData });
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}