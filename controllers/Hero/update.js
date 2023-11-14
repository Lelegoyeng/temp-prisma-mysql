const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const response = require('../../utils/respons');

exports.update = async (req, res) => {
    try {
        const { nama, role } = req.body;
        const id = parseInt(req.params.id);

        if (!nama) return response.invalidInput('Invalid nama hero', res);
        if (!role) return response.invalidInput('Invalid role hero', res);

        const hero = await prisma.hero.findUnique({
            where: { id: id },
        });

        if (!hero) throw new Error('Hero tidak ditemukan');

        const updatedHero = await prisma.hero.update({
            where: { id: id },
            data: {
                nama: nama,
                role: role,
            },
        });

        const result = updatedHero;
        return response.success('Update Hero Success', res, result);
    } catch (err) {
        return response.error(
            err.message || 'Invalid request',
            res,
            err.code || 500
        );
    } finally {
        await prisma.$disconnect(); // Make sure to disconnect PrismaClient
    }
};
