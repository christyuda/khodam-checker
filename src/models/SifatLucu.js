const mongoose = require('mongoose');

const sifatLucuSchema = new mongoose.Schema({
    Sifat_Lucu: String
});

module.exports = mongoose.models.SifatLucu || mongoose.model('SifatLucu', sifatLucuSchema, 'sifat_lucu');
