const Gen = require('../models/gen');

const getAllGen = async () => {
    return await Gen.findAll();
};

const getGenById = async (id) => {
    return await Gen.findByPk(id);
};

const createGen = async (data) => {
    return await Gen.create(data);
};

const updateGen = async (id, data) => {
    const gen = await Gen.findByPk(id);
    if (gen) {
        return await gen.update(data);
    }
    return null;
};

const deleteGen = async (id) => {
    const gen = await Gen.findByPk(id);
    if (gen) {
        await gen.destroy();
        return true;
    }
    return false;
};

module.exports = {
    getAllGen,
    getGenById,
    createGen,
    updateGen,
    deleteGen
};