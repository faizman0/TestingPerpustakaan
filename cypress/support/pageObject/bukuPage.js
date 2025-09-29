class bukuPage{
    bukuPage() {
        this.bukuPage = 'buku';
        this.bukuPageTitle = 'Buku';
        this.bukuPageUrl = '/buku';
        this.bukuPageTable = '#buku-table';
        this.bukuPageTableRow = '#buku-table tbody tr';
        this.bukuPageTableRowData = '#buku-table tbody tr td';
        this.bukuPageTableRowAction = '#buku-table tbody tr td .action';
        this.bukuPageAddButton = '#buku-add-button';
        this.bukuPageEditButton = '#buku-edit-button';
        this.bukuPageDeleteButton = '#buku-delete-button';
        this.bukuPageSearchInput = '#buku-search-input';
        this.bukuPageSearchButton = '#buku-search-button';
        this.bukuPageAlertSuccess = '.alert-success';
        this.bukuPageAlertError = '.alert-danger';
    }

    menuBuku() {
        cy.get('.nav-pills > :nth-child(3) > [href="#"]').click();
        cy.get('.menu-is-opening > .nav > :nth-child(2) > .nav-link').click();
    }

    verifikasiHalamanBuku() {
        cy.url().should('include', this.bukuPageUrl);
        cy.get('h1').should('contain', this.bukuPageTitle);
    }

    btnTambahBuku() {
        cy.get(this.bukuPageAddButton).click();
    }

    btnEditBuku() {
        cy.get(this.bukuPageEditButton).click();
    }

    btnDeleteBuku() {
        cy.get(this.bukuPageDeleteButton).click();
    }

    inputJudulBuku(judul) {
        cy.get('input[name="judul"]').type(judul);
    }

    inputPengarangBuku(pengarang) {
        cy.get('input[name="pengarang"]').type(pengarang);
    }

    inputPenerbitBuku(penerbit) {
        cy.get('input[name="penerbit"]').type(penerbit);
    }

    inputTahunTerbitBuku(tahun) {
        cy.get('input[name="tahun_terbit"]').type(tahun);
    }

    btnSimpanBuku() {
        cy.get('button[type="submit"]').click();
    }

    verifikasiAlertSuccess() {
        cy.get(this.bukuPageAlertSuccess)
          .should("be.visible")
          .and("contain", "Success");
    }

    verifikasiAlertError() {
        cy.get(this.bukuPageAlertError)
          .should("be.visible")
          .and("contain", "Terjadi kesalahan saat menyimpan buku");
    }

    verifikasiBukuTersedia(judul) {
        cy.get(this.bukuPageTableRowData)
          .contains(judul)
          .should("be.visible");
    }

    verifikasiBukuTidakTersedia(judul) {
        cy.get(this.bukuPageTableRowData)
          .contains(judul)
          .should("not.exist");
    }
}