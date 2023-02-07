# cloud-regions-country-flags

A library to convert cloud provider regions to locations and emoji flags.

## Intall

```shell
npm install cloud-regions-country-flags --save
```

## Usage

```javascript
import { getInfo } from 'cloud-regions-country-flags';

getInfo('eu-north-1', 'AWS');

// => { location: 'Europe (Stockholm)', flag: '🇸🇪' }

getInfo('us-west2-a', 'GCP');

// => { location: 'Los Angeles, California, North America', flag: '🇺🇸' }
```

## Parameters

| Name     | Type              | Required | Description            |
| -------- | ----------------- | -------- | ---------------------- |
| region   | string            | true     | name of cloud region   |
| provider | string AWS or GCP | true     | name of cloud provider |

## Help

- [AWS AWS Regions](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html)
- [GCP Regions and zones](https://cloud.google.com/compute/docs/regions-zones)
