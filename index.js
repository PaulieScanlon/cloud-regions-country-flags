exports.getInfo = function (region, provider) {
  let obj = {
    location: '',
    flag: '',
  };

  if (provider === 'AWS') {
    // AWS
    switch (region) {
      case 'us-east-2':
        obj.location = 'US East (Ohio)';
        obj.flag = '🇺🇸';
        break;

      case 'us-east-1':
        obj.location = 'US East (N. Virginia)';
        obj.flag = '🇺🇸';
        break;

      case 'us-west-1':
        obj.location = 'US West (N. California)';
        obj.flag = '🇺🇸';
        break;

      case 'af-south-1':
        obj.location = 'US West (Oregon)';
        obj.flag = '🇺🇸';
        break;

      case 'af-south-1':
        obj.location = 'Africa (Cape Town)';
        obj.flag = '🇿🇦';
        break;

      case 'ap-east-1':
        obj.location = 'Asia Pacific (Hong Kong)';
        obj.flag = '🇨🇳';
        break;

      case 'ap-south-2':
        obj.location = 'Asia Pacific (Hyderabad)';
        obj.flag = '🇮🇳';
        break;

      case 'ap-southeast-3':
        obj.location = 'Asia Pacific (Jakarta)';
        obj.flag = '🇮🇩';
        break;

      case 'ap-southeast-4':
        obj.location = 'Asia Pacific (Melbourne)';
        obj.flag = '🇦🇺';
        break;

      case 'ap-south-1':
        obj.location = 'Asia Pacific (Mumbai)';
        obj.flag = '🇮🇳';
        break;

      case 'ap-northeast-3':
        obj.location = 'Asia Pacific (Osaka)';
        obj.flag = '🇯🇵';
        break;

      case 'ap-northeast-2':
        obj.location = 'Asia Pacific (Seoul';
        obj.flag = '🇰🇷';
        break;

      case 'ap-southeast-1':
        obj.location = 'Asia Pacific (Singapore)';
        obj.flag = '🇸🇬';
        break;

      case 'ap-southeast-2':
        obj.location = 'Asia Pacific (Sydney)';
        obj.flag = '🇦🇺';
        break;

      case 'ap-northeast-1':
        obj.location = 'Asia Pacific (Tokyo)';
        obj.flag = '🇯🇵';
        break;

      case 'ca-central-1':
        obj.location = 'Canada (Central)';
        obj.flag = '🇨🇦';
        break;

      case 'eu-central-1':
        obj.location = 'Europe (Frankfurt)';
        obj.flag = '🇩🇪';
        break;

      case 'eu-west-1':
        obj.location = 'Europe (Ireland)';
        obj.flag = '🇮🇪';
        break;

      case 'eu-west-2':
        obj.location = 'Europe (London)';
        obj.flag = '🇬🇧';
        break;

      case 'eu-south-1':
        obj.location = 'Europe (Milan)';
        obj.flag = '🇮🇹';
        break;

      case 'eu-west-3':
        obj.location = 'Europe (Paris)';
        obj.flag = '🇫🇷';
        break;

      case 'eu-south-2':
        obj.location = 'Europe (Spain)';
        obj.flag = '🇪🇸';
        break;

      case 'eu-north-1':
        obj.location = 'Europe (Stockholm)';
        obj.flag = '🇸🇪';
        break;

      case 'eu-central-2':
        obj.location = 'Europe (Zurich';
        obj.flag = '🇨🇭';
        break;

      case 'me-south-1':
        obj.location = 'Middle East (Bahrain)';
        obj.flag = '🇧🇭';
        break;

      case 'me-central-1':
        obj.location = 'Middle East (UAE)';
        obj.flag = '🇦🇪';
        break;

      case 'sa-east-1':
        obj.location = 'South America (São Paulo)';
        obj.flag = '🇧🇷';
        break;

      case 'us-gov-east-1':
        obj.location = 'AWS GovCloud (US-East';
        obj.flag = '🇺🇸';
        break;

      case 'us-gov-west-1':
        obj.location = 'AWS GovCloud (US-West)';
        obj.flag = '🇺🇸';
        break;

      default:
        obj.location = 'AWS';
        obj.flag = '⚠️';
        break;
    }
  } else if (provider === 'GCP') {
    // GCP
    switch (region) {
      case 'asia-east1':
        obj.location = 'Changhua County, Taiwan, APAC';
        obj.flag = '🇹🇼';
        break;

      case 'asia-east1-a':
        obj.location = 'Changhua County, Taiwan, APAC';
        obj.flag = '🇹🇼';
        break;

      case 'asia-east1-b':
        obj.location = 'Changhua County, Taiwan, APAC';
        obj.flag = '🇹🇼';
        break;

      case 'asia-east1-c':
        obj.location = 'Changhua County, Taiwan, APAC';
        obj.flag = '🇹🇼';
        break;

      case 'asia-east2':
        obj.location = 'Hong Kong, APAC';
        obj.flag = '🇨🇳';
        break;

      case 'asia-east2-a':
        obj.location = 'Hong Kong, APAC';
        obj.flag = '🇨🇳';
        break;

      case 'asia-east2-b':
        obj.location = 'Hong Kong, APAC';
        obj.flag = '🇨🇳';
        break;

      case 'asia-east2-c':
        obj.location = 'Hong Kong, APAC';
        obj.flag = '🇨🇳';
        break;

      case 'asia-northeast1':
        obj.location = 'Tokyo, Japan, APAC';
        obj.flag = '🇯🇵';
        break;

      case 'asia-northeast1-a':
        obj.location = 'Tokyo, Japan, APAC';
        obj.flag = '🇯🇵';
        break;

      case 'asia-northeast1-b':
        obj.location = 'Tokyo, Japan, APAC';
        obj.flag = '🇯🇵';
        break;

      case 'asia-northeast1-c':
        obj.location = 'Tokyo, Japan, APAC';
        obj.flag = '🇯🇵';
        break;

      case 'asia-northeast2':
        obj.location = 'Osaka, Japan, APAC';
        obj.flag = '🇯🇵';
        break;

      case 'asia-northeast2-a':
        obj.location = 'Osaka, Japan, APAC';
        obj.flag = '🇯🇵';
        break;

      case 'asia-northeast2-b':
        obj.location = '	Osaka, Japan, APAC';
        obj.flag = '🇯🇵';
        break;

      case 'asia-northeast2-c':
        obj.location = 'Osaka, Japan, APAC';
        obj.flag = '🇯🇵';
        break;

      case 'asia-northeast3':
        obj.location = 'Seoul, South Korea, APAC';
        obj.flag = '🇰🇷';
        break;

      case 'asia-northeast3-a':
        obj.location = 'Seoul, South Korea, APAC';
        obj.flag = '🇰🇷';
        break;

      case 'asia-northeast3-b':
        obj.location = 'Seoul, South Korea, APAC';
        obj.flag = '🇰🇷';
        break;

      case 'asia-northeast3-c':
        obj.location = 'Seoul, South Korea, APAC';
        obj.flag = '🇰🇷';
        break;

      case 'asia-south1':
        obj.location = 'Mumbai, India APAC';
        obj.flag = '🇮🇳';
        break;

      case 'asia-south1-a':
        obj.location = 'Mumbai, India APAC';
        obj.flag = '🇮🇳';
        break;

      case 'asia-south1-b':
        obj.location = 'Mumbai, India APAC';
        obj.flag = '🇮🇳';
        break;

      case 'asia-south1-c':
        obj.location = 'Mumbai, India APAC';
        obj.flag = '🇮🇳';
        break;

      case 'asia-south2':
        obj.location = 'Delhi, India APAC';
        obj.flag = '🇮🇳';
        break;

      case 'asia-south2-a':
        obj.location = 'Delhi, India APAC';
        obj.flag = '🇮🇳';
        break;

      case 'asia-south2-b':
        obj.location = 'Delhi, India APAC';
        obj.flag = '🇮🇳';
        break;

      case 'asia-south2-c':
        obj.location = 'Delhi, India APAC';
        obj.flag = '🇮🇳';
        break;

      case 'asia-southeast1':
        obj.location = 'Jurong West, Singapore, APAC';
        obj.flag = '🇸🇬';
        break;

      case 'asia-southeast1-a':
        obj.location = 'Jurong West, Singapore, APAC';
        obj.flag = '🇸🇬';
        break;

      case 'asia-southeast1-b':
        obj.location = 'Jurong West, Singapore, APAC';
        obj.flag = '🇸🇬';
        break;

      case 'asia-southeast1-c':
        obj.location = 'southeast1-c	Jurong West, Singapore, APAC';
        obj.flag = '🇸🇬';
        break;

      case 'asia-southeast2':
        obj.location = 'Jakarta, Indonesia, APAC';
        obj.flag = '🇮🇩';
        break;

      case 'asia-southeast2-a':
        obj.location = 'Jakarta, Indonesia, APAC';
        obj.flag = '🇮🇩';
        break;

      case 'asia-southeast2-b':
        obj.location = 'Jakarta, Indonesia, APA';
        obj.flag = '🇮🇩';
        break;

      case 'asia-southeast2-c':
        obj.location = 'Jakarta, Indonesia, APAC';
        obj.flag = '🇮🇩';
        break;

      case 'australia-southeast1':
        obj.location = 'Sydney, Australia, APAC';
        obj.flag = '🇦🇺';
        break;

      case 'australia-southeast1-a':
        obj.location = 'Sydney, Australia, APAC';
        obj.flag = '🇦🇺';
        break;

      case 'australia-southeast1-b':
        obj.location = 'Sydney, Australia, APAC';
        obj.flag = '🇦🇺';
        break;

      case 'australia-southeast1-c':
        obj.location = 'Sydney, Australia, APAC';
        obj.flag = '🇦🇺';
        break;

      case 'australia-southeast2':
        obj.location = 'Melbourne, Australia, APAC';
        obj.flag = '🇦🇺';
        break;

      case 'australia-southeast2-a':
        obj.location = 'Melbourne, Australia, APAC';
        obj.flag = '🇦🇺';
        break;

      case 'australia-southeast2-b':
        obj.location = 'Melbourne, Australia, APAC';
        obj.flag = '🇦🇺';
        break;

      case 'australia-southeast2-c':
        obj.location = 'Melbourne, Australia, APAC';
        obj.flag = '🇦🇺';
        break;

      case 'europe-central2':
        obj.location = 'Warsaw, Poland, Europe';
        obj.flag = '🇵🇱';
        break;

      case 'europe-central2-a':
        obj.location = 'Warsaw, Poland, Europe';
        obj.flag = '🇵🇱';
        break;

      case 'europe-central2-b':
        obj.location = 'Warsaw, Poland, Europe';
        obj.flag = '🇵🇱';
        break;

      case 'europe-central2-c':
        obj.location = 'Warsaw, Poland, Europe';
        obj.flag = '🇵🇱';
        break;

      case 'europe-north1':
        obj.location = 'Hamina, Finland, Europe';
        obj.flag = '🇫🇮';
        break;

      case 'europe-north1-a':
        obj.location = 'Hamina, Finland, Europe';
        obj.flag = '🇫🇮';
        break;

      case 'europe-north1-b':
        obj.location = 'Hamina, Finland, Europe';
        obj.flag = '🇫🇮';
        break;

      case 'europe-north1-c':
        obj.location = 'Hamina, Finland, Europe';
        obj.flag = '🇫🇮';
        break;

      case 'europe-southwest1':
        obj.location = 'Madrid, Spain, Europe';
        obj.flag = '🇪🇸';
        break;

      case 'europe-southwest1-a':
        obj.location = 'Madrid, Spain, Europe';
        obj.flag = '🇪🇸';
        break;

      case 'europe-southwest1-b':
        obj.location = 'Madrid, Spain, Europe';
        obj.flag = '🇪🇸';
        break;

      case 'europe-southwest1-c':
        obj.location = 'Madrid, Spain, Europe';
        obj.flag = '🇪🇸';
        break;

      case 'europe-west1-b':
        obj.location = 'St. Ghislain, Belgium, Europe';
        obj.flag = '🇧🇪';
        break;

      case 'europe-west1-c':
        obj.location = 'St. Ghislain, Belgium, Europ';
        obj.flag = '🇧🇪';
        break;

      case 'europe-west1-d':
        obj.location = 'St. Ghislain, Belgium, Europe';
        obj.flag = '🇧🇪';
        break;

      case 'europe-west2':
        obj.location = 'London, England, Europe';
        obj.flag = '🇬🇧';
        break;

      case 'europe-west2-a':
        obj.location = 'London, England, Europe';
        obj.flag = '🇬🇧';
        break;

      case 'europe-west2-b':
        obj.location = 'London, England, Europe';
        obj.flag = '🇬🇧';
        break;

      case 'europe-west2-c':
        obj.location = 'London, England, Europe';
        obj.flag = '🇬🇧';
        break;

      case 'europe-west3':
        obj.location = 'Frankfurt, Germany Europe';
        obj.flag = '🇩🇪';
        break;

      case 'europe-west3-a':
        obj.location = 'Frankfurt, Germany Europe';
        obj.flag = '🇩🇪';
        break;

      case 'europe-west3-b':
        obj.location = 'Frankfurt, Germany Europe';
        obj.flag = '🇩🇪';
        break;

      case 'europe-west3-c':
        obj.location = 'Frankfurt, Germany Europe';
        obj.flag = '🇩🇪';
        break;

      case 'europe-west4':
        obj.location = 'Eemshaven, Netherlands, Europe';
        obj.flag = '🇳🇱';
        break;

      case 'europe-west4-a':
        obj.location = 'Eemshaven, Netherlands, Europe';
        obj.flag = '🇳🇱';
        break;

      case 'europe-west4-b':
        obj.location = 'Eemshaven, Netherlands, Europe';
        obj.flag = '🇳🇱';
        break;

      case 'europe-west4-c':
        obj.location = 'Eemshaven, Netherlands, Europe';
        obj.flag = '🇳🇱';
        break;

      case 'europe-west6':
        obj.location = 'Zurich, Switzerland, Europe';
        obj.flag = '🇨🇭';
        break;

      case 'europe-west6-a':
        obj.location = 'Zurich, Switzerland, Europe';
        obj.flag = '🇨🇭';
        break;

      case 'europe-west6-b':
        obj.location = 'Zurich, Switzerland, Europe';
        obj.flag = '🇨🇭';
        break;

      case 'europe-west6-c':
        obj.location = 'Zurich, Switzerland, Europe';
        obj.flag = '🇨🇭';
        break;

      case 'europe-west8':
        obj.location = 'Milan, Italy, Europe';
        obj.flag = '🇮🇹';
        break;

      case 'europe-west8-a':
        obj.location = 'Milan, Italy, Europe';
        obj.flag = '🇮🇹';
        break;

      case 'europe-west8-b':
        obj.location = 'Milan, Italy, Europ';
        obj.flag = '🇮🇹';
        break;

      case 'europe-west8-c':
        obj.location = 'Milan, Italy, Europe';
        obj.flag = '🇮🇹';
        break;

      case 'europe-west9':
        obj.location = 'Paris, France, Europe';
        obj.flag = '🇫🇷';
        break;

      case 'europe-west9-a':
        obj.location = 'Paris, France, Europe';
        obj.flag = '🇫🇷';
        break;

      case 'europe-west9-b':
        obj.location = 'Paris, France, Europe';
        obj.flag = '🇫🇷';
        break;

      case 'europe-west9-c':
        obj.location = 'Paris, France, Europe';
        obj.flag = '🇫🇷';
        break;

      case 'me-west1':
        obj.location = 'Tel Aviv, Israel, Middle East';
        obj.flag = '🇮🇱';
        break;

      case 'me-west1-a':
        obj.location = 'Tel Aviv, Israel, Middle East';
        obj.flag = '🇮🇱';
        break;

      case 'me-west1-b':
        obj.location = 'Tel Aviv, Israel, Middle East';
        obj.flag = '🇮🇱';
        break;

      case 'me-west1-c':
        obj.location = 'Tel Aviv, Israel, Middle East';
        obj.flag = '🇮🇱';
        break;

      case 'northamerica-northeast1':
        obj.location = 'Montréal, Québec, North America';
        obj.flag = '🇨🇦';
        break;

      case 'northamerica-northeast1-a':
        obj.location = 'Montréal, Québec, North America';
        obj.flag = '🇨🇦';
        break;

      case 'northamerica-northeast1-b':
        obj.location = 'Montréal, Québec, North America';
        obj.flag = '🇨🇦';
        break;

      case 'northamerica-northeast1-c':
        obj.location = 'Montréal, Québec, North America';
        obj.flag = '🇨🇦';
        break;

      case 'northamerica-northeast2':
        obj.location = 'Toronto, Ontario, North America';
        obj.flag = '🇨🇦';
        break;

      case 'northamerica-northeast2-a':
        obj.location = 'Toronto, Ontario, North America';
        obj.flag = '🇨🇦';
        break;

      case 'northamerica-northeast2-b':
        obj.location = 'Toronto, Ontario, North America';
        obj.flag = '🇨🇦';
        break;

      case 'northamerica-northeast2-b':
        obj.location = 'Toronto, Ontario, North America';
        obj.flag = '🇨🇦';
        break;

      case 'northamerica-northeast2-c':
        obj.location = 'Toronto, Ontario, North America';
        obj.flag = '🇨🇦';
        break;

      case 'southamerica-east1':
        obj.location = 'Osasco, São Paulo, Brazil, South America';
        obj.flag = '🇧🇷';
        break;

      case 'southamerica-east1-a':
        obj.location = 'Osasco, São Paulo, Brazil, South America';
        obj.flag = '🇧🇷';
        break;

      case 'southamerica-east1-b':
        obj.location = 'Osasco, São Paulo, Brazil, South America';
        obj.flag = '🇧🇷';
        break;

      case 'southamerica-east1-c':
        obj.location = 'Osasco, São Paulo, Brazil, South America';
        obj.flag = '🇧🇷';
        break;

      case 'southamerica-west1':
        obj.location = 'Santiago, Chile, South America';
        obj.flag = '🇨🇱';
        break;

      case 'southamerica-west1-a':
        obj.location = 'Santiago, Chile, South America';
        obj.flag = '🇨🇱';
        break;

      case 'southamerica-west1-b':
        obj.location = 'Santiago, Chile, South America';
        obj.flag = '🇨🇱';
        break;

      case 'southamerica-west1-c':
        obj.location = 'Santiago, Chile, South America';
        obj.flag = '🇨🇱';
        break;

      case 'us-central1':
        obj.location = 'Council Bluffs, Iowa, North America';
        obj.flag = '🇺🇸';
        break;

      case 'us-central1-a':
        obj.location = 'Council Bluffs, Iowa, North America';
        obj.flag = '🇺🇸';
        break;

      case 'us-central1-b':
        obj.location = 'Council Bluffs, Iowa, North America';
        obj.flag = '🇺🇸';
        break;

      case 'us-central1-c':
        obj.location = 'Council Bluffs, Iowa, North America';
        obj.flag = '🇺🇸';
        break;

      case 'us-central1-f':
        obj.location = 'Council Bluffs, Iowa, North America';
        obj.flag = '🇺🇸';
        break;

      case 'us-east1-b':
        obj.location = 'Moncks Corner, South Carolina, North Americ';
        obj.flag = '🇺🇸';
        break;

      case 'us-east1-c':
        obj.location = 'Moncks Corner, South Carolina, North America';
        obj.flag = '🇺🇸';
        break;

      case 'us-east1-d':
        obj.location = 'Moncks Corner, South Carolina, North America';
        obj.flag = '🇺🇸';
        break;

      case 'us-east4':
        obj.location = 'Ashburn, Virginia, North America';
        obj.flag = '🇺🇸';
        break;

      case 'us-east4-a':
        obj.location = 'Ashburn, Virginia, North America';
        obj.flag = '🇺🇸';
        break;

      case 'us-east4-b':
        obj.location = 'Ashburn, Virginia, North America';
        obj.flag = '🇺🇸';
        break;

      case 'us-east4-c':
        obj.location = 'Ashburn, Virginia, North America';
        obj.flag = '🇺🇸';
        break;

      case 'us-east5':
        obj.location = 'Columbus, Ohio, North America';
        obj.flag = '🇺🇸';
        break;

      case 'us-east5-a':
        obj.location = 'Columbus, Ohio, North America';
        obj.flag = '🇺🇸';
        break;

      case 'us-east5-b':
        obj.location = 'Columbus, Ohio, North America';
        obj.flag = '🇺🇸';
        break;

      case 'us-east5-c':
        obj.location = 'Columbus, Ohio, North America';
        obj.flag = '🇺🇸';
        break;

      case 'us-south1':
        obj.location = 'Dallas, Texas, North America';
        obj.flag = '🇺🇸';
        break;

      case 'us-south1-a':
        obj.location = 'Dallas, Texas, North America';
        obj.flag = '🇺🇸';
        break;

      case 'us-south1-b':
        obj.location = 'Dallas, Texas, North America';
        obj.flag = '🇺🇸';
        break;

      case 'us-south1-c':
        obj.location = 'Dallas, Texas, North America';
        obj.flag = '🇺🇸';
        break;

      case 'us-west1':
        obj.location = 'The Dalles, Oregon, North America';
        obj.flag = '🇺🇸';
        break;

      case 'us-west1-a':
        obj.location = 'The Dalles, Oregon, North America';
        obj.flag = '🇺🇸';
        break;

      case 'us-west1-b':
        obj.location = 'The Dalles, Oregon, North America';
        obj.flag = '🇺🇸';
        break;

      case 'us-west1-c':
        obj.location = 'The Dalles, Oregon, North America';
        obj.flag = '🇺🇸';
        break;

      case 'us-west2':
        obj.location = 'Los Angeles, California, North Americ';
        obj.flag = '🇺🇸';
        break;

      case 'us-west2-a':
        obj.location = 'Los Angeles, California, North Americ';
        obj.flag = '🇺🇸';
        break;

      case 'us-west2-b':
        obj.location = 'Los Angeles, California, North America';
        obj.flag = '🇺🇸';
        break;

      case 'us-west2-c':
        obj.location = 'Los Angeles, California, North America';
        obj.flag = '🇺🇸';
        break;

      case 'us-west3':
        obj.location = 'Salt Lake City, Utah, North America';
        obj.flag = '🇺🇸';
        break;

      case 'us-west3-a':
        obj.location = 'Salt Lake City, Utah, North America';
        obj.flag = '🇺🇸';
        break;

      case 'us-west3-b':
        obj.location = 'Salt Lake City, Utah, North America';
        obj.flag = '🇺🇸';
        break;

      case 'us-west3-c':
        obj.location = 'Salt Lake City, Utah, North America';
        obj.flag = '🇺🇸';
        break;

      case 'us-west4':
        obj.location = 'Las Vegas, Nevada, North America';
        obj.flag = '🇺🇸';
        break;

      case 'us-west4-a':
        obj.location = 'Las Vegas, Nevada, North America';
        obj.flag = '🇺🇸';
        break;

      case 'us-west4-b':
        obj.location = 'Las Vegas, Nevada, North America';
        obj.flag = '🇺🇸';
        break;

      case 'us-west4-c':
        obj.location = 'Las Vegas, Nevada, North America';
        obj.flag = '🇺🇸';
        break;

      default:
        obj.location = 'GCP';
        obj.flag = '⚠️';
        break;
    }
  } else {
    switch (region) {
      default:
        obj.location = 'Unknown provider';
        obj.flag = '⚠️';
        break;
    }
  }

  return obj;
};
