const mongoose = require('mongoose');

const namaHewanSchema = new mongoose.Schema({
    Nama_Hewan: String
});

module.exports = mongoose.models.NamaHewan || mongoose.model('NamaHewan', namaHewanSchema, 'nama_hewan');
