const fetch = require('cross-fetch');
require('dotenv').config();

module.exports = {
    usdToTry: async () => {
        try {
            const response = await fetch(`${process.env.API_URL}/usd/try.json`);
            const data = await response.json();
            return data.try;
        } catch (error) {
            console.log("[ERROR] An error occurred, please let us know. \n\nTelegram: https://t.me/unoxdevs");
        }
    }
}