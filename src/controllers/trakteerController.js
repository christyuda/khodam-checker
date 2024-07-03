const axios = require('axios');

const getSupportHistory = async (req, res) => {
    const apiKey = process.env.TRAKTEER_API_KEY;
    const url = process.env.TRAKTEER_API_URL;

    try {
        const response = await axios.get(url, {
            headers: {
                'key': apiKey,
                'Accept': 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            }
        });

        res.json({
            success: true,
            data: response.data
        });
    } catch (error) {
        console.error('Error fetching support history:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch support history',
            error: error.message
        });
    }
};

module.exports = {
    getSupportHistory
};
