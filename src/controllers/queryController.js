const NamaHewan = require('../models/NamaHewan');
const NamaBarang = require('../models/NamaBarang');
const NamaObjek = require('../models/NamaObjek');
const NamaBenda = require('../models/NamaBenda');
const NamaMakanan = require('../models/NamaMakanan');
const SifatLucu = require('../models/SifatLucu');

const fetchRandomDocument = async () => {
    const collections = [NamaHewan, NamaBarang, NamaObjek, NamaBenda, NamaMakanan];
    while (true) {
        const randomCollection = collections[Math.floor(Math.random() * collections.length)];
        const count = await randomCollection.countDocuments();
        if (count > 0) {
            const randomIndex = Math.floor(Math.random() * count);
            const randomDocument = await randomCollection.findOne().skip(randomIndex);
            if (randomDocument) {
                const documentObj = randomDocument.toObject();
                const fields = ['Nama_Hewan', 'Nama_Barang', 'Nama_Objek', 'Nama_Benda', 'Nama_Makanan'];
                const randomFieldName = fields.find(field => documentObj[field] !== undefined);
                if (randomFieldName) {
                    return { document: randomDocument, fieldName: randomFieldName };
                }
            }
        }
    }
};

const fetchRandomSifatLucu = async () => {
    const sifatLucuCount = await SifatLucu.countDocuments();
    if (sifatLucuCount > 0) {
        const randomSifatLucuIndex = Math.floor(Math.random() * sifatLucuCount);
        return await SifatLucu.findOne().skip(randomSifatLucuIndex);
    }
    return null;
};

const postQuery = async (req, res) => {
    try {
        const { document: randomDocument, fieldName: randomFieldName } = await fetchRandomDocument();
        const randomSifatLucu = await fetchRandomSifatLucu();

        if (!randomSifatLucu) {
            return res.status(404).json({ success: false, message: 'No documents found in the SifatLucu collection' });
        }

        const randomFieldValue = randomDocument[randomFieldName];
        const response = `${randomFieldValue} ${randomSifatLucu.Sifat_Lucu}`;

        res.json({ success: true, response });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed to fetch data from MongoDB', error: err.message });
    }
};

module.exports = {
    postQuery
};
