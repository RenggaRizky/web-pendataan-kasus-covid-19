class DataSource {
  static searchCountry(keyword) {
    return fetch(`https://corona.lmao.ninja/v2/countries/${keyword}?yesterday=true&strict=true&query%20=`)
      .then((response) => {
        return response.json();
      })
      .then((responJson) => {
        if (responJson.country) {
          return Promise.resolve(responJson.country);
        } else {
          return Promise.reject(`${keyword} is not found`);
        }
      });
  }
}

export default DataSource;
