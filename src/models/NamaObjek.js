const mongoose = require('mongoose');

const namaObjekSchema = new mongoose.Schema({
    NamaObjek: String
});

module.exports = mongoose.models.NamaObjek || mongoose.model('NamaObjek', namaObjekSchema, 'nama_objek');
