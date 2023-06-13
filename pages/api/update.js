import { table, getMinifiedRecord } from "./utils/airtable";

export default async (req, res) => {
    const { id, fields } = req.body

    try {
        const updatedRecords = await table.update([
            { id, fields }
        ])

        res.statusCode = 200
        res.json(getMinifiedRecord(updatedRecords[0]))
    } catch (err) {
        console.log(err)
        res.statusCode = 418
        res.json({ errorMessage: err.message })
    }
}