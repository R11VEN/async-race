//import { garageWork } from './garageWork';

class Drive {

    url = 'http://127.0.0.1:3000';

    async gas(id: string) {
        const response = await fetch(`${this.url}/engine?id=${id}&status=started`, {
            method: 'PATCH',
        });
        const data = await response.json();
        return data;
    }

    async brake(id: string) {
        const response = await fetch(`${this.url}/engine?id=${id}&status=stopped`, {
            method: 'PATCH',
        });
        const data = await response.json();
        return data;
    }

    async drive(id: string) {
        const response = await fetch(`${this.url}/engine?id=${id}&status=drive`, {
            method: 'PATCH',
        });
        return response;
        //const data = await response.json();
    }

    startDrive() {
        const garageBox = document.querySelector('.garage-box');
        garageBox?.addEventListener('click', async (event) => {
            if((<HTMLElement>event.target).className === 'gas-pedal') {
                const id = (<HTMLElement>event.target).getAttribute('gasPedal');
                const car = <HTMLElement>garageBox.querySelector(`[car="${id}"]`);
                const styles = window.getComputedStyle(car);
                if(id) {
                    const gas = await this.gas(id);
                    const track = <HTMLElement>garageBox.querySelector(`[trackBlock="${id}"]`);
                    const trackWidth = track.offsetWidth;
                    car.style.transition = `${gas.velocity / 30}s`;
                    car.style.transitionTimingFunction = 'linear';
                    car.style.transform = `translate(${trackWidth - 165}px)`;
                    const drive = await this.drive(id);
                    if(!drive.ok) {
                        //const styles = window.getComputedStyle(car);
                        const distanse = styles.getPropertyValue('transform').slice(7, -1).split(',')[4];
                        car.style.transform = `translate(${distanse}px)`;
                    }
                }
            }
        });
    }

    stopDrive() {
        const garageBox = document.querySelector('.garage-box');
        garageBox?.addEventListener('click', async (event) => {
            if((<HTMLElement>event.target).className === 'brake-pedal') {
                const id = (<HTMLElement>event.target).getAttribute('brakePedal');
                const car = <HTMLElement>garageBox.querySelector(`[car="${id}"]`);
                const styles = window.getComputedStyle(car);
                if(id) {
                    const brake = await this.brake(id);
                    if(brake.velocity == 0) {
                        //const styles = window.getComputedStyle(car);
                        const distanse = styles.getPropertyValue('transform').slice(7, -1).split(',')[4];
                        car.style.transform = `translate(${distanse}px)`;
                    }
                }
            }
        });
    }

    resetCar() {
        const garageBox = document.querySelector('.garage-box');
        garageBox?.addEventListener('click', async (event) => {
            if((<HTMLElement>event.target).className === 'reset-car') {
                const id = (<HTMLElement>event.target).getAttribute('resetCar');
                const car = <HTMLElement>garageBox.querySelector(`[car="${id}"]`);
                if(id) {
                    const brake = await this.brake(id);
                    if(brake.velocity == 0) {
                        car.style.transition = '0s';
                        car.style.transform = 'translate(0px)';
                    }
                }
            }
        });
    }
}

export const drive = new Drive();
