const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()
const response = require('../../utils/respons');

exports.get = async (req, res) => {
    try {
        const hero = await prisma.hero.findMany();

        const result = hero
        return response.success("Get Hero Success", res, result);
    } catch (err) {
        return response.error(
            err.message || 'Invalid request',
            res,
            err.code || 500
        );
    }
}