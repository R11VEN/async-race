import { garageWork } from '../logic/garageWork';
import { showGarage } from './showGarage';
import { calssToggle } from '../UI/calssToggle';

export class UpgradeCar {
    garageBox = document.querySelector('.garage-box');

    constructor() {
        this.select();
    }

    select() {
        //const garageBox = document.querySelector('.garage-box');
        const selectCar = (event: Event) => {
            if((<HTMLElement>event.target).className === 'select') {
                const id = Number((<HTMLElement>event.target).getAttribute('select'));
                calssToggle.toggle(<HTMLElement>event.target, 'disabled');
                this.upgrade(id);
                this.garageBox?.removeEventListener('click', selectCar);
            }
        };
        this.garageBox?.addEventListener('click', selectCar);
    }

    upgrade(id: number) {
        const upgradeInput = <HTMLInputElement>document.querySelector('.upgrade-input');
        const upgradeColor = <HTMLInputElement>document.querySelector('.upgrade-color');
        const upgrade = <HTMLInputElement>document.querySelector('.upgrade');
        const garageBox = <HTMLDivElement>document.querySelector('.garage-box');
        calssToggle.toggle(upgrade, 'disabled');
        const updateGarage = async () => {
            calssToggle.toggle(upgrade, 'disabled');
            garageBox.innerHTML = '';
            await garageWork.upgradeCar(upgradeInput.value, upgradeColor.value, id);
            await showGarage.show();
            upgrade?.removeEventListener('click', updateGarage);
            this.select();
        };
        upgrade?.addEventListener('click', updateGarage);
    }
}

//export const upgradeCar = new UpgradeCar();
