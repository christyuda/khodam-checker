const mongoose = require('mongoose');

const namaObjekSchema = new mongoose.Schema({
    Nama_Objek: String
});

module.exports = mongoose.models.NamaObjek || mongoose.model('NamaObjek', namaObjekSchema, 'nama_objek');
