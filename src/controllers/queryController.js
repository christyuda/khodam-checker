const NamaHewan = require('../models/NamaHewan');
const NamaBarang = require('../models/NamaBarang');
const NamaObjek = require('../models/NamaObjek');
const NamaBenda = require('../models/NamaBenda');
const NamaMakanan = require('../models/NamaMakanan');
const SifatLucu = require('../models/SifatLucu');

const postQuery = async (req, res) => {
    try {
        // Randomly select one of the collections
        const collections = [NamaHewan, NamaBarang, NamaObjek, NamaBenda, NamaMakanan];
        const randomCollection = collections[Math.floor(Math.random() * collections.length)];
        
        // Fetch a random document from the selected collection
        const count = await randomCollection.countDocuments();
        if (count === 0) {
            return res.status(404).json({ success: false, message: 'No documents found in the selected collection' });
        }

        const randomIndex = Math.floor(Math.random() * count);
        const randomDocument = await randomCollection.findOne().skip(randomIndex);

        if (!randomDocument) {
            return res.status(404).json({ success: false, message: 'No document found at the random index' });
        }

        // Fetch a random document from the SifatLucu collection
        const sifatLucuCount = await SifatLucu.countDocuments();
        if (sifatLucuCount === 0) {
            return res.status(404).json({ success: false, message: 'No documents found in the SifatLucu collection' });
        }

        const randomSifatLucuIndex = Math.floor(Math.random() * sifatLucuCount);
        const randomSifatLucu = await SifatLucu.findOne().skip(randomSifatLucuIndex);

        if (!randomSifatLucu) {
            return res.status(404).json({ success: false, message: 'No document found at the random index in SifatLucu collection' });
        }

        // Determine the field name dynamically
        const documentObj = randomDocument.toObject();
        const fields = ['Nama_Hewan', 'Nama_Barang', 'Nama_Objek', 'Nama_Benda', 'Nama_Makanan'];
        const randomFieldName = fields.find(field => documentObj[field] !== undefined);

        if (!randomFieldName) {
            return res.status(500).json({ success: false, message: 'Failed to find a valid field in the document' });
        }

        const randomFieldValue = documentObj[randomFieldName];

        // Construct response
        const response = `${randomFieldValue} ${randomSifatLucu.Sifat_Lucu}`;

        res.json({ success: true, response });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed to fetch data from MongoDB', error: err.message });
    }
};

module.exports = {
    postQuery
};
