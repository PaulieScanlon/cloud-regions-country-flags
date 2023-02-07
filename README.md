# cloud-regions-country-flags

A library to convert cloud provider regions strings to locations and emoji flag.

## Intall

```shell
npm install cloud-regions-country-flags --save
```

## Usage

```javascript
import { getInfo } from 'cloud-regions-country-flags';

// Defaults to Amazon Web Services (ASWS)
getInfo('eu-north-1');

// => { location: 'Europe (Stockholm)', flag: '🇸🇪' }
```

## Options

Pass in Cloud Provider. Currently only accepts 'AWS' or 'GCP'

```javascript
import { getInfo } from 'cloud-regions-country-flags';

// Set Cloud Provider to Google Cloud Platofmr (GCP)
getInfo('us-west2-a', 'GCP');
// => { location: 'Los Angeles, California, North Americ', flag: '🇺🇸' }
```

## Help

- [AWS AWS Regions](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html)
- [GCP Regions and zones](https://cloud.google.com/compute/docs/regions-zones)
