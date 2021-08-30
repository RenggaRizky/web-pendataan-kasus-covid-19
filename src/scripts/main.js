import "./data/component.js";
import DataSource from "./data/data-source.js";

function main() {
  const searchBar = document.querySelector("#searchBar");
  const searchBtn = document.querySelector("#searchBtn");
  const casesData = document.querySelector("cases-data");

  searchBtn.addEventListener("click", async () => {
    try {
      const result = await DataSource.searchCountry(searchBar.value);
      casesData.information = result;
    } catch {
      casesData.renderError();
    }
  });
}

export default main;
