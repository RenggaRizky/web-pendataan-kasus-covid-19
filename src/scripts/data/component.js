class CasesData extends HTMLElement {
  //   set information(information) {
  //     this._information = information;
  //     this.render();
  //   }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="country-info mb-5 text-center">
            <h3 class="country-name fw-light">Afghanistan<span class="country-code">(AFG)</span></h3>
            <p class="country-region fs-5">Asia</p>
        </div>

        <div class="data-item d-flex flex-column">
        <div class="all-cases-data text-center d-flex flex-column justify-content-around mb-5">
          <div class="data-cases mb-2">
            <h5 class="data-title fw-light">Kasus</h5>
            <p class="qty display-3">152822</p>
          </div>
          <div class="data-deaths mb-2">
            <h5 class="data-title fw-light">Meninggal</h5>
            <p class="qty display-3">7093</p>
          </div>
          <div class="data-recovered mb-2">
            <h5 class="data-title fw-light">Sembuh</h5>
            <p class="qty display-3">109036</p>
          </div>
        </div>

        <div class="all-cases-today text-center d-flex flex-column justify-content-around mb-5">
          <div class="today-cases mb-2">
            <h5 class="data-title fw-light">Kasus<br />Hari Ini</h5>
            <p class="qty display-3">0</p>
          </div>
          <div class="today-deaths mb-2">
            <h5 class="data-title fw-light">Meninggal<br />Hari Ini</h5>
            <p class="qty display-3">0</p>
          </div>
          <div class="today-recovered mb-2">
            <h5 class="data-title fw-light">Sembuh<br />Hari Ini</h5>
            <p class="qty display-3">0</p>
          </div>
        </div>

        <div class="actived-and-tested-cases text-center d-flex flex-column justify-content-around mb-5">
          <div class="actived-cases">
            <h5 class="data-title fw-light">Aktif</h5>
            <p class="qty display-3">36693</p>
          </div>
          <div class="tested-cases">
            <h5 class="data-title fw-light">Sudah di Tes</h5>
            <p class="qty display-3">749704</p>
          </div>
        </div>
      </div>
        `;
  }
}

customElements.define("cases-data", CasesData);
