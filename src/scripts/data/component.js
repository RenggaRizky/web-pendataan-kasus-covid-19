class CasesData extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <h3 class="text-center covid-desc-title mb-4">Apa itu COVID-19?</h3>
      <p class="covid-desc-text">
        COVID-19 adalah penyakit menular yang disebabkan oleh jenis coronavirus yang baru ditemukan. Virus baru dan penyakit yang disebabkannya ini tidak dikenal sebelum mulainya wabah di Wuhan, Tiongkok, bulan Desember 2019. COVID-19 ini
        sekarang menjadi sebuah pandemi yang terjadi di banyak negara di seluruh dunia.
      </p>
      `;
  }

  set information(information) {
    this._information = information;
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="country-info mb-3 text-center">
        <h3 class="country-name">${this._information.Country} <span class="country-code">(${this._information.CountryCode})</span></h3>
    </div>
    <div class="cases-info d-flex text-center">
        <div class="data-cases border border-white rounded mb-4 p-3">
            <h5 class="data-title">Terkonfirmasi</h5>
            <p class="qty">${this._information.Confirmed}</p>
        </div>
        <div class="data-deaths border border-white rounded mb-4 p-3">
            <h5 class="data-title">Meninggal</h5>
            <p class="qty">${this._information.Deaths}</p>
        </div>
        <div class="data-recovered border border-white rounded mb-4 p-3">
            <h5 class="data-title">Sembuh</h5>
            <p class="qty">${this._information.Recovered}</p>
        </div>
        <div class="data-active border border-white rounded mb-4 p-3">
            <h5 class="data-title">Aktif</h5>
            <p class="qty">${this._information.Active}</p>
        </div>
    </div>
        `;
  }

  renderError() {
    this.innerHTML = `
    <div class="error-section border border-white rounded mb-4 p-3 text-center">
        <h4 class="error-text mb-4">Ooops, kami tidak menemukan apa yang kamu cari</h4>
        <i class="far fa-frown" id="sadIcon"></i>
    </div>`;
  }
}

customElements.define("cases-data", CasesData);
