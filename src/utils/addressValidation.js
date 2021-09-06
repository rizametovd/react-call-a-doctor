import {
  NO_COUNTRY_CODE_MESSAGE,
  NO_COUNTRY_MESSAGE,
  NO_HOUSE_MESSAGE,
  NO_LATITUDE_MESSAGE,
  NO_LONGITUDE_MESSAGE,
  NO_STREET_MESSAGE,
  SELECT_ADDRESS_FROM_LIST_MESSAGE,
} from './constants';

export default function addressValidation(address, setErrors) {
  if (address.data === null) {
    setErrors({ error: SELECT_ADDRESS_FROM_LIST_MESSAGE, isValid: false });
  } else {
    const { country, region_iso_code, geo_lat, geo_lon, street, house } = address.data;
    if (country === null) {
      setErrors({ error: NO_COUNTRY_MESSAGE, isValid: false });
    } else if (region_iso_code === null) {
      setErrors({ error: NO_COUNTRY_CODE_MESSAGE, isValid: false });
    } else if (geo_lat === null) {
      setErrors({ error: NO_LATITUDE_MESSAGE, isValid: false });
    } else if (street === null) {
      setErrors({ error: NO_STREET_MESSAGE, isValid: false });
    } else if (geo_lon === null) {
      setErrors({ error: NO_LONGITUDE_MESSAGE, isValid: false });
    } else if (house === null) {
      setErrors({ error: NO_HOUSE_MESSAGE, isValid: false });
    } else {
      setErrors({ error: '', isValid: true });
    }
  }
}
