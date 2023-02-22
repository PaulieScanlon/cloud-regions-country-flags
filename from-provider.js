exports.fromProvider = function (region, provider) {
  let obj = {
    location: '',
    flag: '',
    country: null,
    latitude: 0,
    longitude: 0,
  };

  if (provider === 'AWS') {
    // AWS
    switch (region) {
      case 'us-east-2':
        obj.location = 'US East (Ohio)';
        obj.flag = '🇺🇸';
        obj.country = 'United States of America';
        obj.latitude = 40.28801684609333;
        obj.longitude = -82.83954051975952;
        break;

      case 'us-east-1':
        obj.location = 'US East (N. Virginia)';
        obj.flag = '🇺🇸';
        obj.country = 'United States of America';
        obj.latitude = 37.25633550865467;
        obj.longitude = -79.09898275762913;
        break;

      case 'us-west-1':
        obj.location = 'US West (N. California)';
        obj.flag = '🇺🇸';
        obj.country = 'United States of America';
        obj.latitude = 35.58947293722038;
        obj.longitude = -78.70505448880436;
        break;

      case 'us-west-2':
        obj.location = 'US West (Oregon)';
        obj.flag = '🇺🇸';
        obj.country = 'United States of America';
        obj.latitude = 43.80433182823407;
        obj.longitude = -121.02829983691751;
        break;

      case 'af-south-1':
        obj.location = 'Africa (Cape Town)';
        obj.flag = '🇿🇦';
        obj.country = 'South Africa';
        obj.latitude = -33.92661652054259;
        obj.longitude = 18.466511277349763;
        break;

      case 'ap-east-1':
        obj.location = 'Asia Pacific (Hong Kong)';
        obj.flag = '🇨🇳';
        obj.country = 'China';
        obj.latitude = 22.334699885533855;
        obj.longitude = 114.15924728153533;
        break;

      case 'ap-south-2':
        obj.location = 'Asia Pacific (Hyderabad)';
        obj.flag = '🇮🇳';
        obj.country = 'India';
        obj.latitude = 17.399195717614962;
        obj.longitude = 78.50965923221271;
        break;

      case 'ap-southeast-3':
        obj.location = 'Asia Pacific (Jakarta)';
        obj.flag = '🇮🇩';
        obj.country = 'Indonesia';
        obj.latitude = -6.205836808279596;
        obj.longitude = 106.8645266311466;
        break;

      case 'ap-southeast-4':
        obj.location = 'Asia Pacific (Melbourne)';
        obj.flag = '🇦🇺';
        obj.country = 'Australia';
        obj.latitude = -37.817348068185204;
        obj.longitude = 144.962370503003;
        break;

      case 'ap-south-1':
        obj.location = 'Asia Pacific (Mumbai)';
        obj.flag = '🇮🇳';
        obj.country = 'India';
        obj.latitude = 19.089335747943526;
        obj.longitude = 72.88254969339093;
        break;

      case 'ap-northeast-3':
        obj.location = 'Asia Pacific (Osaka)';
        obj.flag = '🇯🇵';
        obj.country = 'Japan';
        obj.latitude = 34.674754649556895;
        obj.longitude = 135.49599160718944;
        break;

      case 'ap-northeast-2':
        obj.location = 'Asia Pacific (Seoul';
        obj.flag = '🇰🇷';
        obj.country = 'South Korea';
        obj.latitude = 37.56105186061333;
        obj.longitude = 126.99124435560802;

        break;

      case 'ap-southeast-1':
        obj.location = 'Asia Pacific (Singapore)';
        obj.flag = '🇸🇬';
        obj.country = 'Singapore';
        obj.latitude = 1.3565448029024583;
        obj.longitude = 103.89364657268693;
        break;

      case 'ap-southeast-2':
        obj.location = 'Asia Pacific (Sydney)';
        obj.flag = '🇦🇺';
        obj.country = 'Australia';
        obj.latitude = -33.876435880568565;
        obj.longitude = 151.20247906468754;
        break;

      case 'ap-northeast-1':
        obj.location = 'Asia Pacific (Tokyo)';
        obj.flag = '🇯🇵';
        obj.country = 'Japan';
        obj.latitude = 35.8164723526883;
        obj.longitude = 139.76928069594032;
        break;

      case 'ca-central-1':
        obj.location = 'Canada (Central)';
        obj.flag = '🇨🇦';
        obj.country = 'Canada';
        obj.latitude = 59.79604462040539;
        obj.longitude = -111.79808568185638;
        break;

      case 'eu-central-1':
        obj.location = 'Europe (Frankfurt)';
        obj.flag = '🇩🇪';
        obj.country = 'Germany';
        obj.latitude = 50.10967976447574;
        obj.longitude = 8.68942905774188;
        break;

      case 'eu-west-1':
        obj.location = 'Europe (Ireland)';
        obj.flag = '🇮🇪';
        obj.country = 'Ireland';
        obj.latitude = 53.23763950331306;
        obj.longitude = -7.331239056390674;
        break;

      case 'eu-west-2':
        obj.location = 'Europe (London)';
        obj.flag = '🇬🇧';
        obj.country = 'England';
        obj.latitude = 51.54586770294375;
        obj.longitude = -0.12150356849057446;

        break;

      case 'eu-south-1':
        obj.location = 'Europe (Milan)';
        obj.flag = '🇮🇹';
        obj.country = 'Italy';
        obj.latitude = 45.46536115753147;
        obj.longitude = 9.189403439251837;
        break;

      case 'eu-west-3':
        obj.location = 'Europe (Paris)';
        obj.flag = '🇫🇷';
        obj.country = 'France';
        obj.latitude = 48.853973831534525;
        obj.longitude = 2.360579900924033;
        break;

      case 'eu-south-2':
        obj.location = 'Europe (Spain)';
        obj.flag = '🇪🇸';
        obj.country = 'Spain';
        obj.latitude = 41.22893940578199;
        obj.longitude = -3.868048471508226;

        break;

      case 'eu-north-1':
        obj.location = 'Europe (Stockholm)';
        obj.flag = '🇸🇪';
        obj.country = 'Sweden';
        obj.latitude = 59.331325231594654;
        obj.longitude = 18.0904021557263;
        break;

      case 'eu-central-2':
        obj.location = 'Europe (Zurich';
        obj.flag = '🇨🇭';
        obj.country = 'Switzerland';
        obj.latitude = 47.376025431793565;
        obj.longitude = 8.541883620760181;
        break;

      case 'me-south-1':
        obj.location = 'Middle East (Bahrain)';
        obj.flag = '🇧🇭';
        obj.country = 'Bahrain';
        obj.latitude = 26.040667189843617;
        obj.longitude = 50.56419304634337;
        break;

      case 'me-central-1':
        obj.location = 'Middle East (UAE)';
        obj.flag = '🇦🇪';
        obj.country = 'United Arab Emirates';
        obj.latitude = 23.584541582048914;
        obj.longitude = 53.89830129545186;
        break;

      case 'sa-east-1':
        obj.location = 'South America (São Paulo)';
        obj.flag = '🇧🇷';
        obj.country = 'Brazil';
        obj.latitude = -23.547523383823687;
        obj.longitude = -46.61868312981555;
        break;

      case 'us-gov-east-1':
        obj.location = 'AWS GovCloud (US-East';
        obj.flag = '🇺🇸';
        break;

      case 'us-gov-west-1':
        obj.location = 'AWS GovCloud (US-West)';
        obj.flag = '🇺🇸';
        obj.country = 'United States of America';
        obj.latitude = 45.50145823239668;
        obj.longitude = -122.92840318375019;
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
        obj.country = 'Taiwan';
        obj.latitude = 23.530140550778455;
        obj.longitude = 121.08135382171163;
        break;

      case 'asia-east1-a':
        obj.location = 'Changhua County, Taiwan, APAC';
        obj.flag = '🇹🇼';
        obj.country = 'Taiwan';
        obj.latitude = 23.530140550778455;
        obj.longitude = 121.08135382171163;
        break;

      case 'asia-east1-b':
        obj.location = 'Changhua County, Taiwan, APAC';
        obj.flag = '🇹🇼';
        obj.country = 'Taiwan';
        obj.latitude = 23.530140550778455;
        obj.longitude = 121.08135382171163;
        break;

      case 'asia-east1-c':
        obj.location = 'Changhua County, Taiwan, APAC';
        obj.flag = '🇹🇼';
        obj.country = 'Taiwan';
        obj.latitude = 23.530140550778455;
        obj.longitude = 121.08135382171163;
        break;

      case 'asia-east2':
        obj.location = 'Hong Kong, APAC';
        obj.flag = '🇨🇳';
        obj.country = 'China';
        obj.latitude = 22.290683050811413;
        obj.longitude = 114.15129238845932;
        break;

      case 'asia-east2':
        obj.location = 'Hong Kong, APAC';
        obj.flag = '🇨🇳';
        obj.country = 'China';
        obj.latitude = 22.290683050811413;
        obj.longitude = 114.15129238845932;
        break;

      case 'asia-east2-a':
        obj.location = 'Hong Kong, APAC';
        obj.flag = '🇨🇳';
        obj.country = 'China';
        obj.latitude = 22.290683050811413;
        obj.longitude = 114.15129238845932;
        break;

      case 'asia-east2-b':
        obj.location = 'Hong Kong, APAC';
        obj.flag = '🇨🇳';
        obj.country = 'China';
        obj.latitude = 22.290683050811413;
        obj.longitude = 114.15129238845932;
        break;

      case 'asia-east2-c':
        obj.location = 'Hong Kong, APAC';
        obj.flag = '🇨🇳';
        obj.country = 'China';
        obj.latitude = 22.290683050811413;
        obj.longitude = 114.15129238845932;
        break;

      case 'asia-northeast1':
        obj.location = 'Tokyo, Japan, APAC';
        obj.flag = '🇯🇵';
        obj.country = 'Japan';
        obj.latitude = 35.82538061794517;
        obj.longitude = 139.80773284249614;
        break;

      case 'asia-northeast1-a':
        obj.location = 'Tokyo, Japan, APAC';
        obj.flag = '🇯🇵';
        obj.country = 'Japan';
        obj.latitude = 35.82538061794517;
        obj.longitude = 139.80773284249614;
        break;

      case 'asia-northeast1-b':
        obj.location = 'Tokyo, Japan, APAC';
        obj.flag = '🇯🇵';
        obj.country = 'Japan';
        obj.latitude = 35.82538061794517;
        obj.longitude = 139.80773284249614;
        break;

      case 'asia-northeast1-c':
        obj.location = 'Tokyo, Japan, APAC';
        obj.flag = '🇯🇵';
        obj.country = 'Japan';
        obj.latitude = 35.82538061794517;
        obj.longitude = 139.80773284249614;
        break;

      case 'asia-northeast2':
        obj.location = 'Osaka, Japan, APAC';
        obj.flag = '🇯🇵';
        obj.country = 'Japan';
        obj.latitude = 34.67390760470559;
        obj.longitude = 135.4932450252926;
        break;

      case 'asia-northeast2-a':
        obj.location = 'Osaka, Japan, APAC';
        obj.flag = '🇯🇵';
        obj.country = 'Japan';
        obj.latitude = 34.67390760470559;
        obj.longitude = 135.4932450252926;
        break;

      case 'asia-northeast2-b':
        obj.location = '	Osaka, Japan, APAC';
        obj.flag = '🇯🇵';
        obj.country = 'Japan';
        obj.latitude = 34.67390760470559;
        obj.longitude = 135.4932450252926;
        break;

      case 'asia-northeast2-c':
        obj.location = 'Osaka, Japan, APAC';
        obj.flag = '🇯🇵';
        obj.country = 'Japan';
        obj.latitude = 34.67390760470559;
        obj.longitude = 135.4932450252926;
        break;

      case 'asia-northeast3':
        obj.location = 'Seoul, South Korea, APAC';
        obj.flag = '🇰🇷';
        obj.country = 'South Korea';
        obj.latitude = 37.55941892237444;
        obj.longitude = 127.00223068319539;

        break;

      case 'asia-northeast3-a':
        obj.location = 'Seoul, South Korea, APAC';
        obj.flag = '🇰🇷';
        obj.country = 'South Korea';
        obj.latitude = 37.55941892237444;
        obj.longitude = 127.00223068319539;
        break;

      case 'asia-northeast3-b':
        obj.location = 'Seoul, South Korea, APAC';
        obj.flag = '🇰🇷';
        obj.country = 'South Korea';
        obj.latitude = 37.55941892237444;
        obj.longitude = 127.00223068319539;
        break;

      case 'asia-northeast3-c':
        obj.location = 'Seoul, South Korea, APAC';
        obj.flag = '🇰🇷';
        obj.country = 'South Korea';
        obj.latitude = 37.55941892237444;
        obj.longitude = 127.00223068319539;
        break;

      case 'asia-south1':
        obj.location = 'Mumbai, India APAC';
        obj.flag = '🇮🇳';
        obj.country = 'India';
        obj.latitude = 19.087389076335935;
        obj.longitude = 72.88804285718463;
        break;

      case 'asia-south1-a':
        obj.location = 'Mumbai, India APAC';
        obj.flag = '🇮🇳';
        obj.country = 'India';
        obj.latitude = 19.087389076335935;
        obj.longitude = 72.88804285718463;
        break;

      case 'asia-south1-b':
        obj.location = 'Mumbai, India APAC';
        obj.flag = '🇮🇳';
        obj.country = 'India';
        obj.latitude = 19.087389076335935;
        obj.longitude = 72.88804285718463;
        break;

      case 'asia-south1-c':
        obj.location = 'Mumbai, India APAC';
        obj.flag = '🇮🇳';
        obj.country = 'India';
        obj.latitude = 19.087389076335935;
        obj.longitude = 72.88804285718463;
        break;

      case 'asia-south2':
        obj.location = 'Delhi, India APAC';
        obj.flag = '🇮🇳';
        obj.country = 'India';
        obj.latitude = 28.702834693376246;
        obj.longitude = 77.23739060429489;
        break;

      case 'asia-south2-a':
        obj.location = 'Delhi, India APAC';
        obj.flag = '🇮🇳';
        obj.country = 'India';
        obj.latitude = 28.702834693376246;
        obj.longitude = 77.23739060429489;
        break;

      case 'asia-south2-b':
        obj.location = 'Delhi, India APAC';
        obj.flag = '🇮🇳';
        obj.country = 'India';
        obj.latitude = 28.702834693376246;
        obj.longitude = 77.23739060429489;
        break;

      case 'asia-south2-c':
        obj.location = 'Delhi, India APAC';
        obj.flag = '🇮🇳';
        obj.country = 'India';
        obj.latitude = 28.702834693376246;
        obj.longitude = 77.23739060429489;
        break;

      case 'asia-southeast1':
        obj.location = 'Jurong West, Singapore, APAC';
        obj.flag = '🇸🇬';
        obj.country = 'Singapore';
        obj.latitude = 1.3407131662396297;
        obj.longitude = 103.70755503735327;
        break;

      case 'asia-southeast1-a':
        obj.location = 'Jurong West, Singapore, APAC';
        obj.flag = '🇸🇬';
        obj.country = 'Singapore';
        obj.latitude = 1.3407131662396297;
        obj.longitude = 103.70755503735327;
        break;

      case 'asia-southeast1-b':
        obj.location = 'Jurong West, Singapore, APAC';
        obj.flag = '🇸🇬';
        obj.country = 'Singapore';
        obj.latitude = 1.3407131662396297;
        obj.longitude = 103.70755503735327;
        break;

      case 'asia-southeast1-c':
        obj.location = 'Jurong West, Singapore, APAC';
        obj.flag = '🇸🇬';
        obj.country = 'Singapore';
        obj.latitude = 1.3407131662396297;
        obj.longitude = 103.70755503735327;
        break;

      case 'asia-southeast2':
        obj.location = 'Jakarta, Indonesia, APAC';
        obj.flag = '🇮🇩';
        obj.country = 'Indonesia';
        obj.latitude = -6.2044715630667024;
        obj.longitude = 106.84942043071396;
        break;

      case 'asia-southeast2-a':
        obj.location = 'Jakarta, Indonesia, APAC';
        obj.flag = '🇮🇩';
        obj.country = 'Indonesia';
        obj.latitude = -6.2044715630667024;
        obj.longitude = 106.84942043071396;
        break;

      case 'asia-southeast2-b':
        obj.location = 'Jakarta, Indonesia, APA';
        obj.flag = '🇮🇩';
        obj.country = 'Indonesia';
        obj.latitude = -6.2044715630667024;
        obj.longitude = 106.84942043071396;
        break;

      case 'asia-southeast2-c':
        obj.location = 'Jakarta, Indonesia, APAC';
        obj.flag = '🇮🇩';
        obj.country = 'Indonesia';
        obj.latitude = -6.2044715630667024;
        obj.longitude = 106.84942043071396;
        break;

      case 'australia-southeast1':
        obj.location = 'Sydney, Australia, APAC';
        obj.flag = '🇦🇺';
        obj.country = 'Australia';
        obj.latitude = -33.87073487362856;
        obj.longitude = 151.19698590089385;
        break;

      case 'australia-southeast1-a':
        obj.location = 'Sydney, Australia, APAC';
        obj.flag = '🇦🇺';
        obj.country = 'Australia';
        obj.latitude = -33.87073487362856;
        obj.longitude = 151.19698590089385;
        break;

      case 'australia-southeast1-b':
        obj.location = 'Sydney, Australia, APAC';
        obj.flag = '🇦🇺';
        obj.country = 'Australia';
        obj.latitude = -33.87073487362856;
        obj.longitude = 151.19698590089385;
        break;

      case 'australia-southeast1-c':
        obj.location = 'Sydney, Australia, APAC';
        obj.flag = '🇦🇺';
        obj.country = 'Australia';
        obj.latitude = -33.87073487362856;
        obj.longitude = 151.19698590089385;
        break;

      case 'australia-southeast2':
        obj.location = 'Melbourne, Australia, APAC';
        obj.flag = '🇦🇺';
        obj.country = 'Australia';
        obj.latitude = -37.82385692834917;
        obj.longitude = 144.96511708489982;
        break;

      case 'australia-southeast2-a':
        obj.location = 'Melbourne, Australia, APAC';
        obj.flag = '🇦🇺';
        obj.country = 'Australia';
        obj.latitude = -37.82385692834917;
        obj.longitude = 144.96511708489982;
        break;

      case 'australia-southeast2-b':
        obj.location = 'Melbourne, Australia, APAC';
        obj.flag = '🇦🇺';
        obj.country = 'Australia';
        obj.latitude = -37.82385692834917;
        obj.longitude = 144.96511708489982;
        break;

      case 'australia-southeast2-c':
        obj.location = 'Melbourne, Australia, APAC';
        obj.flag = '🇦🇺';
        obj.country = 'Australia';
        obj.latitude = -37.82385692834917;
        obj.longitude = 144.96511708489982;
        break;

      case 'europe-central2':
        obj.location = 'Warsaw, Poland, Europe';
        obj.flag = '🇵🇱';
        obj.country = 'Poland';
        obj.latitude = 52.22654651483688;
        obj.longitude = 21.02204917234495;
        break;

      case 'europe-central2-a':
        obj.location = 'Warsaw, Poland, Europe';
        obj.flag = '🇵🇱';
        obj.country = 'Poland';
        obj.latitude = 52.22654651483688;
        obj.longitude = 21.02204917234495;
        break;

      case 'europe-central2-b':
        obj.location = 'Warsaw, Poland, Europe';
        obj.flag = '🇵🇱';
        obj.country = 'Poland';
        obj.latitude = 52.22654651483688;
        obj.longitude = 21.02204917234495;
        break;

      case 'europe-central2-c':
        obj.location = 'Warsaw, Poland, Europe';
        obj.flag = '🇵🇱';
        obj.country = 'Poland';
        obj.latitude = 52.22654651483688;
        obj.longitude = 21.02204917234495;
        break;

      case 'europe-north1':
        obj.location = 'Hamina, Finland, Europe';
        obj.flag = '🇫🇮';
        obj.country = 'Finland';
        obj.latitude = 60.56924922394683;
        obj.longitude = 27.1879417938465;

        break;

      case 'europe-north1-a':
        obj.location = 'Hamina, Finland, Europe';
        obj.flag = '🇫🇮';
        obj.country = 'Finland';
        obj.latitude = 60.56924922394683;
        obj.longitude = 27.1879417938465;
        break;

      case 'europe-north1-b':
        obj.location = 'Hamina, Finland, Europe';
        obj.flag = '🇫🇮';
        obj.country = 'Finland';
        obj.latitude = 60.56924922394683;
        obj.longitude = 27.1879417938465;
        break;

      case 'europe-north1-c':
        obj.location = 'Hamina, Finland, Europe';
        obj.flag = '🇫🇮';
        obj.country = 'Finland';
        obj.latitude = 60.56924922394683;
        obj.longitude = 27.1879417938465;
        break;

      case 'europe-southwest1':
        obj.location = 'Madrid, Spain, Europe';
        obj.flag = '🇪🇸';
        obj.country = 'Spain';
        obj.latitude = 40.41487087399813;
        obj.longitude = -3.682290970398688;
        break;

      case 'europe-southwest1-a':
        obj.location = 'Madrid, Spain, Europe';
        obj.flag = '🇪🇸';
        obj.country = 'Spain';
        obj.latitude = 40.41487087399813;
        obj.longitude = -3.682290970398688;
        break;

      case 'europe-southwest1-b':
        obj.location = 'Madrid, Spain, Europe';
        obj.flag = '🇪🇸';
        obj.country = 'Spain';
        obj.latitude = 40.41487087399813;
        obj.longitude = -3.682290970398688;
        break;

      case 'europe-southwest1-c':
        obj.location = 'Madrid, Spain, Europe';
        obj.flag = '🇪🇸';
        obj.country = 'Spain';
        obj.latitude = 40.41487087399813;
        obj.longitude = -3.682290970398688;
        break;

      case 'europe-west1':
        obj.location = 'St. Ghislain, Belgium, Europe';
        obj.flag = '🇧🇪';
        obj.country = 'Belgium';
        obj.latitude = 50.47080139573716;
        obj.longitude = 3.8260563420731373;
        break;

      case 'europe-west1-a':
        obj.location = 'St. Ghislain, Belgium, Europe';
        obj.flag = '🇧🇪';
        obj.country = 'Belgium';
        obj.latitude = 50.47080139573716;
        obj.longitude = 3.8260563420731373;
        break;

      case 'europe-west1-b':
        obj.location = 'St. Ghislain, Belgium, Europe';
        obj.flag = '🇧🇪';
        obj.country = 'Belgium';
        obj.latitude = 50.47080139573716;
        obj.longitude = 3.8260563420731373;
        break;

      case 'europe-west1-c':
        obj.location = 'St. Ghislain, Belgium, Europ';
        obj.flag = '🇧🇪';
        obj.country = 'Belgium';
        obj.latitude = 50.47080139573716;
        obj.longitude = 3.8260563420731373;
        break;

      case 'europe-west1-d':
        obj.location = 'St. Ghislain, Belgium, Europe';
        obj.flag = '🇧🇪';
        obj.country = 'Belgium';
        obj.latitude = 50.47080139573716;
        obj.longitude = 3.8260563420731373;
        break;

      case 'europe-west2':
        obj.location = 'London, England, Europe';
        obj.flag = '🇬🇧';
        obj.country = 'England';
        obj.latitude = 51.52232705846787;
        obj.longitude = -0.12771565558202716;
        break;

      case 'europe-west2-a':
        obj.location = 'London, England, Europe';
        obj.flag = '🇬🇧';
        obj.country = 'England';
        obj.latitude = 51.52232705846787;
        obj.longitude = -0.12771565558202716;
        break;

      case 'europe-west2-b':
        obj.location = 'London, England, Europe';
        obj.flag = '🇬🇧';
        obj.country = 'England';
        obj.latitude = 51.52232705846787;
        obj.longitude = -0.12771565558202716;
        break;

      case 'europe-west2-c':
        obj.location = 'London, England, Europe';
        obj.flag = '🇬🇧';
        obj.country = 'England';
        obj.latitude = 51.52232705846787;
        obj.longitude = -0.12771565558202716;
        break;

      case 'europe-west3':
        obj.location = 'Frankfurt, Germany Europe';
        obj.flag = '🇩🇪';
        break;

      case 'europe-west3-a':
        obj.location = 'Frankfurt, Germany Europe';
        obj.flag = '🇩🇪';
        obj.country = 'Germany';
        obj.latitude = 50.11496378692057;
        obj.longitude = 8.667456402567119;
        break;

      case 'europe-west3-b':
        obj.location = 'Frankfurt, Germany Europe';
        obj.flag = '🇩🇪';
        obj.country = 'Germany';
        obj.latitude = 50.11496378692057;
        obj.longitude = 8.667456402567119;
        break;

      case 'europe-west3-c':
        obj.location = 'Frankfurt, Germany Europe';
        obj.flag = '🇩🇪';
        obj.country = 'Germany';
        obj.latitude = 50.11496378692057;
        obj.longitude = 8.667456402567119;
        break;

      case 'europe-west4':
        obj.location = 'Eemshaven, Netherlands, Europe';
        obj.flag = '🇳🇱';
        obj.country = 'Netherlands';
        obj.latitude = 53.438302384897305;
        obj.longitude = 6.833955577187057;
        break;

      case 'europe-west4-a':
        obj.location = 'Eemshaven, Netherlands, Europe';
        obj.flag = '🇳🇱';
        obj.country = 'Netherlands';
        obj.latitude = 53.438302384897305;
        obj.longitude = 6.833955577187057;
        break;

      case 'europe-west4-b':
        obj.location = 'Eemshaven, Netherlands, Europe';
        obj.flag = '🇳🇱';
        obj.country = 'Netherlands';
        obj.latitude = 53.438302384897305;
        obj.longitude = 6.833955577187057;
        break;

      case 'europe-west4-c':
        obj.location = 'Eemshaven, Netherlands, Europe';
        obj.flag = '🇳🇱';
        obj.country = 'Netherlands';
        obj.latitude = 53.438302384897305;
        obj.longitude = 6.833955577187057;
        break;

      case 'europe-west6':
        obj.location = 'Zurich, Switzerland, Europe';
        obj.flag = '🇨🇭';
        obj.country = 'Switzerland';
        obj.latitude = 47.37718788219791;
        obj.longitude = 8.542570266234392;
        break;

      case 'europe-west6-a':
        obj.location = 'Zurich, Switzerland, Europe';
        obj.flag = '🇨🇭';
        obj.country = 'Switzerland';
        obj.latitude = 47.37718788219791;
        obj.longitude = 8.542570266234392;
        break;

      case 'europe-west6-b':
        obj.location = 'Zurich, Switzerland, Europe';
        obj.flag = '🇨🇭';
        obj.country = 'Switzerland';
        obj.latitude = 47.37718788219791;
        obj.longitude = 8.542570266234392;
        break;

      case 'europe-west6-c':
        obj.location = 'Zurich, Switzerland, Europe';
        obj.flag = '🇨🇭';
        obj.country = 'Switzerland';
        obj.latitude = 47.37718788219791;
        obj.longitude = 8.542570266234392;
        break;

      case 'europe-west8':
        obj.location = 'Milan, Italy, Europe';
        obj.flag = '🇮🇹';
        obj.country = 'Italy';
        obj.latitude = 45.46560194310958;
        obj.longitude = 9.19077673020026;
        break;

      case 'europe-west8-a':
        obj.location = 'Milan, Italy, Europe';
        obj.flag = '🇮🇹';
        obj.country = 'Italy';
        obj.latitude = 45.46560194310958;
        obj.longitude = 9.19077673020026;
        break;

      case 'europe-west8-b':
        obj.location = 'Milan, Italy, Europe';
        obj.flag = '🇮🇹';
        obj.country = 'Italy';
        obj.latitude = 45.46560194310958;
        obj.longitude = 9.19077673020026;
        break;

      case 'europe-west8-c':
        obj.location = 'Milan, Italy, Europe';
        obj.flag = '🇮🇹';
        obj.country = 'Italy';
        obj.latitude = 45.46560194310958;
        obj.longitude = 9.19077673020026;
        break;

      case 'europe-west9':
        obj.location = 'Paris, France, Europe';
        obj.flag = '🇫🇷';
        obj.country = 'France';
        obj.latitude = 48.856574811479526;
        obj.longitude = 2.347376652902228;
        break;

      case 'europe-west9-a':
        obj.location = 'Paris, France, Europe';
        obj.flag = '🇫🇷';
        obj.country = 'France';
        obj.latitude = 48.856574811479526;
        obj.longitude = 2.347376652902228;
        break;

      case 'europe-west9-b':
        obj.location = 'Paris, France, Europe';
        obj.flag = '🇫🇷';
        obj.country = 'France';
        obj.latitude = 48.856574811479526;
        obj.longitude = 2.347376652902228;
        break;

      case 'europe-west9-c':
        obj.location = 'Paris, France, Europe';
        obj.flag = '🇫🇷';
        obj.country = 'France';
        obj.latitude = 48.856574811479526;
        obj.longitude = 2.347376652902228;
        break;

      case 'me-west1':
        obj.location = 'Tel Aviv, Israel, Middle East';
        obj.flag = '🇮🇱';
        obj.country = 'Israel';
        obj.latitude = 32.08267633809918;
        obj.longitude = 34.78831744102345;
        break;

      case 'me-west1-a':
        obj.location = 'Tel Aviv, Israel, Middle East';
        obj.flag = '🇮🇱';
        obj.country = 'Israel';
        obj.latitude = 32.08267633809918;
        obj.longitude = 34.78831744102345;
        break;

      case 'me-west1-b':
        obj.location = 'Tel Aviv, Israel, Middle East';
        obj.flag = '🇮🇱';
        obj.country = 'Israel';
        obj.latitude = 32.08267633809918;
        obj.longitude = 34.78831744102345;
        break;

      case 'me-west1-c':
        obj.location = 'Tel Aviv, Israel, Middle East';
        obj.flag = '🇮🇱';
        obj.country = 'Israel';
        obj.latitude = 32.08267633809918;
        obj.longitude = 34.78831744102345;
        break;

      case 'northamerica-northeast1':
        obj.location = 'Montréal, Québec, North America';
        obj.flag = '🇨🇦';
        obj.country = 'Canada';
        obj.latitude = 45.211464068877305;
        obj.longitude = -73.74996349467793;
        break;

      case 'northamerica-northeast1-a':
        obj.location = 'Montréal, Québec, North America';
        obj.flag = '🇨🇦';
        obj.country = 'Canada';
        obj.latitude = 45.211464068877305;
        obj.longitude = -73.74996349467793;
        break;

      case 'northamerica-northeast1-b':
        obj.location = 'Montréal, Québec, North America';
        obj.flag = '🇨🇦';
        obj.country = 'Canada';
        obj.latitude = 45.211464068877305;
        obj.longitude = -73.74996349467793;
        break;

      case 'northamerica-northeast1-c':
        obj.location = 'Montréal, Québec, North America';
        obj.flag = '🇨🇦';
        obj.country = 'Canada';
        obj.latitude = 45.211464068877305;
        obj.longitude = -73.74996349467793;
        break;

      case 'northamerica-northeast2':
        obj.location = 'Toronto, Ontario, North America';
        obj.flag = '🇨🇦';
        obj.country = 'Canada';
        obj.latitude = 43.654342284705905;
        obj.longitude = -79.37534050819683;
        break;

      case 'northamerica-northeast2-a':
        obj.location = 'Toronto, Ontario, North America';
        obj.flag = '🇨🇦';
        obj.country = 'Canada';
        obj.latitude = 43.654342284705905;
        obj.longitude = -79.37534050819683;
        break;

      case 'northamerica-northeast2-b':
        obj.location = 'Toronto, Ontario, North America';
        obj.flag = '🇨🇦';
        obj.country = 'Canada';
        obj.latitude = 43.654342284705905;
        obj.longitude = -79.37534050819683;
        break;

      case 'northamerica-northeast2-b':
        obj.location = 'Toronto, Ontario, North America';
        obj.flag = '🇨🇦';
        obj.country = 'Canada';
        obj.latitude = 43.654342284705905;
        obj.longitude = -79.37534050819683;
        break;

      case 'northamerica-northeast2-c':
        obj.location = 'Toronto, Ontario, North America';
        obj.flag = '🇨🇦';
        obj.country = 'Canada';
        obj.latitude = 43.654342284705905;
        obj.longitude = -79.37534050819683;
        break;

      case 'southamerica-east1':
        obj.location = 'Osasco, São Paulo, Brazil, South America';
        obj.flag = '🇧🇷';
        break;

      case 'southamerica-east1-a':
        obj.location = 'Osasco, São Paulo, Brazil, South America';
        obj.flag = '🇧🇷';
        obj.country = 'Brazil';
        obj.latitude = -23.531900266464817;
        obj.longitude = -46.791785879270236;
        break;

      case 'southamerica-east1-b':
        obj.location = 'Osasco, São Paulo, Brazil, South America';
        obj.flag = '🇧🇷';
        obj.country = 'Brazil';
        obj.latitude = -23.531900266464817;
        obj.longitude = -46.791785879270236;
        break;

      case 'southamerica-east1-c':
        obj.location = 'Osasco, São Paulo, Brazil, South America';
        obj.flag = '🇧🇷';
        obj.country = 'Brazil';
        obj.latitude = -23.531900266464817;
        obj.longitude = -46.791785879270236;
        break;

      case 'southamerica-west1':
        obj.location = 'Santiago, Chile, South America';
        obj.flag = '🇨🇱';
        obj.country = 'Chile';
        obj.latitude = -33.44979556034509;
        obj.longitude = -70.64975255160022;
        break;

      case 'southamerica-west1-a':
        obj.location = 'Santiago, Chile, South America';
        obj.flag = '🇨🇱';
        obj.country = 'Chile';
        obj.latitude = -33.44979556034509;
        obj.longitude = -70.64975255160022;
        break;

      case 'southamerica-west1-b':
        obj.location = 'Santiago, Chile, South America';
        obj.flag = '🇨🇱';
        obj.country = 'Chile';
        obj.latitude = -33.44979556034509;
        obj.longitude = -70.64975255160022;
        break;

      case 'southamerica-west1-c':
        obj.location = 'Santiago, Chile, South America';
        obj.flag = '🇨🇱';
        obj.country = 'Chile';
        obj.latitude = -33.44979556034509;
        obj.longitude = -70.64975255160022;
        break;

      case 'us-central1':
        obj.location = 'Council Bluffs, Iowa, North America';
        obj.flag = '🇺🇸';
        obj.country = 'United States of America';
        obj.latitude = 41.26005835984854;
        obj.longitude = -95.86419227653424;
        break;

      case 'us-central1-a':
        obj.location = 'Council Bluffs, Iowa, North America';
        obj.flag = '🇺🇸';
        obj.country = 'United States of America';
        obj.latitude = 41.26005835984854;
        obj.longitude = -95.86419227653424;
        break;

      case 'us-central1-b':
        obj.location = 'Council Bluffs, Iowa, North America';
        obj.flag = '🇺🇸';
        obj.country = 'United States of America';
        obj.latitude = 41.26005835984854;
        obj.longitude = -95.86419227653424;
        break;

      case 'us-central1-c':
        obj.location = 'Council Bluffs, Iowa, North America';
        obj.flag = '🇺🇸';
        obj.country = 'United States of America';
        obj.latitude = 41.26005835984854;
        obj.longitude = -95.86419227653424;
        break;

      case 'us-central1-f':
        obj.location = 'Council Bluffs, Iowa, North America';
        obj.flag = '🇺🇸';
        obj.country = 'United States of America';
        obj.latitude = 41.26005835984854;
        obj.longitude = -95.86419227653424;
        break;

      case 'us-east1-b':
        obj.location = 'Moncks Corner, South Carolina, North America';
        obj.flag = '🇺🇸';
        obj.country = 'United States of America';
        obj.latitude = 33.19598964160125;
        obj.longitude = -80.01054474958269;
        break;

      case 'us-east1-c':
        obj.location = 'Moncks Corner, South Carolina, North America';
        obj.flag = '🇺🇸';
        obj.country = 'United States of America';
        obj.latitude = 33.19598964160125;
        obj.longitude = -80.01054474958269;
        break;

      case 'us-east1-d':
        obj.location = 'Moncks Corner, South Carolina, North America';
        obj.flag = '🇺🇸';
        obj.country = 'United States of America';
        obj.latitude = 33.19598964160125;
        obj.longitude = -80.01054474958269;
        break;

      case 'us-east4':
        obj.location = 'Ashburn, Virginia, North America';
        obj.flag = '🇺🇸';
        obj.country = 'United States of America';
        obj.latitude = 39.043688823017725;
        obj.longitude = -77.48896818122361;
        break;

      case 'us-east4-a':
        obj.location = 'Ashburn, Virginia, North America';
        obj.flag = '🇺🇸';
        obj.country = 'United States of America';
        obj.latitude = 39.043688823017725;
        obj.longitude = -77.48896818122361;
        break;

      case 'us-east4-b':
        obj.location = 'Ashburn, Virginia, North America';
        obj.flag = '🇺🇸';
        obj.country = 'United States of America';
        obj.latitude = 39.043688823017725;
        obj.longitude = -77.48896818122361;
        break;

      case 'us-east4-c':
        obj.location = 'Ashburn, Virginia, North America';
        obj.flag = '🇺🇸';
        obj.country = 'United States of America';
        obj.latitude = 39.043688823017725;
        obj.longitude = -77.48896818122361;
        break;

      case 'us-east5':
        obj.location = 'Columbus, Ohio, North America';
        obj.flag = '🇺🇸';
        obj.country = 'United States of America';
        obj.latitude = 39.962748775617555;
        obj.longitude = -83.01577187759615;
        break;

      case 'us-east5-a':
        obj.location = 'Columbus, Ohio, North America';
        obj.flag = '🇺🇸';
        obj.country = 'United States of America';
        obj.latitude = 39.962748775617555;
        obj.longitude = -83.01577187759615;
        break;

      case 'us-east5-b':
        obj.location = 'Columbus, Ohio, North America';
        obj.flag = '🇺🇸';
        obj.country = 'United States of America';
        obj.latitude = 39.962748775617555;
        obj.longitude = -83.01577187759615;
        break;

      case 'us-east5-c':
        obj.location = 'Columbus, Ohio, North America';
        obj.flag = '🇺🇸';
        obj.country = 'United States of America';
        obj.latitude = 39.962748775617555;
        obj.longitude = -83.01577187759615;
        break;

      case 'us-south1':
        obj.location = 'Dallas, Texas, North America';
        obj.flag = '🇺🇸';
        obj.country = 'United States of America';
        obj.latitude = 32.7707132827855;
        obj.longitude = -96.81261117578829;
        break;

      case 'us-south1-a':
        obj.location = 'Dallas, Texas, North America';
        obj.flag = '🇺🇸';
        obj.country = 'United States of America';
        obj.latitude = 32.7707132827855;
        obj.longitude = -96.81261117578829;
        break;

      case 'us-south1-b':
        obj.location = 'Dallas, Texas, North America';
        obj.flag = '🇺🇸';
        obj.country = 'United States of America';
        obj.latitude = 32.7707132827855;
        obj.longitude = -96.81261117578829;
        break;

      case 'us-south1-c':
        obj.location = 'Dallas, Texas, North America';
        obj.flag = '🇺🇸';
        obj.country = 'United States of America';
        obj.latitude = 32.7707132827855;
        obj.longitude = -96.81261117578829;
        break;

      case 'us-west1':
        obj.location = 'The Dalles, Oregon, North America';
        obj.flag = '🇺🇸';
        obj.country = 'United States of America';
        obj.latitude = 45.594703214564866;
        obj.longitude = -121.17746583549774;
        break;

      case 'us-west1-a':
        obj.location = 'The Dalles, Oregon, North America';
        obj.flag = '🇺🇸';
        obj.country = 'United States of America';
        obj.latitude = 45.594703214564866;
        obj.longitude = -121.17746583549774;
        break;

      case 'us-west1-b':
        obj.location = 'The Dalles, Oregon, North America';
        obj.flag = '🇺🇸';
        obj.country = 'United States of America';
        obj.latitude = 45.594703214564866;
        obj.longitude = -121.17746583549774;
        break;

      case 'us-west1-c':
        obj.location = 'The Dalles, Oregon, North America';
        obj.flag = '🇺🇸';
        obj.country = 'United States of America';
        obj.latitude = 45.594703214564866;
        obj.longitude = -121.17746583549774;
        break;

      case 'us-west2':
        obj.location = 'Los Angeles, California, North America';
        obj.flag = '🇺🇸';
        obj.country = 'United States of America';
        obj.latitude = 34.04292305028126;
        obj.longitude = -118.21813240055846;
        break;

      case 'us-west2-a':
        obj.location = 'Los Angeles, California, North America';
        obj.flag = '🇺🇸';
        obj.country = 'United States of America';
        obj.latitude = 34.04292305028126;
        obj.longitude = -118.21813240055846;
        break;

      case 'us-west2-b':
        obj.location = 'Los Angeles, California, North America';
        obj.flag = '🇺🇸';
        obj.country = 'United States of America';
        obj.latitude = 34.04292305028126;
        obj.longitude = -118.21813240055846;
        break;

      case 'us-west2-c':
        obj.location = 'Los Angeles, California, North America';
        obj.flag = '🇺🇸';
        obj.country = 'United States of America';
        obj.latitude = 34.04292305028126;
        obj.longitude = -118.21813240055846;
        break;

      case 'us-west3':
        obj.location = 'Salt Lake City, Utah, North America';
        obj.flag = '🇺🇸';
        obj.country = 'United States of America';
        obj.latitude = 40.76144238418413;
        obj.longitude = -111.89920673708659;
        break;

      case 'us-west3-a':
        obj.location = 'Salt Lake City, Utah, North America';
        obj.flag = '🇺🇸';
        obj.country = 'United States of America';
        obj.latitude = 40.76144238418413;
        obj.longitude = -111.89920673708659;
        break;

      case 'us-west3-b':
        obj.location = 'Salt Lake City, Utah, North America';
        obj.flag = '🇺🇸';
        obj.country = 'United States of America';
        obj.latitude = 40.76144238418413;
        obj.longitude = -111.89920673708659;
        break;

      case 'us-west3-c':
        obj.location = 'Salt Lake City, Utah, North America';
        obj.flag = '🇺🇸';
        obj.country = 'United States of America';
        obj.latitude = 40.76144238418413;
        obj.longitude = -111.89920673708659;
        break;

      case 'us-west4':
        obj.location = 'Las Vegas, Nevada, North America';
        obj.flag = '🇺🇸';
        break;

      case 'us-west4-a':
        obj.location = 'Las Vegas, Nevada, North America';
        obj.flag = '🇺🇸';
        obj.country = 'United States of America';
        obj.latitude = 36.16927603957162;
        obj.longitude = -115.17363495410044;
        break;

      case 'us-west4-b':
        obj.location = 'Las Vegas, Nevada, North America';
        obj.flag = '🇺🇸';
        obj.country = 'United States of America';
        obj.latitude = 36.16927603957162;
        obj.longitude = -115.17363495410044;
        break;

      case 'us-west4-c':
        obj.location = 'Las Vegas, Nevada, North America';
        obj.flag = '🇺🇸';
        obj.country = 'United States of America';
        obj.latitude = 36.16927603957162;
        obj.longitude = -115.17363495410044;
        break;

      default:
        obj.location = 'GCP';
        obj.flag = '⚠️';
        break;
    }
  } else if (provider === 'Vercel') {
    switch (region) {
      case 'arn1':
        obj.location = 'Stockholm, Sweden';
        obj.flag = '🇸🇪';
        obj.country = 'Sweden';
        obj.latitude = 59.69793405312221;
        obj.longitude = 18.20620045137292;
        obj.provider_region = 'AWS eu-north-1';
        break;

      case 'bom1':
        obj.location = 'Mumbai, India';
        obj.flag = '🇮🇳';
        obj.country = 'India';
        obj.latitude = 19.09548432841732;
        obj.longitude = 72.86969881880101;
        obj.provider_region = 'AWS ap-south-1';
        break;

      case 'cdg1':
        obj.location = 'Paris, France';
        obj.flag = '🇫🇷';
        obj.country = 'France';
        obj.latitude = 49.009809010793596;
        obj.longitude = 2.548250211580158;
        obj.provider_region = 'AWS eu-west-3';
        break;

      case 'cle1':
        obj.location = 'Cleveland, USA';
        obj.flag = '🇺🇸';
        obj.country = 'United States of America';
        obj.latitude = 41.406023797586265;
        obj.longitude = -81.85351285044766;
        obj.provider_region = 'AWS us-east-2';
        break;

      case 'cpt1':
        obj.location = 'Cape Town, South Africa';
        obj.flag = '🇿🇦';
        obj.country = 'South Africa';
        obj.latitude = -33.97131172127812;
        obj.longitude = 18.602557166800676;
        obj.provider_region = 'AWS af-south-1';
        break;

      case 'dub1':
        obj.location = 'Dublin, Ireland';
        obj.flag = '🇮🇪';
        obj.country = 'Ireland';
        obj.latitude = 53.42653113218513;
        obj.longitude = -6.249555759349427;
        obj.provider_region = 'AWS eu-west-1';
        break;

      case 'fra1':
        obj.location = 'Frankfurt, Germany';
        obj.flag = '🇩🇪';
        obj.country = 'Germany';
        obj.latitude = 50.038983433124926;
        obj.longitude = 8.568755396715563;
        obj.provider_region = 'AWS eu-central-1';
        break;

      case 'gru1':
        obj.location = 'São Paulo, Brazil';
        obj.flag = '🇧🇷';
        obj.country = 'Brazil';
        obj.latitude = -23.4303564714532;
        obj.longitude = -46.472442201356245;
        obj.provider_region = 'AWS sa-east-1';
        break;

      case 'hkg1':
        obj.location = 'Hong Kong';
        obj.flag = '🇭🇰';
        obj.country = 'China';
        obj.latitude = 22.308314982981454;
        obj.longitude = 113.91900651054856;
        obj.provider_region = 'AWS ap-east-1';
        break;

      case 'hnd1':
        obj.location = 'Tokyo, Japan';
        obj.flag = '🇯🇵';
        obj.country = 'Japan';
        obj.latitude = 35.549637541917555;
        obj.longitude = 139.78035356941373;
        obj.provider_region = 'AWS ap-northeast-1';
        break;

      case 'iad1':
        obj.location = 'Washington, D.C., USA';
        obj.flag = '🇺🇸';
        obj.country = 'United States of America';
        obj.latitude = 38.95329973388636;
        obj.longitude = -77.45615256400193;
        obj.provider_region = 'AWS us-east-1';
        break;

      case 'icn1':
        obj.location = 'Seoul, South Korea';
        obj.flag = '🇰🇷';
        obj.country = 'South Korea';
        obj.latitude = 37.46030995293819;
        obj.longitude = 126.4415754501759;
        obj.provider_region = 'AWS ap-northeast-2';
        break;

      case 'kix1':
        obj.location = 'Osaka, Japan';
        obj.flag = '🇯🇵';
        obj.country = 'Japan';
        obj.latitude = 34.432259004507706;
        obj.longitude = 135.23078013589355;
        obj.provider_region = 'AWS ap-northeast-3';
        break;

      case 'lhr1':
        obj.location = 'London, United Kingdom';
        obj.flag = '🇬🇧';
        obj.country = 'England';
        obj.latitude = 51.47010916169302;
        obj.longitude = -0.4538019752891245;
        obj.provider_region = 'AWS eu-west-2';
        break;

      case 'pdx1':
        obj.location = 'Portland, USA';
        obj.flag = '🇺🇸';
        obj.country = ' United States of America';
        obj.latitude = 45.589836950438105;
        obj.longitude = -122.59477233684096;
        obj.provider_region = 'AWS us-west-2';
        break;

      case 'sfo1':
        obj.location = 'San Francisco, USA';
        obj.flag = '🇺🇸';
        obj.country = 'United States of America';
        obj.latitude = 37.62151682925049;
        obj.longitude = -122.37853697752644;
        obj.provider_region = 'AWS us-west-1';
        break;

      case 'sin1':
        obj.location = 'Singapore';
        obj.flag = '🇸🇬';
        obj.country = 'Singapore';
        obj.latitude = 1.3645489085294884;
        obj.longitude = 103.99276461360598;
        obj.provider_region = 'AWS ap-southeast-1';
        break;

      case 'syd1':
        obj.location = 'Sydney, Australia';
        obj.flag = '🇦🇺';
        obj.country = 'Australia';
        obj.latitude = -33.94994538212224;
        obj.longitude = 151.18242738214366;
        obj.provider_region = 'AWS ap-southeast-2';
        break;

      default:
        obj.location = 'Vercel';
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

  return {
    ...obj,
    raw: region || null,
  };
};
