const mongoose = require('mongoose');

const namaMakananSchema = new mongoose.Schema({
    Nama_Makanan: String
});

module.exports = mongoose.models.NamaMakanan || mongoose.model('NamaMakanan', namaMakananSchema, 'nama_makanan');
