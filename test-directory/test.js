const { getInfo } = require('cloud-regions-country-flags');

console.log(getInfo('eu-west-1'));
console.log(getInfo('us-west2', { provider: 'GCP' }));
