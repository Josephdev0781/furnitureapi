import mysql2 from 'mysql2/promise'

const options = {
    host: process.env.AIVEN_HOST,
    port: process.env.AIVEN_PORT,
    user: process.env.AIVEN_USER,
    password: process.env.AIVEN_PASSWORD,
    database: process.env.AIVEN_DB,
}
export const db = mysql2.createPool(process.env.AIVEN_CONNECTION_STRING || options)

export const testDB = async () => {
    console.log("Trying to connect to Database...")
    try {
        const [date] = await db.query('SELECT NOW AS time')
        console.log('Database connection successful. Current time: ', date[0].time)
        return true
    } catch (error) {
        console.error('Database connection error:', error)
        return false
    }
}

testDB()
    .then(success => {
        if (!success) {
            console.error('Exiting application due to database connection failure.')
            process.exit(1)
        }
    })