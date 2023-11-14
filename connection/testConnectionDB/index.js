const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const testConnectionDB = async () => {
    try {
        await prisma.$connect();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    } finally {
        await prisma.$disconnect();
    }
}

module.exports = testConnectionDB;
