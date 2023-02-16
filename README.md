# cloud-regions-country-flags

A library to convert cloud provider regions to locations and emoji flags.

## Install

```shell
npm install cloud-regions-country-flags --save
```

## Usage

```javascript
import { getInfo } from 'cloud-regions-country-flags';

getInfo('eu-north-1', 'AWS');

// Output
//  {
//   location: 'Europe (Stockholm)',
//   flag: '🇸🇪',
//   country: 'Sweden',
//   latitude: 59.331325231594654,
//   longitude: 18.0904021557263,
//   raw: 'eu-north-1'
//  }

getInfo('us-west2-a', 'GCP');

// Output
// {
//   location: 'Los Angeles, California, North America',
//   flag: '🇺🇸',
//   country: 'United States of America',
//   latitude: 34.04292305028126,
//   longitude: -118.21813240055846,
//   raw: 'us-west2-a'
// }
```

## Parameters

| Name     | Type              | Required | Description            |
| -------- | ----------------- | -------- | ---------------------- |
| region   | string            | true     | name of cloud region   |
| provider | string AWS or GCP | true     | name of cloud provider |

## Help

- [AWS Regions](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html)
- [GCP Regions and zones](https://cloud.google.com/compute/docs/regions-zones)
