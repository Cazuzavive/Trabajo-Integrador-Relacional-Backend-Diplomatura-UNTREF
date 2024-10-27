const Contenido = require('./contenido');
const Poster = require('./poster');

Contenido.hasMany(Poster, { foreignKey: 'contenido_id' });
Poster.belongsTo(Contenido, { foreignKey: 'contenido_id' });
