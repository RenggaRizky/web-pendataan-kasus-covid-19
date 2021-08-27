class CountryInfo {
  constructor(countryName, countryCode, caseConfirmed, caseDeaths, caseRecovered, caseActive) {
    this.country = countryName;
    this.countryCode = countryCode;
    this.confirmed = caseConfirmed;
    this.deaths = caseDeaths;
    this.recovered = caseRecovered;
    this.active = caseActive;
  }
}
