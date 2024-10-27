const Poster = require('../models/poster');

const getAllPosters = async () => {
    return await Poster.findAll();
};

const getPosterById = async (id) => {
    return await Poster.findByPk(id);
};

const createPoster = async (data) => {
    return await Poster.create(data);
};

const updatePoster = async (id, data) => {
    const poster = await Poster.findByPk(id);
    if (poster) {
        return await poster.update(data);
    }
    return null;
};

const deletePoster = async (id) => {
    const poster = await Poster.findByPk(id);
    if (poster) {
        await poster.destroy();
        return true;
    }
    return false;
};

module.exports = {
    getAllPosters,
    getPosterById,
    createPoster,
    updatePoster,
    deletePoster
};