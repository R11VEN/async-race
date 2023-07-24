import { winers } from './getWiners';
import { showWiners } from './showWiners';
import { garageStorage } from '../logic/storage';

class SortWiners {

    sotrParam = 'ASC';

    sort() {
        const winersBox = document.querySelector('.winers-box');
        winersBox?.addEventListener('click', async (event) => {
            const winersPage = garageStorage.loadWinersPage();
            //if((<HTMLTableElement>event.target).innerText === 'Car') {
            //    const winersPage = garageStorage.loadWinersPage();
            //    const getWiners = await winers.getWiners(`${winersPage}`, 'id');
            //    console.log(getWiners);
            //    winersBox.innerHTML = '';
            //    showWiners.show(getWiners);
            //}

            if((<HTMLTableElement>event.target).innerText === 'Win') {
                winersBox.innerHTML = '';
                if(this.sotrParam === 'ASC') {
                    const getWiners = await winers.getWiners(`${winersPage}`, 'wins', `${this.sotrParam}`);
                    if(getWiners) {
                        this.sotrParam = 'DESC';
                        showWiners.show(getWiners[0]);
                    }
                } else if (this.sotrParam === 'DESC') {
                    const getWiners = await winers.getWiners(`${winersPage}`, 'wins', `${this.sotrParam}`);
                    if(getWiners) {
                        this.sotrParam = 'ASC';
                        showWiners.show(getWiners[0]);
                    }
                }
            }

            if((<HTMLTableElement>event.target).innerText === 'Best time') {
                winersBox.innerHTML = '';
                if(this.sotrParam === 'ASC') {
                    const getWiners = await winers.getWiners(`${winersPage}`, 'time', `${this.sotrParam}`);
                    if(getWiners) {
                        this.sotrParam = 'DESC';
                        showWiners.show(getWiners[0]);
                    }
                } else if (this.sotrParam === 'DESC') {
                    const getWiners = await winers.getWiners(`${winersPage}`, 'time', `${this.sotrParam}`);
                    if(getWiners) {
                        this.sotrParam = 'ASC';
                        showWiners.show(getWiners[0]);
                    }
                }
            }
        });
    }
}

export const sortWiners = new SortWiners();