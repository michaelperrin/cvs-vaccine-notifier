import fetch from 'node-fetch';

const STATUS_AVAILABLE = 'Available';

const getURL = (state) => `https://www.cvs.com/immunizations/covid-19-vaccine.vaccine-status.${state}.json?vaccineinfo`;
const getHeaders = () => ({
  Referer: 'https://www.cvs.com/immunizations/covid-19-vaccine',
});
const getDataForCity = (data, city) => data.find(
  cityData => cityData.city.localeCompare(city, undefined, { sensitivity: 'accent' }) === 0
);

const hasAvailability = async (state, city) => {
  const data = await fetch(getURL(state), { headers: getHeaders() })
    .then(res => res.json())
    .then(data => data.responsePayloadData.data[state]);

  const cityData = getDataForCity(data, city);

  if (cityData === undefined) {
    throw new Error(`Could not find city "${city}" in response`);
  };

  return cityData.status === STATUS_AVAILABLE;
};

export default hasAvailability;
