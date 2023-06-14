import { table, getMinifiedRecord } from "./utils/airtable";

export default async (req, res) => {
    const { id } = req.body

    try {
        const foundRecord = await table.find(id)
        res.statusCode = 200
        res.json(getMinifiedRecord(foundRecord))
    } catch (err) {
        console.log(err)
        res.statusCode = 418
        res.json({ errorMessage: err.message })
    }
}