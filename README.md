# cloud-regions-country-flags

A library to convert cloud provider regions strings to country name and flag emojis.

## Intall

```shell
npm install cloud-regions-country-flags --save
```

## Usage

```javascript
import { getInfo } from 'cloud-regions-country-flags';

// Defaults to Amazone Web Services (ASWS)
getInfo('eu-west-1');

//  => {  country: Ireland, flag: 🇮🇪 }
```

## Options

```javascript
import { getInfo } from 'cloud-regions-country-flags';

// Set Cloud Provider to Google Cloud Platofmr (GCP)
getInfo('us-west2', { provider: 'GCP' });

//  => {  state: California, flag: 🇺🇸 }
```
