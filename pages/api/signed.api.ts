// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    key?: string,
    uploadURL?: string,
    error?: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    try {
        const { type } = req.query
        const URL = process.env.SIGNED_URL_API
        const Query = '?type=' + type
        const response = await fetch(URL + Query)
        const result = await response.json()
        res.status(200).json({ ...result })
    }
    catch (error) {
        res.status(500).json({ error: 'Something went wrong' })
    }
}