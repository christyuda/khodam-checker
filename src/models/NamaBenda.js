const mongoose = require('mongoose');

const namaBendaSchema = new mongoose.Schema({
    NamaBenda: String
});

module.exports = mongoose.models.NamaBenda || mongoose.model('NamaBenda', namaBendaSchema, 'nama_benda');
