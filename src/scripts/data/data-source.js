const axios = require("axios");
class DataSource {
  static searchCountry = async (keyword) => {
    const response = await axios.get(`https://api.covid19api.com/live/country/${keyword}`);
    const responJson = await response.data;
    const dataFromApi = responJson[0];
    if (dataFromApi) {
      return dataFromApi;
    }
  };
}

export default DataSource;
