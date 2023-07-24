import { winersTable } from './winersTable';
import { winers } from './getWiners';
import { garageWork } from '../logic/garageWork';
import { winerType } from '../../types/types';
import { garageStorage } from '../logic/storage';

class ShowWiners {

    async show(sortWiners?: winerType ) {
        const garageLength = <HTMLHeadingElement>document.querySelector('.number-of-cars');
        const winersBox = <HTMLDivElement>document.querySelector('.winers-box');
        const winersPage = garageStorage.loadWinersPage();
        let allWiners: winerType;
        if(sortWiners) {
            allWiners = sortWiners;
        } else {
            const getWiners = await winers.getWiners(`${winersPage}`);
            if(!getWiners) {
                return;
            }
            allWiners = getWiners[0];
            const totalCount: string = getWiners[1];
            garageLength.innerText = totalCount;
            if(allWiners.length === 0 && totalCount !== '0') {
                garageStorage.saveWinersPage(winersPage - 1);
                return;
            }
        }
        winersBox.innerHTML = '';
        winersBox.style.display = 'flex';
        winersTable.table();
        allWiners.forEach(async (item, index) => {
            const car = await garageWork.getCar(item.id);
            winersTable.rows(`${index + 1}`, car.color, car.name, `${item.wins}`, `${item.time}`);
        });
    }

    toWiners() {
        const toWiners = document.querySelector('.to-winers');
        toWiners?.addEventListener('click', () => {
            const carsOrWiners = <HTMLHeadingElement>document.querySelector('.cars-or-winers');
            carsOrWiners.innerText = 'Winers';
            const createCarBlock = <HTMLDivElement>document.querySelector('.create-car-block');
            const upgradeCarBlock = <HTMLDivElement>document.querySelector('.upgrade-car-block');
            const buttonsBlock = <HTMLDivElement>document.querySelector('.buttons-block');
            const garageBox = <HTMLDivElement>document.querySelector('.garage-box');
            const toGarage = document.querySelector('.to-garage');
            toGarage?.classList.remove('disabled');
            toWiners?.classList.add('disabled');
            this.show();
            upgradeCarBlock.style.display = 'none';
            buttonsBlock.style.display = 'none';
            createCarBlock.style.display = 'none';
            garageBox.style.display = 'none';
            const previous = document.querySelector('.previous');
            const next = document.querySelector('.next');
            if(previous?.hasAttribute('page')) {
                previous?.removeAttribute('page');
                next?.removeAttribute('page');
                previous?.setAttribute('page', 'winers');
                next?.setAttribute('page', 'winers');
            } else {
                previous?.setAttribute('page', 'winers');
                next?.setAttribute('page', 'winers');
            }
        });
    }
}

export const showWiners = new ShowWiners();
