// write a function to create a users table in your database 
import { Client } from 'pg';
const client = new Client({
    connectionString: "postgresql://neondb_owner:npg_zZ6BtTHWja4p@ep-tight-bonus-a8ytss2k-pooler.eastus2.azure.neon.tech/neondb?sslmode=require&channel_binding=require"
});
async function createUsertable() {
    await client.connect();
    const result = await client.query(`
    CREATE  TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
    `);
    console.log(result);
}
createUsertable();
//# sourceMappingURL=index.js.map