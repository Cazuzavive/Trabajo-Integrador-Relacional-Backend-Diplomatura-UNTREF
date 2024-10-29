const swaggerJsdoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API TrailerFlix',
            version: '1.0.0',
            description: 'Documentación generada con Swagger para la API de plataforma streaming',
        },
        basePath: '/',
        servers: [
            {
                url: 'http://localhost:3000',
            },
        ],
        components: {
            schemas: {
                Actor: {
                    type: 'object',
                    properties: {
                        actor_id: {
                            type: 'integer',
                            description: 'ID único del actor',
                            example: 1,
                        },
                        nombre: {
                            type: 'string',
                            description: 'Nombre del actor',
                            example: 'John',
                        },
                        apellido: {
                            type: 'string',
                            description: 'Apellido del actor',
                            example: 'Doe',
                        },
                    },
                    required: ['nombre', 'apellido'],
                },
                Contenido: {
                    type: 'object',
                    properties: {
                        contenido_id: {
                            type: 'integer',
                            description: 'ID único de la película',
                            example: 1,
                        },
                        titulo: {
                            type: 'string',
                            description: 'Título del contenido',
                            example: 'Gambito de Dama',
                        },
                        resumen: {
                            type: 'text',
                            description: 'Resumen del contenido',
                            example: 'En los cincuenta, una joven de un orfanato descubre que tiene un increíble don para el ajedrez y recorre el arduo camino a la fama mientras lucha contra las adicciones',
                        },
                        busqueda: {
                            type: 'string',
                            description: 'Palabras claves del contenido',
                            example: 'Gambito de Dama, Drama, Ficción, Sucesos, Anya Taylor-Joy, Thomas Brodie-Sangster, Harry Melling, Moses Ingram, Chloe Pirrie, Janina Elkin',
                        },
                        trailer: {
                            type: 'string',
                            description: 'URL del trailer',
                            example: 'https://www.youtube.com/embed/lbleRbyGKL4',
                        },
                        categoria_id: {
                            type: 'integer',
                            description: 'Relaciona el contenido con una categoria',
                            example: 'Serie',
                        },
                        duracion: {
                            type: 'integer',
                            description: 'En el caso de peliculas este campo contiene los minutos de duracion',
                            example: 90,
                        },
                        temporadas: {
                            type: 'integer',
                            description: 'En el caso de series este campo contiene las temporadas',
                            example: 1,
                        },
                        gen_id: {
                            type: 'integer',
                            description: 'Relaciona el contenido con un genero general',
                            example: 'Drama',
                        },
                    },
                    required: ['titulo', 'resumen', 'busqueda', 'trailer', 'categoria_id', 'duracion', 'temporadas', 'gen_id'],
                },
                ActorContenido: {
                    type: 'object',
                    properties: {
                        actor_id: {
                            type: 'integer',
                            description: 'ID del actor',
                            example: 1,
                        },
                        contenido_id: {
                            type: 'integer',
                            description: 'ID del contenido',
                            example: 1,
                        },
                    },
                    required: ['actor_id', 'contenido_id'],
                },
                Categoria: {
                    type: 'object',
                    properties: {
                        categoria_id: {
                            type: 'integer',
                            description: 'ID de la categoria',
                            example: 1,
                        },
                        categoria: {
                            type: 'string',
                            description: 'Categoria del contenido',
                            example: 'pelicula',
                        },
                    },
                    required: ['categoria_id', 'categoria'],
                },
                Gen: {
                    type: 'object',
                    properties: {
                        gen_id: {
                            type: 'integer',
                            description: 'ID del general',
                            example: 1,
                        },
                        gen: {
                            type: 'string',
                            description: 'General del contenido',
                            example: 'Ciencia ficcion',
                        },
                    },
                    required: ['gen_id', 'gen'],
                },
                Genero: {
                    type: 'object',
                    properties: {
                        genero_id: {
                            type: 'integer',
                            description: 'ID del genero',
                            example: 1,
                        },
                        genero: {
                            type: 'string',
                            description: 'Genero del contenido',
                            example: 'Terror',
                        },
                    },
                    required: ['genero_id', 'genero'],
                },
                Poster: {
                    type: 'object',
                    properties: {
                        poster_id: {
                            type: 'integer',
                            description: 'ID del poster',
                            example: 1,
                        },
                        image: {
                            type: 'string',
                            description: 'imagen del poster asociado a un contenido',
                            example: 'poster1.jpg',
                        },
                        contenido_id: {
                            type: 'integer',
                            description: 'ID del contenido asociado',
                            example: 1,
                        },
                    },
                    required: ['poster_id', 'image', 'contenido_id'],
                },
                GeneroContenido: {
                    type: 'object',
                    properties: {
                        genero_id: {
                            type: 'integer',
                            description: 'ID del actor',
                            example: 1,
                        },
                        contenido_id: {
                            type: 'integer',
                            description: 'ID del contenido',
                            example: 1,
                        },
                    },
                    required: ['genero_id', 'contenido_id'],
                },
            },
        },
    },
    apis: ['./routes/*.js'],
}

const swaggerDocs = swaggerJsdoc(swaggerOptions)

module.exports = { swaggerDocs, swaggerUi, }