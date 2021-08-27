import "./data/component.js";
import DataSource from "./data/data-source.js";

function main() {
  const searchBar = document.querySelector("#searchBar");
  const searchBtn = document.querySelector("#searchBtn");
  const casesData = document.querySelector("cases-data");

  // searchBtn.addEventListener("click", function () {
  //   DataSource.searchCountry(searchBar.value);

  // });

  const buttonEventListener = async () => {
    try {
      const result = await DataSource.searchCountry(searchBar.value);
      renderResult(result);
    } catch {
      fallbackResult();
    }
  };

  const renderResult = (results) => {
    casesData.information = results;
  };

  const fallbackResult = () => {
    casesData.renderError();
  };

  searchBtn.addEventListener("click", buttonEventListener);
}

export default main;
