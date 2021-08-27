class CasesData extends HTMLElement {
  // connectedCallback() {
  //   this.render();
  // }

  set information(information) {
    this._information = information;
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="country-info mb-5 text-center">
        <h3 class="country-name fw-light">${this._information.Country}<span class="country-code">(${this.information.CountryCode})</span></h3>
    </div>
    <div class="cases-info d-flex justify-content-around mb-5 text-center">
        <div class="data-cases mb-2">
            <h5 class="data-title fw-light">Terkonfirmasi</h5>
            <p class="qty display-3">${this._information.Confirmed}</p>
        </div>
        <div class="data-deaths mb-2">
            <h5 class="data-title fw-light">Meninggal</h5>
            <p class="qty display-3">${this._information.Deaths}</p>
        </div>
        <div class="data-recovered mb-2">
            <h5 class="data-title fw-light">Sembuh</h5>
            <p class="qty display-3">${this._information.Recovered}</p>
        </div>
        <div class="tested-cases">
            <h5 class="data-title fw-light">Aktif</h5>
            <p class="qty display-3">${this._information.Active}</p>
        </div>
    </div>
        `;
  }

  renderError() {
    this.innerHTML = `
        <div class="country-info mb-5 text-center">
            <h3 class="country-name fw-light">ERROR</h3>
        </div>
      `;
  }
}

customElements.define("cases-data", CasesData);
