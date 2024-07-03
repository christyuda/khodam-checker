const mongoose = require('mongoose');

const namaMakananSchema = new mongoose.Schema({
    NamaMakanan: String
});

module.exports = mongoose.models.NamaMakanan || mongoose.model('NamaMakanan', namaMakananSchema, 'nama_makanan');
