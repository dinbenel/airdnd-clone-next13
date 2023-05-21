import countries from "world-countries";

const countryFormat = countries.map((cnt) => {
  const flag = String(cnt.flag);
  for (let i = 0; i < flag.length; i++) {
    const element = flag[i];
  }
  return {
    value: cnt.cca2,
    label: cnt.name.common,
    flag: `https://flagcdn.com/${cnt.cca2.toLowerCase()}.svg`,
    latlng: cnt.latlng,
    region: cnt.region,
  };
});

export const useCountries = () => {
  const getAllCountries = () => countryFormat;

  const getCountryByValue = (value: string) => {
    return countryFormat.find((cnt) => cnt.value === value);
  };

  return {
    getAllCountries,
    getCountryByValue,
  };
};

export type Country = (typeof countryFormat)[0];
