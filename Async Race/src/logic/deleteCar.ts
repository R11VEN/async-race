import { garageWork } from '../logic/garageWork';
import { showGarage } from '../logic/showGarage';
import { deleteWiner } from '../UI/deleteWiner';
class DeleteCar {
    delete() {
        const garageBox = document.querySelector('.garage-box');
        garageBox?.addEventListener('click', async (event) => {
            if ((<HTMLElement>event.target).className === 'remove') {
                const id = Number((<HTMLElement>event.target).getAttribute('remove'));
                await deleteWiner.delete(id);
                await garageWork.deleteCar(id);
                await showGarage.show();
            }
        });
    }
}

export const deleteCar = new DeleteCar();