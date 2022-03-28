const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const { isIP } = require('net');

const request = async (ip) => {
  const { IPINFO_API_TOKEN } = process.env;
  const headers = { 'Accept': 'application/json' };
  if (IPINFO_API_TOKEN !== undefined) {
    headers['Authorization'] = `Bearer ${IPINFO_API_TOKEN}`
  }
  
  const url = `https://ipinfo.io/${ip}`;
  const ipinfoRequest = await fetch(url, { headers });

  return ipinfoRequest.json();
};

const formatResponse = (response, options) => {
  const { IPINFO_API_TOKEN } = process.env;
  const { format, debug } = options;

  if (debug) {
    const info = IPINFO_API_TOKEN === undefined ? 'not found' : 'found';
    console.log(`IPINFO_API_TOKEN ${info}`);
  }
  
  switch (format) {
    case 'table':
      console.table(response);
      break;
    case 'city':
      console.log(response?.city || 'Invalid');
      break;
    case 'location':
      const location = response?.city ? `${response?.city}, ${response?.region}, ${response?.country}` : 'Invalid';
      console.log(location);
      break;
    default:
      console.log(response);
  }
};

const lookup = async (ip, options) => {
  const invalid = { ip, bogon: true }
  const response = isIP(ip) ? await request(ip) : invalid;

  return formatResponse(response, options);
};

module.exports = {
  lookup,
};
