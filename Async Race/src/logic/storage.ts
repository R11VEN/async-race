class GarageStorage {

    garagePage: number;
    winersPage: number;


    constructor() {
        this.garagePage = 1;
        this.winersPage = 1;
    }

    loadGaragePage() {
        const page = localStorage.getItem('_garagePage_');
        if(page) {
            this.garagePage = JSON.parse(page);
            this.saveGaragePage(Number(this.garagePage));
            return this.garagePage;
        } else {
            this.saveGaragePage(Number(this.garagePage));
            return this.garagePage;
        }
    }

    loadWinersPage() {
        const page = localStorage.getItem('_winersPage_');
        if(page) {
            this.winersPage = JSON.parse(page);
            this.saveWinersPage(Number(this.winersPage));
            return this.winersPage;
        } else {
            this.saveWinersPage(Number(this.winersPage));
            return this.winersPage;
        }
    }

    saveGaragePage(page: number) {
        localStorage.setItem('_garagePage_', `${page}`);
    }

    saveWinersPage(page: number) {
        localStorage.setItem('_winersPage_', `${page}`);
    }
}

export const garageStorage = new GarageStorage;