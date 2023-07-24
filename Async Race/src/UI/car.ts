import '../../img/flag.svg';
import '../../img/gas.png';
import '../../img/brake.png';
export class Car {

    name: string;
    color: string;
    id: number;

    constructor(name: string, color: string, id: number) {
        this.name = name;
        this.color = color;
        this.id = id;
        this.createCarBlock(this.name, this.color, this.id);
    }

    private createCarBlock(name: string, color: string, id: number) {
        const garage = document.querySelector('.garage-box');
        const createCarBlock = document.createElement('div');
        createCarBlock.className = 'car-block';
        createCarBlock.append(this.topCarBlock(name, id), this.track(color, id));
        garage?.append(createCarBlock);
    }

    private topCarBlock(name: string, id: number) {
        const topCarBlock = document.createElement('div');
        topCarBlock.className = 'top-car-block';
        const select = document.createElement('input');
        select.type = 'button';
        select.className = 'select';
        select.setAttribute('select', `${id}`);
        select.value = 'select';
        const remove = document.createElement('input');
        remove.type = 'button';
        remove.className = 'remove';
        remove.setAttribute('remove', `${id}`);
        remove.value = 'remove';
        const carName = document.createElement('p');
        carName.className = 'car-name';
        carName.setAttribute('carName', `${id}`);
        carName.innerText = `${name}`;
        topCarBlock.append(select, remove, carName);
        return topCarBlock;
    }

    private track(color: string, id: number) {
        const createTrack = document.createElement('div');
        createTrack.className = 'track-block';
        createTrack.setAttribute('trackBlock', `${id}`);
        const gasPedal = document.createElement('input');
        gasPedal.type = 'button';
        gasPedal.className = 'gas-pedal';
        gasPedal.setAttribute('gasPedal', `${id}`);
        const brakePedal = document.createElement('input');
        brakePedal.type = 'button';
        brakePedal.className = 'brake-pedal';
        brakePedal.setAttribute('brakePedal', `${id}`);
        const resetCar = document.createElement('input');
        resetCar.type = 'button';
        resetCar.className = 'reset-car';
        resetCar.setAttribute('resetCar', `${id}`);
        const car = document.createElement('div');
        car.className = 'car';
        car.style.backgroundColor = color;
        car.setAttribute('car', `${id}`);
        const flag = document.createElement('div');
        flag.className = 'flag';
        createTrack.append(gasPedal, brakePedal,resetCar, car, flag);
        return createTrack;
    }
}