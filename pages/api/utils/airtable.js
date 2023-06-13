const Airtable = require('airtable');
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_ID);

const table = base(process.env.AIRTABLE_TABLE_NAME)

// get records id and fields value; use completed value if checked
function getMinifiedRecord(record) {
    if (!record.fields.completed) {
        record.fields.completed = false
    }
    return {
        id: record.id,
        // fields: record.fields,
        fields: {
            description: record.fields.description,
            completed: record.fields.completed
        }
    }
}

// run data retrieval on each record
function minifyRecords(records) {
    return records.map(record => getMinifiedRecord(record))
}

export { table, getMinifiedRecord, minifyRecords }