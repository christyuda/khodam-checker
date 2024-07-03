const mongoose = require('mongoose');

const namaBarangSchema = new mongoose.Schema({
    Nama_Barang: String
});

module.exports = mongoose.models.NamaBarang || mongoose.model('NamaBarang', namaBarangSchema, 'nama_barang');
