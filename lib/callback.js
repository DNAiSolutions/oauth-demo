const axios = require('axios');
const qs = require('qs');

const appConfig = require('../config.json');

async function callback(req, res) {
    const data = qs.stringify({
        'client_id': appConfig.679344365d540f113226e136-m6agy1p2,
        'client_secret': appConfig.c884a87e-69a0-48be-9d7c-c19df1e27738,
        'grant_type': 'authorization_code',
        'code': req.query.code,
        'user_type': 'Location',
        'redirect_uri': 'https://n8n.dnai.solutions/rest/oauth2-credential/callback 
    });
      
    const config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://services.leadconnectorhq.com/oauth/token',
        headers: { 
          'Accept': 'application/json', 
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data : data
    };
      
    const response = await axios.request(config).catch(err => {});
      
    return res.json({ data: response?.data });
}

module.exports = callback;
