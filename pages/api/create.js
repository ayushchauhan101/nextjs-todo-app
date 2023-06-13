import { table } from "./utils/airtable"

// create a respond with new record
export default async (req, res) => {
    const { description } = req.body

    try {
        // send record to be saved
        const createdRecords = await table.create([
            { fields: { description } }
        ])

        // get newly created record's details 
        const createdRecord = {
            id: createdRecords[0].id,
            fields: createdRecords[0].fields
        }

        res.statusCode = 200
        res.json(createdRecord)
    } catch (err) {
        console.log(err)
        res.statusCode = 418
        res.json({ errorMessage: 'something went wrong' })
    }
}