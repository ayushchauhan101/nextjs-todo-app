import { table, getMinifiedRecord, minifyRecords } from "./utils/airtable"

// api response of minified airtable data
export default async (req, res) => {
    const records = await table.select({}).firstPage()

    const minifiedRecords = minifyRecords(records)

    res.statusCode = 200
    res.json(minifiedRecords)
}