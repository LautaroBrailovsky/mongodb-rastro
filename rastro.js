// entrega mongo - rastro

// Ejercicio B1 - carga de datos

db.usuarios.insertMany([
  { _id: ObjectId("660000000000000000000001"), nombre: "Ana García",  email: "ana@rastro.es",   ciudad: "Valencia",  fechaAlta: new Date("2025-03-10"), favoritos: [ObjectId("670000000000000000000008")], valoracionMedia: 0, numValoraciones: 0 },
  { _id: ObjectId("660000000000000000000002"), nombre: "Luis Martín", email: "luis@rastro.es",  ciudad: "Valencia",  fechaAlta: new Date("2024-11-02"), favoritos: [], valoracionMedia: 0, numValoraciones: 0 },
  { _id: ObjectId("660000000000000000000003"), nombre: "Marta Ruiz",  email: "marta@rastro.es", ciudad: "Alicante",  fechaAlta: new Date("2025-06-21"), favoritos: [], valoracionMedia: 5, numValoraciones: 1 },
  { _id: ObjectId("660000000000000000000004"), nombre: "Hugo Sanz",   email: "hugo@rastro.es",  ciudad: "Castellón", fechaAlta: new Date("2026-01-15"), favoritos: [], valoracionMedia: 0, numValoraciones: 0 },
  { _id: ObjectId("660000000000000000000005"), nombre: "Sara López",  email: "sara@rastro.es",  ciudad: "Valencia",  fechaAlta: new Date("2026-09-30"), favoritos: [ObjectId("670000000000000000000001"), ObjectId("670000000000000000000003"), ObjectId("670000000000000000000008")], valoracionMedia: 0, numValoraciones: 0 }
])

db.anuncios.insertMany([
  { _id: ObjectId("670000000000000000000001"), titulo: "Seat Ibiza 2015", descripcion: "Siempre en garaje, ITV pasada.", precio: 6500, categoria: "Coches", estado: "DISPONIBLE", ciudad: "Valencia", fechaPublicacion: new Date("2026-10-01"), visitas: 340,
    vendedor: { id: ObjectId("660000000000000000000002"), nombre: "Luis Martín" },
    fotos: [ { url: "https://img.rastro.es/a1-1.jpg", orden: 1 }, { url: "https://img.rastro.es/a1-2.jpg", orden: 2 } ],
    atributos: { marca: "Seat", modelo: "Ibiza", anio: 2015, km: 98000, combustible: "gasolina" } },
  { _id: ObjectId("670000000000000000000002"), titulo: "Ford Focus 2012", descripcion: "Correa cambiada hace un año.", precio: 4200, categoria: "Coches", estado: "DISPONIBLE", ciudad: "Castellón", fechaPublicacion: new Date("2026-10-12"), visitas: 95,
    vendedor: { id: ObjectId("660000000000000000000004"), nombre: "Hugo Sanz" },
    fotos: [ { url: "https://img.rastro.es/a2-1.jpg", orden: 1 } ],
    atributos: { marca: "Ford", modelo: "Focus", anio: 2012, km: 165000, combustible: "diésel" } },
  { _id: ObjectId("670000000000000000000003"), titulo: "iPhone 13 128 GB", descripcion: "Con funda y cargador.", precio: 380, categoria: "Móviles", estado: "DISPONIBLE", ciudad: "Valencia", fechaPublicacion: new Date("2026-10-20"), visitas: 512,
    vendedor: { id: ObjectId("660000000000000000000001"), nombre: "Ana García" },
    fotos: [ { url: "https://img.rastro.es/a3-1.jpg", orden: 1 }, { url: "https://img.rastro.es/a3-2.jpg", orden: 2 }, { url: "https://img.rastro.es/a3-3.jpg", orden: 3 } ],
    atributos: { marca: "Apple", modelo: "iPhone 13", almacenamientoGB: 128, bateriaPct: 87 } },
  { _id: ObjectId("670000000000000000000004"), titulo: "Samsung Galaxy A52", descripcion: "Pantalla sin rayas.", precio: 150, categoria: "Móviles", estado: "VENDIDO", ciudad: "Alicante", fechaPublicacion: new Date("2026-09-05"), visitas: 210,
    vendedor: { id: ObjectId("660000000000000000000003"), nombre: "Marta Ruiz" },
    fotos: [ { url: "https://img.rastro.es/a4-1.jpg", orden: 1 } ],
    atributos: { marca: "Samsung", modelo: "Galaxy A52", almacenamientoGB: 128, bateriaPct: 80 } },
  { _id: ObjectId("670000000000000000000005"), titulo: "Xiaomi Redmi Note 10", descripcion: "Funciona perfecto.", precio: 90, categoria: "Móviles", estado: "DISPONIBLE", ciudad: "Valencia", fechaPublicacion: new Date("2026-10-22"), visitas: 48,
    vendedor: { id: ObjectId("660000000000000000000002"), nombre: "Luis Martín" },
    fotos: [ { url: "https://img.rastro.es/a5-1.jpg", orden: 1 } ],
    atributos: { marca: "Xiaomi", modelo: "Redmi Note 10", almacenamientoGB: 64, bateriaPct: 91 } },
  { _id: ObjectId("670000000000000000000006"), titulo: "Chaqueta vaquera Levi's", descripcion: "Poco uso.", precio: 25, categoria: "Ropa", estado: "DISPONIBLE", ciudad: "Alicante", fechaPublicacion: new Date("2026-10-25"), visitas: 12,
    vendedor: { id: ObjectId("660000000000000000000003"), nombre: "Marta Ruiz" },
    fotos: [],
    atributos: { talla: "M", marca: "Levi's", genero: "unisex" } },
  { _id: ObjectId("670000000000000000000007"), titulo: "Zapatillas Nike Air", descripcion: "Talla 42, como nuevas.", precio: 40, categoria: "Ropa", estado: "RESERVADO", ciudad: "Valencia", fechaPublicacion: new Date("2026-10-18"), visitas: 77,
    vendedor: { id: ObjectId("660000000000000000000001"), nombre: "Ana García" },
    fotos: [ { url: "https://img.rastro.es/a7-1.jpg", orden: 1 } ],
    atributos: { talla: "42", marca: "Nike", genero: "hombre" } },
  { _id: ObjectId("670000000000000000000008"), titulo: "Mesa de comedor de roble", descripcion: "Para 6 personas.", precio: 120, categoria: "Muebles", estado: "DISPONIBLE", ciudad: "Castellón", fechaPublicacion: new Date("2026-10-26"), visitas: 160,
    vendedor: { id: ObjectId("660000000000000000000004"), nombre: "Hugo Sanz" },
    fotos: [ { url: "https://img.rastro.es/a8-1.jpg", orden: 1 } ],
    atributos: { material: "roble", ancho: 160, fondo: 90, alto: 75 } }
])

db.ofertas.insertMany([
  { _id: ObjectId("680000000000000000000001"), importe: 340, estado: "PENDIENTE", fecha: new Date("2026-10-27"),
    anuncio: { id: ObjectId("670000000000000000000003"), titulo: "iPhone 13 128 GB", precio: 380 },
    comprador: { id: ObjectId("660000000000000000000005"), nombre: "Sara López" } },
  { _id: ObjectId("680000000000000000000002"), importe: 6000, estado: "RECHAZADA", fecha: new Date("2026-10-05"),
    anuncio: { id: ObjectId("670000000000000000000001"), titulo: "Seat Ibiza 2015", precio: 6500 },
    comprador: { id: ObjectId("660000000000000000000001"), nombre: "Ana García" } },
  { _id: ObjectId("680000000000000000000003"), importe: 6200, estado: "PENDIENTE", fecha: new Date("2026-10-26"),
    anuncio: { id: ObjectId("670000000000000000000001"), titulo: "Seat Ibiza 2015", precio: 6500 },
    comprador: { id: ObjectId("660000000000000000000005"), nombre: "Sara López" } },
  { _id: ObjectId("680000000000000000000004"), importe: 150, estado: "ACEPTADA", fecha: new Date("2026-09-10"),
    anuncio: { id: ObjectId("670000000000000000000004"), titulo: "Samsung Galaxy A52", precio: 150 },
    comprador: { id: ObjectId("660000000000000000000004"), nombre: "Hugo Sanz" } },
  { _id: ObjectId("680000000000000000000005"), importe: 35, estado: "ACEPTADA", fecha: new Date("2026-10-27"),
    anuncio: { id: ObjectId("670000000000000000000007"), titulo: "Zapatillas Nike Air", precio: 40 },
    comprador: { id: ObjectId("660000000000000000000002"), nombre: "Luis Martín" } }
])

db.valoraciones.insertOne({
  anuncioId: ObjectId("670000000000000000000004"),
  autor: { id: ObjectId("660000000000000000000004"), nombre: "Hugo Sanz" },
  valoradoId: ObjectId("660000000000000000000003"),
  estrellas: 5, comentario: "Todo perfecto", fecha: new Date("2026-09-15")
})

// tiene que dar 5, 8, 5 y 1
db.usuarios.countDocuments()
db.anuncios.countDocuments()
db.ofertas.countDocuments()
db.valoraciones.countDocuments()



// Ejercicio B2.1 - bici de Hugo (categoria Deporte, no existia)
db.anuncios.insertOne({
  titulo: "Bicicleta de montaña Orbea",
  descripcion: "Revisada en taller.",
  precio: 300,
  categoria: "Deporte",
  estado: "DISPONIBLE",
  ciudad: "Castellón",
  fechaPublicacion: new Date("2026-10-27"),
  visitas: 0,
  vendedor: { id: ObjectId("660000000000000000000004"), nombre: "Hugo Sanz" },
  fotos: [ { url: "https://img.rastro.es/bici-1.jpg", orden: 1 } ],
  atributos: { talla: "L", tipo: "montaña", pulgadasRueda: 29 }
})

// Ejercicio B2.2 - pixel 7
db.anuncios.insertOne({
  titulo: "Google Pixel 7",
  descripcion: "Libre, con caja.",
  precio: 260,
  categoria: "Móviles",
  estado: "DISPONIBLE",
  ciudad: "Valencia",
  fechaPublicacion: new Date("2026-10-28"),
  visitas: 0,
  vendedor: { id: ObjectId("660000000000000000000005"), nombre: "Sara López" },
  fotos: [
    { url: "https://img.rastro.es/pixel-1.jpg", orden: 1 },
    { url: "https://img.rastro.es/pixel-2.jpg", orden: 2 }
  ],
  atributos: { marca: "Google", modelo: "Pixel 7", almacenamientoGB: 128, bateriaPct: 92 }
})

db.anuncios.countDocuments() // 10



// Ejercicio B3.1
db.usuarios.createIndex({ email: 1 }, { unique: true })

// Ejercicio B3.2 - autor + anuncio para que no se pueda valorar 2 veces lo mismo
db.valoraciones.createIndex({ "autor.id": 1, anuncioId: 1 }, { unique: true })

// Ejercicio B3.3
db.anuncios.createIndex({ categoria: 1, precio: 1 })

// Ejercicio B3.4
db.usuarios.getIndexes()
db.valoraciones.getIndexes()
db.anuncios.getIndexes()

// Ejercicio B3.5
// sale IXSCAN y totalDocsExamined 2 -> usa el indice
db.anuncios.find({ categoria: "Coches" }).sort({ precio: 1 }).explain("executionStats")



// Ejercicio B4.1 - email repetido
// E11000 duplicate key error (index email_1)
db.usuarios.insertOne({ nombre: "Ana Copia", email: "ana@rastro.es", ciudad: "Valencia", fechaAlta: new Date(), favoritos: [], valoracionMedia: 0, numValoraciones: 0 })

// Ejercicio B4.2 - hugo valora otra vez
// E11000 tambien, esta vez por el indice de B3.2
db.valoraciones.insertOne({ anuncioId: ObjectId("670000000000000000000004"), autor: { id: ObjectId("660000000000000000000004"), nombre: "Hugo Sanz" }, valoradoId: ObjectId("660000000000000000000003"), estrellas: 1, comentario: "Cambio de opinión", fecha: new Date() })

// Ejercicio B4.3 - vendedor que no existe
// lo guarda sin decir nada!!
db.anuncios.insertOne({ titulo: "Prueba fantasma", precio: 10, categoria: "Libros", estado: "DISPONIBLE", ciudad: "Valencia", fechaPublicacion: new Date(), visitas: 0, vendedor: { id: ObjectId("660000000000000000000099"), nombre: "Nadie" }, fotos: [], atributos: {} })

// Ejercicio B4.4 - precio en texto
// se guarda, pero en el find de abajo la lampara no sale
db.anuncios.insertOne({ titulo: "Prueba lámpara", precio: "75", categoria: "Muebles", estado: "DISPONIBLE", ciudad: "Valencia", fechaPublicacion: new Date(), visitas: 0, vendedor: { id: ObjectId("660000000000000000000001"), nombre: "Ana García" }, fotos: [], atributos: { material: "metal" } })
db.anuncios.find({ precio: { $lt: 100 } }, { titulo: 1, precio: 1, _id: 0 })

// Ejercicio B4.5 - sin $set

db.anuncios.updateOne({ _id: ObjectId("670000000000000000000005") }, { precio: 80 })

// Ejercicio B4.6 - id como string
// devuelve null
db.anuncios.findOne({ _id: "670000000000000000000003" })

// borro los de prueba
db.anuncios.deleteMany({ titulo: /^Prueba/ })



// Ejercicio B5.1
db.anuncios.find(
  { estado: "DISPONIBLE", ciudad: "Valencia" },
  { titulo: 1, precio: 1, _id: 0 }
).sort({ precio: 1 })

// Ejercicio B5.2 - coches < 100000 km
db.anuncios.find({ categoria: "Coches", "atributos.km": { $lt: 100000 } })

// Ejercicio B5.3 - moviles 128gb o mas
db.anuncios.find({ categoria: "Móviles", "atributos.almacenamientoGB": { $gte: 128 } })

// Ejercicio B5.4
db.anuncios.find({ precio: { $gte: 50, $lte: 400 } })

// Ejercicio B5.5 - la i es para que no distinga mayusculas
db.anuncios.find({ titulo: /nike/i })

// Ejercicio B5.6 - por id mejor que por nombre
db.anuncios.find({ "vendedor.id": ObjectId("660000000000000000000002") })

// Ejercicio B5.7 - sin fotos
db.anuncios.find({ fotos: { $size: 0 } })

// Ejercicio B5.8
db.ofertas.find({ "anuncio.id": ObjectId("670000000000000000000001"), estado: "PENDIENTE" })

// Ejercicio B5.9 - quien tiene la mesa en favoritos
db.usuarios.find({ favoritos: ObjectId("670000000000000000000008") }, { nombre: 1, _id: 0 })

// Ejercicio B5.10
db.anuncios.countDocuments({ estado: "VENDIDO" })

// Ejercicio B5.11 - top 3 visitas
db.anuncios.find({}, { titulo: 1, visitas: 1, _id: 0 }).sort({ visitas: -1 }).limit(3)



// Ejercicio B6.1
db.anuncios.aggregate([
  { $group: { _id: "$categoria", total: { $sum: 1 } } },
  { $sort: { total: -1 } }
])

// Ejercicio B6.2
db.anuncios.aggregate([
  { $group: { _id: "$categoria", precioMedio: { $avg: "$precio" } } },
  { $sort: { precioMedio: -1 } }
])

// Ejercicio B6.3
db.anuncios.aggregate([
  { $group: { _id: "$ciudad", total: { $sum: 1 } } },
  { $sort: { total: -1 } }
])

// Ejercicio B6.4 (la de la captura)
db.anuncios.aggregate([
  { $match: { estado: "DISPONIBLE" } },
  { $group: { _id: "$vendedor.nombre", valorEnVenta: { $sum: "$precio" } } },
  { $sort: { valorEnVenta: -1 } }
])

// Ejercicio B6.5
// sale Moviles
db.anuncios.aggregate([
  { $group: { _id: "$categoria", visitasTotales: { $sum: "$visitas" } } },
  { $sort: { visitasTotales: -1 } },
  { $limit: 1 }
])



// Ejercicio B7.1 - foto 4 del iphone
db.anuncios.find({ _id: ObjectId("670000000000000000000003") }, { fotos: 1 })
db.anuncios.updateOne(
  { _id: ObjectId("670000000000000000000003") },
  { $push: { fotos: { url: "https://img.rastro.es/a3-4.jpg", orden: 4 } } }
)

// Ejercicio B7.2
db.anuncios.updateOne(
  { _id: ObjectId("670000000000000000000005") },
  { $inc: { visitas: 1 } }
)
db.anuncios.find({ _id: ObjectId("670000000000000000000005") }, { visitas: 1 })

// Ejercicio B7.3 - favoritos de sara
// pull y addToSet en el mismo campo a la vez da conflicto, por eso van separados
db.usuarios.updateOne(
  { _id: ObjectId("660000000000000000000005") },
  { $pull: { favoritos: ObjectId("670000000000000000000003") } }
)
db.usuarios.updateOne(
  { _id: ObjectId("660000000000000000000005") },
  { $addToSet: { favoritos: ObjectId("670000000000000000000002") } }
)
// si lo ejecutas otra vez sale modifiedCount: 0, no lo duplica
db.usuarios.updateOne(
  { _id: ObjectId("660000000000000000000005") },
  { $addToSet: { favoritos: ObjectId("670000000000000000000002") } }
)
db.usuarios.find({ _id: ObjectId("660000000000000000000005") }, { favoritos: 1 })

// Ejercicio B7.4 - aceptar oferta (2 updates, uno en cada coleccion)
db.ofertas.updateOne(
  { _id: ObjectId("680000000000000000000003") },
  { $set: { estado: "ACEPTADA" } }
)
db.anuncios.updateOne(
  { _id: ObjectId("670000000000000000000001") },
  { $set: { estado: "RESERVADO" } }
)

// Ejercicio B7.5 - coches -10%
db.anuncios.find({ categoria: "Coches" }, { titulo: 1, precio: 1 })
db.anuncios.updateMany({ categoria: "Coches" }, { $mul: { precio: 0.9 } })
db.anuncios.find({ categoria: "Coches" }, { titulo: 1, precio: 1 })   // 5850 y 3780

// Ejercicio B7.6 - cambio de nombre de luis
db.usuarios.updateOne(
  { _id: ObjectId("660000000000000000000002") },
  { $set: { nombre: "Luis M. Martín" } }
)
// en los anuncios sigue el nombre viejo
db.anuncios.find({ "vendedor.id": ObjectId("660000000000000000000002") }, { titulo: 1, "vendedor.nombre": 1 })
// hay que cambiarlo en todas las copias
db.anuncios.updateMany(
  { "vendedor.id": ObjectId("660000000000000000000002") },
  { $set: { "vendedor.nombre": "Luis M. Martín" } }
)
db.ofertas.updateMany(
  { "comprador.id": ObjectId("660000000000000000000002") },
  { $set: { "comprador.nombre": "Luis M. Martín" } }
)
db.valoraciones.updateMany(
  { "autor.id": ObjectId("660000000000000000000002") },
  { $set: { "autor.nombre": "Luis M. Martín" } }
)



// ---- retos ----

// reto 1 - luis valora a ana
db.valoraciones.insertOne({
  anuncioId: ObjectId("670000000000000000000007"),
  autor: { id: ObjectId("660000000000000000000002"), nombre: "Luis M. Martín" },
  valoradoId: ObjectId("660000000000000000000001"),
  estrellas: 4,
  comentario: "Buen trato",
  fecha: new Date("2026-10-30")
})
// ana tenia 0 valoraciones asi que la media pasa a ser 4 directamente
db.usuarios.updateOne(
  { _id: ObjectId("660000000000000000000001") },
  { $set: { valoracionMedia: 4 }, $inc: { numValoraciones: 1 } }
)

// reto 2 - lookup
db.anuncios.aggregate([
  { $lookup: { from: "usuarios", localField: "vendedor.id", foreignField: "_id", as: "vendedorCompleto" } },
  { $project: { titulo: 1, precio: 1, "vendedorCompleto.nombre": 1, "vendedorCompleto.email": 1 } }
])

// reto 4 - validacion del precio
db.runCommand({
  collMod: "anuncios",
  validator: { $jsonSchema: {
    bsonType: "object",
    required: ["precio"],
    properties: {
      precio: { bsonType: "number", minimum: 0 }
    }
  } }
})
// ahora la lampara con "75" da Document failed validation
db.anuncios.insertOne({ titulo: "Prueba lámpara", precio: "75", categoria: "Muebles", estado: "DISPONIBLE", ciudad: "Valencia", fechaPublicacion: new Date(), visitas: 0, vendedor: { id: ObjectId("660000000000000000000001"), nombre: "Ana García" }, fotos: [], atributos: { material: "metal" } })
