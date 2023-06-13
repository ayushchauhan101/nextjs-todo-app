import { table, getMinifiedRecord, minifyRecords } from "./utils/airtable"

// api response of minified airtable data
export default async (req, res) => {
    try {
        const records = await table.select({}).firstPage()
        const minifiedRecords = minifyRecords(records)
        res.statusCode = 200
        res.json(minifiedRecords)
    } catch (err) {
        res.statusCode = 418
        res.json({ errorMessage: 'something went wrong' })
    }
}