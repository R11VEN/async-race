import { addWiner } from '../UI/addWiner';
import { winers } from '../UI/getWiners';
import { winerType } from '../../types/types';
import { showWiner } from './showWiner';

export class Race {

    garageBox = <HTMLDivElement>document.querySelector('.garage-box');
    win = false;

    constructor() {
        this.startRace();
        this.garageBox?.addEventListener('transitionend', (event) => this.addWiner(event, this.win));
    }

    private startRace() {
        const raceInput = document.querySelector('.race');
        const resetInput = document.querySelector('.reset');
        const race = () => {
            raceInput?.classList.add('disabled');
            resetInput?.classList.remove('disabled');
            raceInput?.removeEventListener('click', race);
            const gasPedals = document.querySelectorAll('.gas-pedal');
            gasPedals.forEach(element => {
                (<HTMLInputElement>element).click();
            });
            this.resetRace();
        };
        raceInput?.addEventListener('click', race);
    }

    private resetRace() {
        if(this.win) {
            this.win = false;
        }
        const raceInput = document.querySelector('.race');
        const resetInput = document.querySelector('.reset');
        const reset = () => {
            raceInput?.classList.remove('disabled');
            resetInput?.classList.add('disabled');
            resetInput?.removeEventListener('click', reset);
            const brakePedals = document.querySelectorAll('.reset-car');
            brakePedals.forEach(element => {
                (<HTMLInputElement>element).click();
            });
            this.startRace();
        };
        resetInput?.addEventListener('click', reset);
    }

    private async addWiner(event: TransitionEvent, win: boolean) {
        if(event.propertyName === 'transform' && win === false) {
            this.win = true;
            const id = (<HTMLDivElement>event.target).getAttribute('car');
            if(id) {
                const getWiners = await winers.getWiners(false);
                if(getWiners) {
                    const allWiners: winerType = getWiners[0];
                    const winer = allWiners.find(item => item.id === Number(id));
                    const time = Number(event.elapsedTime.toFixed(3));
                    const carName = <HTMLParagraphElement>this.garageBox.querySelector(`[carname="${id}"]`);
                    showWiner.show(carName.innerText, time);
                    if(winer) {
                        if(winer.time < time) {
                            winers.updradeWiners(Number(id), (winer.wins + 1), winer.time);
                        } else {
                            winers.updradeWiners(Number(id), (winer.wins + 1), time);
                        }
                    } else {
                        addWiner.createWinner(Number(id), 1, time);
                    }
                }
            }
        }
    }
}
