import { garageWork } from '../logic/garageWork';
import { showGarage } from './showGarage';

class CreateCar {
    create() {
        const carInput = <HTMLInputElement>document.querySelector('.car-input');
        const selectColor = <HTMLInputElement>document.querySelector('.select-color');
        const create = document.querySelector('.create');
        const updateGarage = async () => {
            await garageWork.createCar(carInput.value, selectColor.value);
            await showGarage.show();
        };
        create?.addEventListener('click', updateGarage);
    }
}

export const createCar = new CreateCar();