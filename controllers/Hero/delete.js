const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()
const response = require('../../utils/respons');


exports.del = async (req, res) => {
    try {
        const id = parseInt(req.params.id);

        const hero = await prisma.hero.findUnique({
            where: { id: id },
        });

        if (!hero) throw new Error('Hero tidak ditemukan');

        await prisma.hero.delete({
            where: { id: id },
        });


        const result = hero
        return response.success("Delete Hero Success", res, result);
    } catch (err) {
        return response.error(
            err.message || 'Invalid request',
            res,
            err.code || 500
        );
    }
}