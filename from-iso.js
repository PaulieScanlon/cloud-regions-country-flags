exports.fromISO = function (entry) {
  let obj = {
    country: null,
    flag: '',
    latitude: 0,
    longitude: 0,
  };

  if (entry) {
    // ISO https://en.wikipedia.org/wiki/ISO_3166-2
    switch (entry) {
      case 'AD':
        obj.country = 'Andorra';
        obj.flag = '🇦🇩';
        obj.latitude = 42.54219742307233;
        obj.longitude = 1.8335480705276717;
        break;

      case 'AE':
        obj.country = 'United Arab Emirates';
        obj.flag = '🇦🇪';
        obj.latitude = 23.765992706949078;
        obj.longitude = 53.789979352612015;
        break;

      case 'AF':
        obj.country = 'Afghanistan';
        obj.flag = '🇦🇫';
        obj.latitude = 34.00747188845312;
        obj.longitude = 64.9401041577132;
        break;

      case 'AG':
        obj.country = 'Antigua and Barbuda';
        obj.flag = '🇦🇬';
        obj.latitude = 17.120490811087635;
        obj.longitude = -61.290762583497134;
        break;

      case 'AI':
        obj.country = 'Anguilla';
        obj.flag = '🇦🇮';
        obj.latitude = 18.22477090451436;
        obj.longitude = -63.0272811070704;
        break;

      case 'AL':
        obj.country = 'Albania';
        obj.flag = '🇦🇱';
        obj.latitude = 41.01501331024984;
        obj.longitude = 20.154902628555515;
        break;

      case 'AM':
        obj.country = 'Armenia';
        obj.flag = '🇦🇲';
        obj.latitude = 40.29243665563313;
        obj.longitude = 44.64331127182003;
        break;

      case 'AO':
        obj.country = 'Angola';
        obj.flag = '🇦🇴';
        obj.latitude = -12.49730986588547;
        obj.longitude = 17.04350377237884;
        break;

      case 'AQ':
        obj.country = null;
        obj.continent = 'Antarctica';
        obj.flag = '🇦🇶';
        obj.latitude = -76.12802900017041;
        obj.longitude = 19.66360007190926;
        break;

      case 'AR':
        obj.country = 'Argentina';
        obj.flag = '🇦🇷';
        obj.latitude = -35.13833339024335;
        obj.longitude = -65.98122436953953;

      case 'AS':
        obj.country = 'American Samoa';
        obj.flag = '🇦🇸';
        obj.latitude = -14.274162517024491;
        obj.longitude = -170.6678257627142;
        break;

      case 'AS':
        obj.country = 'Austria';
        obj.flag = '🇦🇹';
        obj.latitude = 47.50512239084452;
        obj.longitude = 14.066527631349418;
        break;

      case 'AU':
        obj.country = 'Australia';
        obj.flag = '🇦🇺';
        obj.latitude = -24.60019522695711;
        obj.longitude = 133.66052493017483;
        break;

      case 'AW':
        obj.country = 'Aruba';
        obj.flag = '🇦🇼';
        obj.latitude = 12.515637912318978;
        obj.longitude = -69.98377876368944;
        break;

      case 'AX':
        obj.country = 'Åland Islands';
        obj.flag = '🇦🇽';
        obj.latitude = 60.26650521589083;
        obj.longitude = 19.99596656621578;
        break;

      case 'AZ':
        obj.country = 'Azerbaijan';
        obj.flag = '🇦🇿';
        obj.latitude = 40.42445935324398;
        obj.longitude = 47.5716333243982;
        break;

      case 'BA':
        obj.country = 'Bosnia and Herzegovina';
        obj.flag = '🇧🇦';
        obj.latitude = 44.57883938904857;
        obj.longitude = 17.86129833659776;
        break;

      case 'BB':
        obj.country = 'Barbados';
        obj.flag = '🇧🇧';
        obj.latitude = 13.166744521391836;
        obj.longitude = -59.4473751174841;
        break;

      case 'BD':
        obj.country = 'Bangladesh';
        obj.flag = '🇧🇩';
        obj.latitude = 24.1859385084226;
        obj.longitude = 90.79346130151275;
        break;

      case 'BE':
        obj.country = 'Belgium';
        obj.flag = '🇧🇪';
        obj.latitude = 50.50048065967585;
        obj.longitude = 4.6516171888011995;
        break;

      case 'BF':
        obj.country = 'Burkina Faso';
        obj.flag = '🇧🇫';
        obj.latitude = 12.661283142234888;
        obj.longitude = -1.8985966731720243;
        break;

      case 'BG':
        obj.country = 'Bulgaria';
        obj.flag = '🇧🇬';
        obj.latitude = 42.47581164824829;
        obj.longitude = 25.163549446859093;
        break;

      case 'BH':
        obj.country = 'Bahrain';
        obj.flag = '🇧🇭';
        obj.latitude = 26.04066718781086;
        obj.longitude = 50.56693858228225;
        break;

      case 'BI':
        obj.country = 'Burundi';
        obj.flag = '🇧🇮';
        obj.latitude = -3.3340447068541894;
        obj.longitude = 29.957470504775962;
        break;

      case 'BJ':
        obj.country = 'Benin';
        obj.flag = '🇧🇯';
        obj.latitude = 9.625444856088428;
        obj.longitude = 2.514929234971011;
        break;

      case 'BL':
        obj.country = 'Saint Barthélemy';
        obj.flag = '🇧🇱';
        obj.latitude = 17.89335115903525;
        obj.longitude = -62.84811409447476;
        break;

      case 'BM':
        obj.country = 'Bermuda';
        obj.flag = '🇧🇲';
        obj.latitude = 32.315739678057206;
        obj.longitude = -64.71559707688624;
        break;

      case 'BN':
        obj.country = 'Brunei Darussalam';
        obj.flag = '🇧🇳';
        obj.latitude = 4.505546012361069;
        obj.longitude = 114.68074281824785;
        break;

      case 'BO':
        obj.country = 'Bolivia (Plurinational State of)';
        obj.flag = '🇧🇴';
        obj.latitude = -16.682220373085507;
        obj.longitude = -64.67463200080708;
        break;

      case 'BQ':
        obj.country = 'Bonaire, Sint Eustatius and Saba';
        obj.flag = '🏴󠁢󠁱󠁢󠁯󠁿';
        obj.latitude = 14.768852374145784;
        obj.longitude = -65.7329525624942;
        break;

      case 'BR':
        obj.country = 'Brazil';
        obj.flag = '🇧🇷';
        obj.latitude = -8.340737297433009;
        obj.longitude = -55.29373794718702;
        break;

      case 'BS':
        obj.country = 'Bahamas';
        obj.flag = '🇧🇸';
        obj.latitude = 24.80809818759481;
        obj.longitude = -77.51841141012547;
        break;

      case 'BT':
        obj.country = 'Bhutan';
        obj.flag = '🇧🇹';
        obj.latitude = 27.709782959704523;
        obj.longitude = 90.51567141767501;
        break;

      case 'BV':
        obj.country = 'Bouvet Island';
        obj.flag = '🇧🇻';
        obj.latitude = -54.41404175751273;
        obj.longitude = 3.3434384439738256;
        break;

      case 'BW':
        obj.country = 'Botswana';
        obj.flag = '🇧🇼';
        obj.latitude = -22.21625322542574;
        obj.longitude = 24.054660484762678;
        break;

      case 'BY':
        obj.country = 'Belarus';
        obj.flag = '🇧🇾';
        obj.latitude = 53.093412603163536;
        obj.longitude = 28.689633381912344;
        break;

      case 'BZ':
        obj.country = 'Belize';
        obj.flag = '🇧🇿';
        obj.latitude = 17.276889560281344;
        obj.longitude = -88.4911224885222;
        break;

      case 'CA':
        obj.country = 'Canada';
        obj.flag = '🇨🇦';
        obj.latitude = 46.10571637853169;
        obj.longitude = -77.9384778013019;
        break;

      case 'CC':
        obj.country = 'Cocos (Keeling) Islands';
        obj.flag = '🇨🇨';
        obj.latitude = -12.154862839861567;
        obj.longitude = 96.87305377454918;
        break;

      case 'CD':
        obj.country = 'Congo, Democratic Republic of the';
        obj.flag = '🇨🇩';
        obj.latitude = -2.8634005052035256;
        obj.longitude = 23.528076653418562;
        break;

      case 'CF':
        obj.country = 'Central African Republic';
        obj.flag = '🇨🇫';
        obj.latitude = 6.670277260892522;
        obj.longitude = 20.6381325430199;
        break;

      case 'CG':
        obj.country = 'Congo';
        obj.flag = '🇨🇩';
        obj.latitude = -2.5122253278450914;
        obj.longitude = 23.528076653418562;
        break;

      case 'CH':
        obj.country = 'Switzerland';
        obj.flag = '🇨🇭';
        obj.latitude = 46.81614186422937;
        obj.longitude = 8.153663957610641;
        break;

      case 'CI':
        obj.country = "Côte d'Ivoire";
        obj.flag = '🇨🇮';
        obj.latitude = 7.6834821938448545;
        obj.longitude = -5.540572631191793;
        break;

      case 'CK':
        obj.country = 'Cook Islands';
        obj.flag = '🇨🇰';
        obj.latitude = -20.994237512596058;
        obj.longitude = -158.90020928973482;
        break;

      case 'CL':
        obj.country = 'Chile';
        obj.flag = '🇨🇱';
        obj.latitude = -32.27061700615451;
        obj.longitude = -71.05524166525102;
        break;

      case 'CM':
        obj.country = 'Cameroon';
        obj.flag = '🇨🇲';
        obj.latitude = 5.557012295352201;
        obj.longitude = 12.850284461897543;
        break;

      case 'CN':
        obj.country = 'China';
        obj.flag = '🇨🇳';
        obj.latitude = 38.20677744909823;
        obj.longitude = 103.89616913236235;
        break;

      case 'CO':
        obj.country = 'Colombia';
        obj.flag = '🇨🇴';
        obj.latitude = 3.579950380716211;
        obj.longitude = -72.22148806083545;
        break;

      case 'CR':
        obj.country = 'Costa Rica';
        obj.flag = '🇨🇷';
        obj.latitude = 10.52176776942537;
        obj.longitude = -83.7469087118786;
        break;

      case 'CU':
        obj.country = 'Cuba';
        obj.flag = '🇨🇺';
        obj.latitude = 21.519382695188717;
        obj.longitude = -78.61476487412767;
        break;

      case 'CV':
        obj.country = 'Cabo Verde';
        obj.flag = '🇨🇻';
        obj.latitude = 14.995225110144156;
        obj.longitude = -23.447835121884662;
        break;

      case 'CW':
        obj.country = 'Curaçao';
        obj.flag = '🇨🇼';
        obj.latitude = 12.17283567629808;
        obj.longitude = -69.0128217271562;
        break;

      case 'CX':
        obj.country = 'Christmas Island';
        obj.flag = '🇨🇽';
        obj.latitude = -10.450813800561269;
        obj.longitude = 105.70929077150204;
        break;

      case 'CY':
        obj.country = 'Cyprus';
        obj.flag = '🇨🇾';
        obj.latitude = 35.273885838578266;
        obj.longitude = 33.45597010273768;
        break;

      case 'CZ':
        obj.country = 'Czechia';
        obj.flag = '🇨🇿';
        obj.latitude = 49.73170791961145;
        obj.longitude = 14.944066870431755;
        break;

      case 'DE':
        obj.country = 'Germany';
        obj.flag = '🇩🇪';
        obj.latitude = 51.11003045397557;
        obj.longitude = 10.14926043083993;
        break;

      case 'DJ':
        obj.country = 'Djibouti';
        obj.flag = '🇩🇯';
        obj.latitude = 11.703578892553269;
        obj.longitude = 42.65412290432236;
        break;

      case 'DK':
        obj.country = 'Denmark';
        obj.flag = '🇩🇰';
        obj.latitude = 55.53243152386705;
        obj.longitude = 10.047284688373255;
        break;

      case 'DM':
        obj.country = 'Dominica';
        obj.flag = '🇩🇲';
        obj.latitude = 15.431624748784126;
        obj.longitude = -61.33176586210797;
        break;

      case 'DO':
        obj.country = 'Dominican Republic';
        obj.flag = '🇩🇴';
        obj.latitude = 19.030945768824946;
        obj.longitude = -70.04509337091196;
        break;

      case 'DZ':
        obj.country = 'Algeria';
        obj.flag = '🇩🇿';
        obj.latitude = 28.144717195361608;
        obj.longitude = 2.3698219414864714;
        break;

      case 'EC':
        obj.country = 'Ecuador';
        obj.flag = '🇪🇨';
        obj.latitude = -1.4313647428314709;
        obj.longitude = -78.08735491846167;
        break;

      case 'EE':
        obj.country = 'Estonia';
        obj.flag = '🇪🇪';
        obj.latitude = 58.70729126424299;
        obj.longitude = 26.118478379893283;
        break;

      case 'EG':
        obj.country = 'Egypt';
        obj.flag = '🇪🇬';
        obj.latitude = 27.598895747587513;
        obj.longitude = 31.08752004471908;
        break;

      case 'EH':
        obj.country = 'Western Sahara';
        obj.flag = '🇪🇭';
        obj.latitude = 24.450177605702613;
        obj.longitude = -12.83280822169958;
        break;

      case 'ER':
        obj.country = 'Eritrea';
        obj.flag = '🇪🇷';
        obj.latitude = 15.29160723408288;
        obj.longitude = 38.3021589306892;
        break;

      case 'ES':
        obj.country = 'Spain';
        obj.flag = '🇪🇸';
        obj.latitude = 39.59112037839469;
        obj.longitude = -3.1656777148900352;
        break;

      case 'ET':
        obj.country = 'Ethiopia';
        obj.flag = '🇪🇹';
        obj.latitude = 8.690547253427939;
        obj.longitude = 39.587203927981804;
        break;

      case 'FI':
        obj.country = 'Finland';
        obj.flag = '🇫🇮';
        obj.latitude = 61.94375311164044;
        obj.longitude = 26.394102294582293;
        break;

      case 'FJ':
        obj.country = 'Fiji';
        obj.flag = '🇫🇯';
        obj.latitude = -17.891558409417392;
        obj.longitude = 177.86588008628343;
        break;

      case 'FK':
        obj.country = 'Falkland Islands (Malvinas)';
        obj.flag = '🇫🇰';
        obj.latitude = -51.69280481434272;
        obj.longitude = -58.62833986504577;
        break;

      case 'FM':
        obj.country = null;
        obj.states = 'Micronesia (Federated States of)';
        obj.flag = '🇫🇲';
        obj.latitude = -6.018010119714896;
        obj.longitude = 144.90258427829343;
        break;

      case 'FO':
        obj.country = 'Faroe Islands';
        obj.flag = '🇫🇴';
        obj.latitude = 62.11406449066192;
        obj.longitude = -7.0314698333772725;
        break;

      case 'FR':
        obj.country = 'France';
        obj.flag = '🇫🇷';
        obj.latitude = 46.50725458249909;
        obj.longitude = 2.437813771746082;
        break;

      case 'GA':
        obj.country = 'Gabon';
        obj.flag = '🇬🇦';
        obj.latitude = -0.6352972294335129;
        obj.longitude = 11.766259186174551;
        break;

      case 'GB':
        obj.country = 'United Kingdom of Great Britain and Northern Ireland';
        obj.flag = '🇬🇧';
        obj.latitude = 55.02967723275;
        obj.longitude = -1.6577333527548752;
        break;

      case 'GD':
        obj.country = 'Grenada';
        obj.flag = '🇬🇩';
        obj.latitude = 12.08783276688864;
        obj.longitude = -61.59789477801768;
        break;

      case 'GE':
        obj.country = 'Georgia';
        obj.flag = '🇬🇪';
        obj.latitude = 42.606678193655135;
        obj.longitude = 43.35136944531752;
        break;

      case 'GF':
        obj.country = 'French Guiana';
        obj.flag = '🇬🇫';
        obj.latitude = 4.774646999428428;
        obj.longitude = -52.70991136012295;
        break;

      case 'GG':
        obj.country = 'Guernsey';
        obj.flag = '🇬🇬';
        obj.latitude = 49.45405480960727;
        obj.longitude = -2.578849268791085;
        break;

      case 'GH':
        obj.country = 'Ghana';
        obj.flag = '🇬🇭';
        obj.latitude = 7.858784684257647;
        obj.longitude = -1.0014230135005935;
        break;

      case 'GI':
        obj.country = 'Gibraltar';
        obj.flag = '🇬🇮';
        obj.latitude = 36.14225880865141;
        obj.longitude = -5.343944984032734;
        break;

      case 'GL':
        obj.country = 'Greenland';
        obj.flag = '🇬🇱';
        obj.latitude = 72.6410083597597;
        obj.longitude = -39.65369477802369;
        break;

      case 'GM':
        obj.country = 'Gambia';
        obj.flag = '🇬🇲';
        obj.latitude = 13.38623249566514;
        obj.longitude = -15.14126036490484;
        break;

      case 'GN':
        obj.country = 'Guinea';
        obj.flag = '🇬🇳';
        obj.latitude = 10.465342184168952;
        obj.longitude = -11.057198757912076;
        break;

      case 'GP':
        obj.country = 'Guadeloupe';
        obj.flag = '🇬🇵';
        obj.latitude = 16.230668361746165;
        obj.longitude = -61.504333813724145;
        break;

      case 'GQ':
        obj.country = 'Equatorial Guinea';
        obj.flag = '🇬🇶';
        obj.latitude = 1.5798232974943942;
        obj.longitude = 10.751384433791193;
        break;

      case 'GR':
        obj.country = 'Greece';
        obj.flag = '🇬🇷';
        obj.latitude = 39.620950758303444;
        obj.longitude = 21.90423685851937;
        break;

      case 'GS':
        obj.country = 'South Georgia and the South Sandwich Islands';
        obj.flag = '🇬🇸';
        obj.latitude = -54.08730200715012;
        obj.longitude = -36.897579824769835;
        break;

      case 'GT':
        obj.country = 'Guatemala';
        obj.flag = '🇬🇹';
        obj.latitude = 15.954539318294147;
        obj.longitude = -90.1609151959573;
        break;

      case 'GU':
        obj.country = 'Guam';
        obj.flag = '🇬🇺';
        obj.latitude = 13.44752396039956;
        obj.longitude = 144.75843624995574;
        break;

      case 'GW':
        obj.country = 'Guinea-Bissau';
        obj.flag = '🇬🇼';
        obj.latitude = 12.154306438224278;
        obj.longitude = -15.325290000822829;
        break;

      case 'GY':
        obj.country = 'Guyana';
        obj.flag = '🇬🇾';
        obj.latitude = 5.171481886395514;
        obj.longitude = -58.86822567430631;
        break;

      case 'HK':
        obj.country = 'Hong Kong';
        obj.flag = '🇭🇰';
        obj.latitude = 22.27553653523117;
        obj.longitude = 114.21268466264434;
        break;

      case 'HM':
        obj.country = null;
        obj.entry = 'Heard Island and McDonald Islands';
        obj.flag = '🇭🇲';
        obj.latitude = -53.08093840307235;
        obj.longitude = 73.50529171202695;
        break;

      case 'HN':
        obj.country = 'Honduras';
        obj.flag = '🇭🇳';
        obj.latitude = 14.840269617496793;
        obj.longitude = -86.72865781537614;
        break;

      case 'HR':
        obj.country = 'Croatia';
        obj.flag = '🇭🇷';
        obj.latitude = 45.092947623735036;
        obj.longitude = 14.97240627217616;
        break;

      case 'HT':
        obj.country = 'Haiti';
        obj.flag = '🇭🇹';
        obj.latitude = 18.96977674833304;
        obj.longitude = -72.66745437438543;
        break;

      case 'HU':
        obj.country = 'Hungary';
        obj.flag = '🇭🇺';
        obj.latitude = 47.028977953482205;
        obj.longitude = 19.588432107842216;
        break;

      case 'ID':
        obj.country = 'Indonesia';
        obj.flag = '🇮🇩';
        obj.latitude = -2.2347092692754233;
        obj.longitude = 115.0599759920655;
        break;

      case 'IE':
        obj.country = 'Ireland';
        obj.flag = '🇮🇪';
        obj.latitude = 53.33904399663884;
        obj.longitude = -6.826988618761497;
        break;

      case 'IL':
        obj.country = 'Israel';
        obj.flag = '🇮🇱';
        obj.latitude = 31.499286321505988;
        obj.longitude = 34.84322121616322;
        break;

      case 'IM':
        obj.country = 'Isle of Man';
        obj.flag = '🇮🇲';
        obj.latitude = 54.28748074963933;
        obj.longitude = -4.524163273686122;
        break;

      case 'IN':
        obj.country = 'India';
        obj.flag = '🇮🇳';
        obj.latitude = 21.73816039057258;
        obj.longitude = 79.14255294208293;
        break;

      case 'IO':
        obj.country = 'British Indian Ocean Territory';
        obj.flag = '🇮🇴';
        obj.latitude = -7.376970820744313;
        obj.longitude = 72.47950749929943;
        break;

      case 'IQ':
        obj.country = 'Iraq';
        obj.flag = '🇮🇶';
        obj.latitude = 33.11877272850188;
        obj.longitude = 43.103098165167104;
        break;

      case 'IR':
        obj.country = 'Iran (Islamic Republic of)';
        obj.flag = '🇮🇷';
        obj.latitude = 33.304563706387576;
        obj.longitude = 53.74820958486598;
        break;

      case 'IS':
        obj.country = 'Iceland';
        obj.flag = '🇮🇸';
        obj.latitude = 64.97026873207335;
        obj.longitude = -17.983162033181696;
        break;

      case 'IT':
        obj.country = 'Italy';
        obj.flag = '🇮🇹';
        obj.latitude = 42.96795046714375;
        obj.longitude = 12.515000759633178;
        break;

      case 'JE':
        obj.country = 'Jersey';
        obj.flag = '🇯🇪';
        obj.latitude = 49.21790890526518;
        obj.longitude = -2.1098385878242545;
        break;

      case 'JM':
        obj.country = 'Jamaica';
        obj.flag = '🇯🇲';
        obj.latitude = 18.17948838192215;
        obj.longitude = -77.30103501785283;
        break;

      case 'JO':
        obj.country = 'Jordan';
        obj.flag = '🇯🇴';
        obj.latitude = 31.32620272286996;
        obj.longitude = 36.82360149308323;
        break;

      case 'JP':
        obj.country = 'Japan';
        obj.flag = '🇯🇵';
        obj.latitude = 37.36345801797922;
        obj.longitude = 138.58468556213472;
        break;

      case 'KE':
        obj.country = 'Kenya';
        obj.flag = '🇰🇪';
        obj.latitude = 0.373810884212869;
        obj.longitude = 37.98094909161015;
        break;

      case 'KG':
        obj.country = 'Kyrgyzstan';
        obj.flag = '🇰🇬';
        obj.latitude = 41.60142918208282;
        obj.longitude = 74.6806200009406;
        break;

      case 'KH':
        obj.country = 'Cambodia';
        obj.flag = '🇰🇭';
        obj.latitude = 12.645878929074794;
        obj.longitude = 105.05403218653798;
        break;

      case 'KI':
        obj.country = 'Kiribati';
        obj.flag = '🇰🇮';
        obj.latitude = 1.8462122650475126;
        obj.longitude = -157.36053580189346;
        break;

      case 'KM':
        obj.country = 'Comoros';
        obj.flag = '🇰🇲';
        obj.latitude = -11.674995440213046;
        obj.longitude = 43.34721530786888;
        break;

      case 'KN':
        obj.country = 'Saint Kitts and Nevis';
        obj.flag = '🇰🇳';
        obj.latitude = 17.38051221843831;
        obj.longitude = -62.74813902010467;
        break;

      case 'KP':
        obj.country = "Korea (Democratic People's Republic of)";
        obj.flag = '🇰🇵';
        obj.latitude = 40.10167906087009;
        obj.longitude = 129.41379538718564;
        break;

      case 'KR':
        obj.country = 'Korea, Republic of';
        obj.flag = '🇰🇷';
        obj.latitude = 36.18052943145666;
        obj.longitude = 127.82077791832238;
        break;

      case 'KW':
        obj.country = 'Kuwait';
        obj.flag = '🇰🇼';
        obj.latitude = 29.3525130765721;
        obj.longitude = 47.37032274991838;
        break;

      case 'KY':
        obj.country = 'Cayman Islands';
        obj.flag = '🇰🇾';
        obj.latitude = 19.27113851224073;
        obj.longitude = -81.19016123394195;
        break;

      case 'KZ':
        obj.country = 'Kazakhstan';
        obj.flag = '🇰🇿';
        obj.latitude = 48.482563568012864;
        obj.longitude = 67.55939228236957;
        break;

      case 'LA':
        obj.country = "Lao People's Democratic Republic";
        obj.flag = '🇱🇦';
        obj.latitude = 19.674614376232658;
        obj.longitude = 102.35157456733323;
        break;

      case 'LB':
        obj.country = 'Lebanon';
        obj.flag = '🇱🇧';
        obj.latitude = 34.1189964605956;
        obj.longitude = 35.86333023403756;
        break;

      case 'LC':
        obj.country = 'Saint Lucia';
        obj.flag = '🇱🇨';
        obj.latitude = 13.918144974907706;
        obj.longitude = -60.92898439163031;
        break;

      case 'LI':
        obj.country = 'Liechtenstein';
        obj.flag = '🇱🇮';
        obj.latitude = 47.181739516065555;
        obj.longitude = 9.555344651582622;
        break;

      case 'LK':
        obj.country = 'Sri Lanka';
        obj.flag = '🇱🇰';
        obj.latitude = 7.623149260562444;
        obj.longitude = 80.74700704880259;
        break;

      case 'LR':
        obj.country = 'Liberia';
        obj.flag = '🇱🇷';
        obj.latitude = 6.351398129342872;
        obj.longitude = -9.301826138022633;
        break;

      case 'LS':
        obj.country = 'Lesotho';
        obj.flag = '🇱🇸';
        obj.latitude = -29.566188727763794;
        obj.longitude = 28.09915676583283;
        break;

      case 'LT':
        obj.country = 'Lithuania';
        obj.flag = '🇱🇹';
        obj.latitude = 55.541695846246434;
        obj.longitude = 23.90376218962051;
        break;

      case 'LU':
        obj.country = 'Luxembourg';
        obj.flag = '🇱🇺';
        obj.latitude = 49.6435159302497;
        obj.longitude = 6.219736308540833;
        break;

      case 'LV':
        obj.country = 'Latvia';
        obj.flag = '🇱🇻';
        obj.latitude = 57.00414414990714;
        obj.longitude = 25.8835020659407;
        break;

      case 'LY':
        obj.country = 'Libya';
        obj.flag = '🇱🇾';
        obj.latitude = 27.022464811067394;
        obj.longitude = 17.759405943148966;
        break;

      case 'MA':
        obj.country = 'Morocco';
        obj.flag = '🇲🇦';
        obj.latitude = 32.34276897492935;
        obj.longitude = -7.0619200838638125;
        break;

      case 'MC':
        obj.country = 'Monaco';
        obj.flag = '🇲🇨';
        obj.latitude = 43.73772604282227;
        obj.longitude = 7.420788320986597;
        break;

      case 'MD':
        obj.country = 'Moldova, Republic of';
        obj.flag = '🇲🇩';
        obj.latitude = 47.58411393746192;
        obj.longitude = 28.586280456788288;
        break;

      case 'ME':
        obj.country = 'Montenegro';
        obj.flag = '🇲🇪';
        obj.latitude = 42.84982558246134;
        obj.longitude = 19.456066584580636;
        break;

      case 'MF':
        obj.country = 'Saint Martin (French part)';
        obj.flag = '🇲🇫';
        obj.latitude = 18.03635132102819;
        obj.longitude = -63.00825844901619;

      case 'MG':
        obj.country = 'Madagascar';
        obj.flag = '🇲🇬';
        obj.latitude = -21.12656813261375;
        obj.longitude = 45.79964981961945;
        break;

      case 'MH':
        obj.country = 'Marshall Islands';
        obj.flag = '🇲🇭';
        obj.latitude = 7.517454621744676;
        obj.longitude = 168.48084094015667;
        break;

      case 'MK':
        obj.country = 'North Macedonia';
        obj.flag = '🇲🇰';
        obj.latitude = 41.724545006229846;
        obj.longitude = 21.728783805452;
        break;

      case 'ML':
        obj.country = 'Mali';
        obj.flag = '🇲🇱';
        obj.latitude = 17.915076388253173;
        obj.longitude = -1.7257369242770217;
        break;

      case 'MM':
        obj.country = 'Myanmar';
        obj.flag = '🇲🇲';
        obj.latitude = 21.749716119147735;
        obj.longitude = 96.29706504224058;
        break;

      case 'MN':
        obj.country = 'Mongolia';
        obj.flag = '🇲🇳';
        obj.latitude = 46.97546506020188;
        obj.longitude = 102.03643447182239;
        break;

      case 'MO':
        obj.country = 'Macao';
        obj.flag = '🇲🇴';
        obj.latitude = 22.205052865653688;
        obj.longitude = 113.54440106728566;
        break;

      case 'MP':
        obj.country = 'Northern Mariana Islands';
        obj.flag = '🇲🇵';
        obj.latitude = 15.171935164367659;
        obj.longitude = 145.78010864773898;
        break;

      case 'MQ':
        obj.country = 'Martinique';
        obj.flag = '🇲🇶';
        obj.latitude = 14.652524481951954;
        obj.longitude = -61.026175681972475;
        break;

      case 'MR':
        obj.country = 'Mauritania';
        obj.flag = '🇲🇷';
        obj.latitude = 20.24665181764522;
        obj.longitude = -9.564134820647563;
        break;

      case 'MS':
        obj.country = 'Montserrat';
        obj.flag = '🇲🇸';
        obj.latitude = 16.72748363346746;
        obj.longitude = -62.156040692205835;
        break;

      case 'MT':
        obj.country = 'Malta';
        obj.flag = '🇲🇹';
        obj.latitude = 35.89319035250113;
        obj.longitude = 14.440114349765208;
        break;

      case 'MU':
        obj.country = 'Mauritius';
        obj.flag = '🇲🇺';
        obj.latitude = -20.39855983137204;
        obj.longitude = 57.996720387471896;
        break;

      case 'MV':
        obj.country = 'Maldives';
        obj.flag = '🇲🇻';
        obj.latitude = -0.6092700511095944;
        obj.longitude = 72.98338909020502;
        break;

      case 'MW':
        obj.country = 'Malawi';
        obj.flag = '🇲🇼';
        obj.latitude = -13.54855566780302;
        obj.longitude = 34.490216461564636;
        break;

      case 'MX':
        obj.country = 'Mexico';
        obj.flag = '🇲🇽';
        obj.latitude = 24.269040825114484;
        obj.longitude = -103.73820533534357;
        break;

      case 'MY':
        obj.country = 'Malaysia';
        obj.flag = '🇲🇾';
        obj.latitude = 5.594350627850827;
        obj.longitude = 103.50634167750646;
        break;

      case 'MZ':
        obj.country = 'Mozambique';
        obj.flag = '🇲🇿';
        obj.latitude = -17.419207630934295;
        obj.longitude = 35.65125504183088;
        break;

      case 'NA':
        obj.country = 'Namibia';
        obj.flag = '🇳🇦';
        obj.latitude = -21.981386928662573;
        obj.longitude = 16.67964309253133;
        break;

      case 'NC':
        obj.country = 'New Caledonia';
        obj.flag = '🇳🇨';
        obj.latitude = -21.597073762994007;
        obj.longitude = 165.54567983156764;
        break;

      case 'NE':
        obj.country = 'Niger';
        obj.flag = '🇳🇪';
        obj.latitude = 17.39286545957476;
        obj.longitude = 9.506189457566352;
        break;

      case 'NF':
        obj.country = 'Norfolk Island';
        obj.flag = '🇳🇫';
        obj.latitude = -28.738174846863394;
        obj.longitude = 167.9891086560594;
        break;

      case 'NG':
        obj.country = 'Nigeria';
        obj.flag = '🇳🇬';
        obj.latitude = 9.487889434386489;
        obj.longitude = 8.951704780392763;
        break;

      case 'NI':
        obj.country = 'Nicaragua';
        obj.flag = '🇳🇮';
        obj.latitude = 12.809356907335665;
        obj.longitude = -84.5706441131239;
        break;

      case 'NL':
        obj.country = 'Netherlands';
        obj.flag = '🇳🇱';
        obj.latitude = 52.178369070794034;
        obj.longitude = 6.058258348683933;
        break;

      case 'NO':
        obj.country = 'Norway';
        obj.flag = '🇳🇴';
        obj.latitude = 61.95243411779499;
        obj.longitude = 9.164326551229816;
        break;

      case 'NP':
        obj.country = 'Nepal';
        obj.flag = '🇳🇵';
        obj.latitude = 28.594460859271148;
        obj.longitude = 84.11923582775736;
        break;

      case 'NR':
        obj.country = 'Nauru';
        obj.flag = '🇳🇷';
        obj.latitude = -0.5252333858987586;
        obj.longitude = 166.9304316565144;
        break;

      case 'NU':
        obj.country = 'Niue';
        obj.flag = '🇳🇺';
        obj.latitude = -19.05144719490076;
        obj.longitude = -169.86873778827228;
        break;

      case 'NZ':
        obj.country = 'New Zealand';
        obj.flag = '🇳🇿';
        obj.latitude = -42.952621719772445;
        obj.longitude = 171.96168775977713;
        break;

      case 'OM':
        obj.country = 'Oman';
        obj.flag = '🇴🇲';
        obj.latitude = 20.586861113710054;
        obj.longitude = 56.007428822135495;
        break;

      case 'PA':
        obj.country = 'Panama';
        obj.flag = '🇵🇦';
        obj.latitude = 8.50454075043275;
        obj.longitude = -80.2083420478833;
        break;

      case 'PE':
        obj.country = 'Peru';
        obj.flag = '🇵🇪';
        obj.latitude = -10.257409701636757;
        obj.longitude = -75.22850093296533;
        break;

      case 'PF':
        obj.country = 'French Polynesia';
        obj.flag = '🇵🇫';
        obj.latitude = -17.29418459043902;
        obj.longitude = -149.71214184488525;
        break;

      case 'PG':
        obj.country = 'Papua New Guinea';
        obj.flag = '🇵🇬';
        obj.latitude = -5.879142240595763;
        obj.longitude = 143.50606141740528;
        break;

      case 'PH':
        obj.country = 'Philippines';
        obj.flag = '🇵🇭';
        obj.latitude = 12.459800849882798;
        obj.longitude = 122.73342045920455;
        break;

      case 'PK':
        obj.country = 'Pakistan';
        obj.flag = '🇵🇰';
        obj.latitude = 29.99438151695584;
        obj.longitude = 69.51090044682729;
        break;

      case 'PL':
        obj.country = 'Poland';
        obj.flag = '🇵🇱';
        obj.latitude = 52.85147520308368;
        obj.longitude = 18.172236742059862;
        break;

      case 'PM':
        obj.country = 'Saint Pierre and Miquelon';
        obj.flag = '🇵🇲';
        obj.latitude = 46.953023127131786;
        obj.longitude = -56.28588679335351;
        break;

      case 'PN':
        obj.country = 'Pitcairn';
        obj.flag = '🇵🇳';
        obj.latitude = -24.49908137152678;
        obj.longitude = -128.0315509621573;
        break;

      case 'PR':
        obj.country = 'Puerto Rico';
        obj.flag = '🇵🇷';
        obj.latitude = 18.2313759323525;
        obj.longitude = -66.59053864957222;
        break;

      case 'PS':
        obj.country = 'Palestine, State of';
        obj.flag = '🇵🇸';
        obj.latitude = 32.03945567479348;
        obj.longitude = 35.25404626778534;
        break;

      case 'PT':
        obj.country = 'Portugal';
        obj.flag = '🇵🇹';
        obj.latitude = 40.61276497164109;
        obj.longitude = -8.769651635718855;
        break;

      case 'PW':
        obj.country = 'Palau';
        obj.flag = '🇵🇼';
        obj.latitude = 7.508893367154699;
        obj.longitude = 134.45821825379778;
        break;

      case 'PY':
        obj.country = 'Paraguay';
        obj.flag = '🇵🇾';
        obj.latitude = -23.221812916197063;
        obj.longitude = -58.111129777864825;
        break;

      case 'QA':
        obj.country = 'Qatar';
        obj.flag = '🇶🇦';
        obj.latitude = 25.310780155935912;
        obj.longitude = 51.20935553112662;
        break;

      case 'RE':
        obj.country = 'Réunion';
        obj.flag = '🇷🇪';
        obj.latitude = -21.134425098106444;
        obj.longitude = 55.7152853784395;
        break;

      case 'RO':
        obj.country = 'Romania';
        obj.flag = '🇷🇴';
        obj.latitude = 45.86693689558221;
        obj.longitude = 25.01000569315596;
        break;

      case 'RS':
        obj.country = 'Serbia';
        obj.flag = '🇷🇸';
        obj.latitude = 44.082494574831266;
        obj.longitude = 21.00493511742952;
        break;

      case 'RU':
        obj.country = 'Russian Federation';
        obj.flag = '🇷🇺';
        obj.latitude = 63.25119404670619;
        obj.longitude = 105.19726547429417;
        break;

      case 'RW':
        obj.country = 'Rwanda';
        obj.flag = '🇷🇼';
        obj.latitude = -2.0036755891867424;
        obj.longitude = 29.8632180728983;
        break;

      case 'SA':
        obj.country = 'Saudi Arabia';
        obj.flag = '🇸🇦';
        obj.latitude = 23.945999056364204;
        obj.longitude = 43.61369248061173;
        break;

      case 'SB':
        obj.country = 'Solomon Islands';
        obj.flag = '🇸🇧';
        obj.latitude = -9.308522527889778;
        obj.longitude = 159.95666328642358;
        break;

      case 'SC':
        obj.country = 'Seychelles';
        obj.flag = '🇸🇨';
        obj.latitude = -4.423886328955473;
        obj.longitude = 54.6690383658576;
        break;

      case 'SD':
        obj.country = 'Sudan';
        obj.flag = '🇸🇩';
        obj.latitude = 13.473899927097225;
        obj.longitude = 30.227491714623802;
        break;

      case 'SE':
        obj.country = 'Sweden';
        obj.flag = '🇸🇪';
        obj.latitude = 62.9068162816725;
        obj.longitude = 16.6597679746662;
        break;

      case 'SG':
        obj.country = 'Singapore';
        obj.flag = '🇸🇬';
        obj.latitude = 1.3428157798716431;
        obj.longitude = 103.84695381533903;
        break;

      case 'SH':
        obj.country = null;
        obj.entries = 'Saint Helena, Ascension and Tristan da Cunha';
        obj.flag = '🇸🇭';
        obj.latitude = -15.637203928629301;
        obj.longitude = -5.6702175379924755;
        break;

      case 'SI':
        obj.country = 'Slovenia';
        obj.flag = '🇸🇮';
        obj.latitude = 46.10440241731929;
        obj.longitude = 14.962558438097254;
        break;

      case 'SJ':
        obj.country = 'Svalbard and Jan Mayen';
        obj.flag = '🇸🇯';
        obj.latitude = 72.42999370267371;
        obj.longitude = -3.8115286785752533;
        break;

      case 'SK':
        obj.country = 'Slovakia';
        obj.flag = '🇸🇰';
        obj.latitude = 48.73084145902739;
        obj.longitude = 19.49783816269016;
        break;

      case 'SL':
        obj.country = 'Sierra Leone';
        obj.flag = '🇸🇱';
        obj.latitude = 8.644110243808639;
        obj.longitude = -11.576999334650221;
        break;

      case 'SM':
        obj.country = 'San Marino';
        obj.flag = '🇸🇲';
        obj.latitude = 43.93519286384606;
        obj.longitude = 12.451508308470814;
        break;

      case 'SN':
        obj.country = 'Senegal';
        obj.flag = '🇸🇳';
        obj.latitude = 14.436436806400096;
        obj.longitude = -14.487059162717218;
        break;

      case 'SO':
        obj.country = 'Somalia';
        obj.flag = '🇸🇴';
        obj.latitude = 2.9909907002460585;
        obj.longitude = 45.60934722512062;
        break;

      case 'SR':
        obj.country = 'Suriname';
        obj.flag = '🇸🇷';
        obj.latitude = 4.090012632206344;
        obj.longitude = -56.01005804028889;
        break;

      case 'SS':
        obj.country = 'South Sudan';
        obj.flag = '🇸🇸';
        obj.latitude = 7.505291580831367;
        obj.longitude = 31.374621955456565;
        break;

      case 'ST':
        obj.country = 'Sao Tome and Principe';
        obj.flag = '🇸🇹';
        obj.latitude = 0.2008792629576407;
        obj.longitude = 6.712594220605088;
        break;

      case 'SV':
        obj.country = 'El Salvador';
        obj.flag = '🇸🇻';
        obj.latitude = 13.770895290796256;
        obj.longitude = -88.43893719455582;
        break;

      case 'SX':
        obj.country = 'Sint Maarten (Dutch part)';
        obj.flag = '🇸🇽';
        obj.latitude = 18.06300643165151;
        obj.longitude = -63.05499009741953;
        break;

      case 'SY':
        obj.country = 'Syrian Arab Republic';
        obj.flag = '🇸🇾';
        obj.latitude = 35.05716024518919;
        obj.longitude = 38.42230295036838;
        break;

      case 'SZ':
        obj.country = 'Eswatini';
        obj.flag = '🇸🇿';
        obj.latitude = -26.572269823199218;
        obj.longitude = 31.599476273760775;
        break;

      case 'TC':
        obj.country = 'Turks and Caicos Islands';
        obj.flag = '🇹🇨';
        obj.latitude = 21.855868118300656;
        obj.longitude = -71.80174961808842;
        break;

      case 'TD':
        obj.country = 'Chad';
        obj.flag = '🇹🇩';
        obj.latitude = 14.79743750376054;
        obj.longitude = 19.103368239283082;
        break;

      case 'TF':
        obj.country = 'French Southern Territories';
        obj.flag = '🇹🇫';
        obj.latitude = -49.34638352396345;
        obj.longitude = 70.25023174079567;
        break;

      case 'TG':
        obj.country = 'Togo';
        obj.flag = '🇹🇬';
        obj.latitude = 8.690825461671645;
        obj.longitude = 0.9830643914407311;
        break;

      case 'TH':
        obj.country = 'Thailand';
        obj.flag = '🇹🇭';
        obj.latitude = 15.301370227905686;
        obj.longitude = 101.1681420377485;
        break;

      case 'TJ':
        obj.country = 'Tajikistan';
        obj.flag = '🇹🇯';
        obj.latitude = 38.54954323016732;
        obj.longitude = 71.08664565288437;
        break;

      case 'TK':
        obj.country = 'Tokelau';
        obj.flag = '🇹🇰';
        obj.latitude = -9.157638254012584;
        obj.longitude = -171.90036867543205;
        break;

      case 'TL':
        obj.country = 'Timor-Leste';
        obj.flag = '🇹🇱';
        obj.latitude = -8.652432306759557;
        obj.longitude = 125.73686235069046;
        break;

      case 'TM':
        obj.country = 'Turkmenistan';
        obj.flag = '🇹🇲';
        obj.latitude = 39.268935329116225;
        obj.longitude = 58.60630460425657;
        break;

      case 'TN':
        obj.country = 'Tunisia';
        obj.flag = '🇹🇳';
        obj.latitude = 34.2140850241111;
        obj.longitude = 9.683414372471159;
        break;

      case 'TO':
        obj.country = 'Tonga';
        obj.flag = '🇹🇴';
        obj.latitude = -21.11837978270376;
        obj.longitude = -175.20190523347893;
        break;

      case 'TR':
        obj.country = 'Türkiye';
        obj.flag = '🇹🇷';
        obj.latitude = 39.00241807147522;
        obj.longitude = 35.268001530539884;
        break;

      case 'TT':
        obj.country = 'Trinidad and Tobago';
        obj.flag = '🇹🇹';
        obj.latitude = 10.43550699696661;
        obj.longitude = -61.23988586713561;
        break;

      case 'TV':
        obj.country = 'Tuvalu';
        obj.flag = '🇹🇻';
        obj.latitude = -8.523629238782066;
        obj.longitude = 179.23800612600564;
        break;

      case 'TW':
        obj.country = 'Taiwan, Province of China';
        obj.flag = '🇹🇼';
        obj.latitude = 24.045170584078488;
        obj.longitude = 121.47830662441147;
        break;

      case 'TZ':
        obj.country = 'Tanzania, United Republic of';
        obj.flag = '🇹🇿';
        obj.latitude = -6.512976977969995;
        obj.longitude = 35.042762869091874;
        break;

      case 'UA':
        obj.country = 'Ukraine';
        obj.flag = '🇺🇦';
        obj.latitude = 48.9365644949321;
        obj.longitude = 30.638128288275155;
        break;

      case 'UG':
        obj.country = 'Uganda';
        obj.flag = '🇺🇬';
        obj.latitude = 1.5836176470253966;
        obj.longitude = 32.156091292803126;
        break;

      case 'UM':
        obj.country = 'United States Minor Outlying Islands';
        obj.flag = '🇺🇸';
        obj.latitude = 19.295505627206065;
        obj.longitude = 166.6280548262836;
        break;

      case 'US':
        obj.country = 'United States of America';
        obj.flag = '🇺🇸';
        obj.latitude = 39.25433380607108;
        obj.longitude = -102.69322270292015;
        break;

      case 'UY':
        obj.country = 'Uruguay';
        obj.flag = '🇺🇾';
        obj.latitude = -32.85525592295926;
        obj.longitude = -56.40950545899949;
        break;

      case 'UZ':
        obj.country = 'Uzbekistan';
        obj.flag = '🇺🇿';
        obj.latitude = 42.11703831071527;
        obj.longitude = 65.07976454410849;
        break;

      case 'VA':
        obj.country = 'Holy See';
        obj.flag = '🇻🇦';
        obj.latitude = 41.90309768523343;
        obj.longitude = 12.45340230441546;
        break;

      case 'VC':
        obj.country = 'Saint Vincent and the Grenadines';
        obj.flag = '🇻🇨';
        obj.latitude = 13.23492783735871;
        obj.longitude = -61.14061934132689;
        break;

      case 'VE':
        obj.country = 'Venezuela (Bolivarian Republic of)';
        obj.flag = '🇻🇪';
        obj.latitude = 7.229882330885253;
        obj.longitude = -67.00111039964054;
        break;

      case 'VG':
        obj.country = 'Virgin Islands (British)';
        obj.flag = '🇻🇬';
        obj.latitude = 18.430002514688827;
        obj.longitude = -64.63468576765337;
        break;

      case 'VI':
        obj.country = 'Virgin Islands (U.S.)';
        obj.flag = '🇻🇮';
        obj.latitude = 17.734242029786145;
        obj.longitude = -64.71190436798027;
        break;

      case 'VN':
        obj.country = 'Vietnam';
        obj.flag = '🇻🇳';
        obj.latitude = 14.624093067851607;
        obj.longitude = 108.20349127958006;
        break;

      case 'VU':
        obj.country = 'Vanuatu';
        obj.flag = '🇻🇺';
        obj.latitude = -15.206829949081298;
        obj.longitude = 166.7944294374648;
        break;

      case 'WF':
        obj.country = 'Wallis and Futuna';
        obj.flag = '🇼🇫';
        obj.latitude = -14.241011999828784;
        obj.longitude = -178.1797236756128;
        break;

      case 'WS':
        obj.country = 'Samoa';
        obj.flag = '🇼🇸';
        obj.latitude = -13.626547461369343;
        obj.longitude = -172.49915208115092;
        break;

      case 'YE':
        obj.country = 'Yemen';
        obj.flag = '🇾🇪';
        obj.latitude = 15.894627932238837;
        obj.longitude = 47.13945114185332;
        break;

      case 'YT':
        obj.country = 'Mayotte';
        obj.flag = '🇾🇹';
        obj.latitude = -12.814437141622216;
        obj.longitude = 45.15436778095489;
        break;

      case 'ZA':
        obj.country = 'South Africa';
        obj.flag = '🇿🇦';
        obj.latitude = -31.20831022773456;
        obj.longitude = 23.48757490700568;
        break;

      case 'ZM':
        obj.country = 'Zambia';
        obj.flag = '🇿🇲';
        obj.latitude = -13.66770089065507;
        obj.longitude = 27.64867677556341;
        break;

      case 'ZW':
        obj.country = 'Zimbabwe';
        obj.flag = '🇿🇼';
        obj.latitude = -19.106957365038035;
        obj.longitude = 29.469118581497284;
        break;
    }
  } else {
    switch (entry) {
      default:
        obj.country = 'Unknown ISO';
        obj.flag = '⚠️';
        break;
    }
  }

  return {
    ...obj,
    raw: entry || null,
  };
};
