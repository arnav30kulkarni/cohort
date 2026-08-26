import { Client } from 'pg'

const client = new Client({
    connectionString: "postgresql://postgres:mysecretpassword@localhost/postgres"
})

async function createUsersTable() {
    try {
        await client.connect()
        const result = await client.query(`
            CREATE TABLE IF NOT EXISTS USERS (
                id SERIAL PRIMARY KEY,
                username VARCHAR(50) UNIQUE NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL,
                created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
            );
        `)
        console.log('Users table ready')
        console.log(result.command)
    } catch (error) {
        console.error('Error creating users table:', error)
    } finally {
        await client.end()
    }
}

type userdata = {
    username: String,
    email : String,
    password : String
}
// Note: Inserting values like VALUES(`${userdata.username},${userdata.email},${userdata.password}`) is unsafe because the user can attack via sql injection by passing queries like VALUES ("","",""); DELETE * FROM users or something, so the below method is recommended while inserting values to the SQL database

async function insertUserData(userdata:userdata){
    await client.connect();
    const result = await client.query(`
            INSERT INTO users (username,email,password)
            VALUES ($1,$2,$3),[${userdata.username},${userdata.email},${userdata.password}];
        `)
    console.log(result);
}
createUsersTable();
insertUserData({
    username:"arnavk",
    email: "test@gmail.com",
    password:"test123123"
})

