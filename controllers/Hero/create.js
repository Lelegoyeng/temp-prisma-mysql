const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()
const response = require('../../utils/respons');

exports.create = async (req, res) => {
    try {

        const nama = req.body.nama
        const role = req.body.role


        const hero = await prisma.hero.create({
            data: {
                nama: nama,
                role: role,
            },
        })
        console.log(hero)

        const result = hero
        return response.success("Insert Hero Success", res, result);
    } catch (err) {
        return response.error(
            err.message || 'Invalid request',
            res,
            err.code || 500
        );
    }
}