import pg from 'pg'
import dotenv from 'dotenv'


const { Pool}= pg;

export const connectionDB = new Pool

const connection = new Pool({
    connectionString: process.env.DATABASE_URL,
  });