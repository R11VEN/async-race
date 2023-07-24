import { garageStorage } from '../logic/storage';

export class Garage {

    createGarageHead() {
        const body = document.querySelector('body');
        const winOverlay = document.createElement('div');
        winOverlay.className = 'win-overlay';
        const createGarageHead = document.createElement('div');
        createGarageHead.className = 'garage';
        createGarageHead.append(
            this.createGarageSize(),
            this.createPageNumber(),
            this.createGarageBox(),
            this.createPageSwitching()
        );
        body?.append(createGarageHead, winOverlay);
    }

    private createGarageSize() {
        const createGarageSize = document.createElement('div');
        createGarageSize.className = 'garage-size';
        const title = document.createElement('h2');
        title.className = 'cars-or-winers';
        title.innerText = 'Garage';
        createGarageSize.append(title);
        const numberOfCars = document.createElement('h2');
        numberOfCars.className = 'number-of-cars';
        numberOfCars.innerText = '0';
        createGarageSize.append(numberOfCars);
        return createGarageSize;
    }

    private createPageNumber() {
        const createPage = document.createElement('h4');
        createPage.className = 'page';
        createPage.innerText = 'Page #';
        const createPageNumber = document.createElement('h4');
        createPageNumber.className = 'page-number';
        createPageNumber.innerText = `${garageStorage.loadGaragePage()}`;
        createPage.append(createPageNumber);
        return createPage;
    }

    private createGarageBox() {
        const createGarageBox = document.createElement('div');
        createGarageBox.className = 'garage-box';
        return createGarageBox;
    }

    private createPageSwitching() {
        const createPageSwitching = document.createElement('div');
        createPageSwitching.className = 'page-switching';
        const previous = document.createElement('input');
        previous.className = 'previous';
        previous.setAttribute('page', 'garage');
        previous.type = 'button';
        previous.value = 'PREVIOUS';
        const next = document.createElement('input');
        next.className = 'next';
        next.setAttribute('page', 'garage');
        next.type = 'button';
        next.value = 'NEXT';
        createPageSwitching.append(previous, next);
        return createPageSwitching;
    }
}