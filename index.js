exports.getInfo = function (region, { provider = 'AWS' }) {
  let obj = {
    country: '',
    state: '',
    flag: '',
  };

  if (provider !== 'AWS') {
    switch (region) {
      case 'eu-west':
        obj.country = 'Ireland';
        obj.flag = '🇮🇪';
        break;

      default:
        obj.country = 'Poop';
        obj.flag = '💩';
        break;
    }
  }

  switch (region) {
    case 'us-west2':
      obj.country = 'US';
      obj.state = 'California';
      obj.flag = '🇺🇸';
      break;

    default:
      obj.country = 'Poop';
      obj.flag = '💩';
      break;
  }

  return obj;
};
