const fetch = require('cross-fetch');
require('dotenv').config();

module.exports = {
    eurToTry: async () => {
        try {
            const response = await fetch(`${process.env.API_URL}/eur/try.json`);
            const data = await response.json();
            return data.try;
        } catch (error) {
            console.log("[ERROR] An error occurred, please let us know. \n\nTelegram: https://t.me/unoxdevs");
        }
    }
}