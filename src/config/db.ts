import { PrismaClient } from '../generated/prisma/client.js'
import { PrismaPg } from '@prisma/adapter-pg'
import "dotenv/config";

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL,
  })
  
  const prisma = new PrismaClient({
    adapter,
    log:
      process.env.NODE_ENV === 'development'
        ? ['query', 'info', 'warn', 'error']
        : ['error'],
  })


const connectDB = async () =>{
    try {
        await prisma.$connect();
        console.log("Connected to database");
    } catch (error) {
        console.log("Error connecting to database", error);
        process.exit(1);
    }

}

const disconnectDB = async () =>{
    try {
        await prisma.$disconnect();
        console.log("Disconnected from database");
    } catch (error) {
        console.log("Error disconnecting from database", error);
        process.exit(1);
    }

}

export { prisma, connectDB, disconnectDB };