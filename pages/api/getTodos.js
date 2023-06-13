const Airtable = require('airtable');
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_ID);

const table = base(process.env.AIRTABLE_TABLE_NAME)

// get records id and fields value; use completed value if checked
function getMinifyRecord(record) {
    if (!record.fields.completed) {
        record.fields.completed = false
    }
    return {
        id: record.id,
        fields: record.fields
    }
}

// run data retrieval on each record
function minifyRecords(records) {
    return records.map(record => getMinifyRecord(record))
}

// api response of minified airtable data
export default async (req, res) => {
    const records = await table.select({}).firstPage()

    const minifiedRecords = minifyRecords(records)

    res.statusCode = 200
    res.json(minifiedRecords)
}