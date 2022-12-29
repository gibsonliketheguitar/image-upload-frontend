// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { T_PhotoCard } from 'components/PhotoList/card'
import { StoreSharp } from '@mui/icons-material'

type Data = {
    data?: any,
    size?: number
    message?: string,
    error?: string,
}

const store: T_PhotoCard[] = []

export async function getData() {
    return store
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.method === 'PUT') {
        const { title, key } = JSON.parse(req.body)
        store.push({
            title,
            imgURL: process.env.BUCKET_URL + '/' + key
        })
        res.status(200).json({ message: 'image uploaded' })
    }
    else if (req.method === 'GET') {
        const data = await getData()
        res.status(200).json({ data, size: store.length })
    }
}
