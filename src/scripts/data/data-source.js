class DataSource {
  static searchCountry(keyword) {
    return fetch(`https://api.covid19api.com/live/country/${keyword}`)
      .then((response) => {
        return response.json();
      })
      .then((responJson) => {
        const dataFromApi = responJson[0];
        if (keyword.toLowerCase() === dataFromApi.Country.toLowerCase()) {
          // return Promise.resolve(dataFromApi);
          const casesInformationInSpecificCountry = dataFromApi.map((e) => {
            new CountryInfo(e.Country, e.CountryCode, e.Confirmed, e.Deaths, e.Recovered, e.Active);
          });

          return casesInformationInSpecificCountry;
        } else {
          return Promise.reject(`${keyword} is not found`);
        }
      });
  }
}

// class DataSource {
//   static async searchCountry(keyword) {
//     try {
//       const response = await fetch(`https://api.covid19api.com/live/country/${keyword}`);
//       const responJson = await response.json();
//       const dataFromApi = responJson[0];
//       if (keyword.toLowerCase() === dataFromApi.Country.toLowerCase()) {
//         return dataFromApi;
//       } else {
//         return `${keyword} not found`;
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   }
// }
export default DataSource;
