import { garageStorage } from '../logic/storage';
import { showGarage } from './showGarage';
import { showWiners } from '../UI/showWiners';

class SelectPage {
    nextPage() {
        const next = document.querySelector('.next');
        const pageNumber = <HTMLHeadingElement>document.querySelector('.page-number');
        next?.addEventListener('click', async () => {
            if(next.getAttribute('page') === 'garage') {
                let number = Number(garageStorage.loadGaragePage());
                number += 1;
                garageStorage.saveGaragePage(number);
                await showGarage.show();
                pageNumber.innerText = `${garageStorage.loadGaragePage()}`;
            } else if (next.getAttribute('page') === 'winers') {
                let number = Number(garageStorage.loadWinersPage());
                number += 1;
                garageStorage.saveWinersPage(number);
                await showWiners.show();
                pageNumber.innerText = `${garageStorage.loadWinersPage()}`;
            }
        });
    }

    previousPage() {
        const previous = document.querySelector('.previous');
        const pageNumber = <HTMLHeadingElement>document.querySelector('.page-number');
        previous?.addEventListener('click', async () => {
            let number;
            if(previous.getAttribute('page') === 'garage') {
                number = Number(garageStorage.loadGaragePage());
                if(number <= 1) {
                    return;
                } else {
                    number -= 1;
                    garageStorage.saveGaragePage(number);
                    await showGarage.show();
                    pageNumber.innerText = `${garageStorage.loadGaragePage()}`;
                }
            } else if (previous.getAttribute('page') === 'winers') {
                number = Number(garageStorage.loadWinersPage());
                if(number === 1) {
                    return;
                } else if (number > 1) {
                    number -= 1;
                    garageStorage.saveWinersPage(number);
                    await showWiners.show();
                    pageNumber.innerText = `${garageStorage.loadWinersPage()}`;
                }
            }
        });
    }
}

export const selectPage = new SelectPage();