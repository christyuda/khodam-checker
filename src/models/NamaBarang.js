const mongoose = require('mongoose');

const namaBarangSchema = new mongoose.Schema({
    NamaBarang: String
});

module.exports = mongoose.models.NamaBarang || mongoose.model('NamaBarang', namaBarangSchema, 'nama_barang');
