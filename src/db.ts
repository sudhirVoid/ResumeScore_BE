import { Client } from 'pg'
 
const client = new Client({
  host: 'localhost',
  port: 5433,
  database: 'postgres',
  user: 'postgres',
  password: 'admin',
});

export default client;