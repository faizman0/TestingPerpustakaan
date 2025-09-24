class kategoriPage {
  kategoriPage() {
    // Selectors

    this.btnKategori = 'a[href="/categories"]';

    this.btnTambahKategori = 'a[href="/categories/create"]';

    this.inputNamaKategori = 'input[name="name"]';

    this.inputDeskripsiKategori = 'textarea[name="description"]';

    this.btnSimpanKategori = 'button[type="submit"]';

    this.alertSuccess = ".alert-success";

    this.alertError = ".alert-danger";
  }

  menuKategori() {
    cy.get('.nav-pills > :nth-child(2) > [href="#"]').click();

    cy.get(".menu-is-opening > .nav > :nth-child(1) > .nav-link").click();
  }

  addKategori() {
    cy.get(".btn.btn-primary").click();
  }

  kategoriInput(nama) {
    cy.get('[name="nama"]')
      .type(nama)
      .should("be.visible")
      .and("have.value", nama);
  }

  btnSimpanKategori() {
    cy.get(".btn-primary").click();
  }

  verifikasiAlertSuccess() {
    cy.get(".alert.alert-success.alert-dismissible.fade.show")
      .should("be.visible")
      .and("contain", "Success");
  }

  verifikasiAlertError() {
    cy.get(this.alertError)
      .should("be.visible")
      .and("contain", "Terjadi kesalahan saat menyimpan kategori");
  }

    verifikasiAlertNamaKategoriSudahAda() {
    cy.get('.invalid-feedback')
      .should("be.visible");
    }

    kategoriEditInput(nama) {
    cy.get('[name="nama"]')
      .clear()
      .type(nama)
      .should("be.visible")
      .and("have.value", nama);
  }

  deleteKategori() {
    cy.get(':nth-child(1) > .text-center > .btn-group > .d-inline > .btn')
    .click();

    cy.on('window:confirm', (str) => {
      expect(str).to.equal('Apakah Anda yakin ingin menghapus kategori ini?');
      return true;
    });
  }
}

export default new kategoriPage();
