import { table, getMinifiedRecord } from "./utils/airtable";

export default async (req, res) => {
    // const { id } = req.query.id
    
    // try {
        //     const deletedRecords = await table.destroy([id])
        //     res.statusCode = 200
        //     res.json(getMinifiedRecord(deletedRecords[0]))
    // } catch (err) {
        //     console.log(err)
        //     res.statusCode = 418
        //     res.json({ error: err.message })
        // }
        
    console.log(req.body)
    res.status(200).json({ name: 'Welcome to todo app api endpoint' })
}