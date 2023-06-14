import { table, getMinifiedRecord } from "./utils/airtable";

export default async (req, res) => {
    const { id } = req.body

    try {
        const deletedRecords = await table.destroy([id])
        res.statusCode = 200
        res.json(getMinifiedRecord(deletedRecords[0]))
    } catch (err) {
        console.log(err)
        res.statusCode = 418
        res.json({ error: err.message })
    }
}