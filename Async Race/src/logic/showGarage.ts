import { garageWork } from './garageWork';
import { Car } from '../UI/car';
import { carsType } from '../../types/types';
import { garageStorage } from '../logic/storage';

class ShowGarage {

    async show() {
        const garageLength = <HTMLHeadingElement>document.querySelector('.number-of-cars');
        const garageBox = <HTMLDivElement>document.querySelector('.garage-box');
        const page = garageStorage.loadGaragePage();
        const garage = await garageWork.getCars(`${page}`);
        const cars: carsType = garage[0];
        const totalCount: string = garage[1];
        garageLength.innerText = totalCount;
        if(cars.length === 0 && totalCount !== '0') {
            garageStorage.saveGaragePage(page - 1);
            return;
        }
        garageBox.innerHTML = '';
        cars.forEach(element => {
            new Car(element.name, element.color, element.id);
        });
        this.toGarage();
    }

    private toGarage() {
        const toGarage = document.querySelector('.to-garage');
        toGarage?.addEventListener('click', async () => {
            const carsOrWiners = <HTMLHeadingElement>document.querySelector('.cars-or-winers');
            carsOrWiners.innerText = 'Garage';
            const toWiners = document.querySelector('.to-winers');
            toGarage?.classList.add('disabled');
            toWiners?.classList.remove('disabled');
            const garageLength = <HTMLHeadingElement>document.querySelector('.number-of-cars');
            const createCarBlock = <HTMLDivElement>document.querySelector('.create-car-block');
            const upgradeCarBlock = <HTMLDivElement>document.querySelector('.upgrade-car-block');
            const buttonsBlock = <HTMLDivElement>document.querySelector('.buttons-block');
            const garageBox = <HTMLDivElement>document.querySelector('.garage-box');
            const winersBox = <HTMLDivElement>document.querySelector('.winers-box');
            const page = garageStorage.loadGaragePage();
            const garage = await garageWork.getCars(`${page}`);
            const totalCount: string = garage[1];
            garageLength.innerText = totalCount;
            upgradeCarBlock.style.display = 'flex';
            buttonsBlock.style.display = 'flex';
            createCarBlock.style.display = 'flex';
            garageBox.style.display = 'flex';
            winersBox.style.display = 'none';
            const previous = document.querySelector('.previous');
            const next = document.querySelector('.next');
            if(previous?.hasAttribute('page')) {
                previous?.removeAttribute('page');
                next?.removeAttribute('page');
                previous?.setAttribute('page', 'garage');
                next?.setAttribute('page', 'garage');
            } else {
                previous?.setAttribute('page', 'garage');
                next?.setAttribute('page', 'garage');
            }
        });
    }
}

export const showGarage = new ShowGarage();