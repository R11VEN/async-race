export class topPanel {

    createHeader() {
        const body = document.querySelector('body');
        const header = document.createElement('div');
        header.className = 'header';
        header.append(
            this.createPageButtons(),
            this.createCarBlock(),
            this.createUpgradeBlock(),
            this.createButtonsBlock()
        );
        body?.append(header);
    }

    private createPageButtons() {
        const selectPage = document.createElement('div');
        selectPage.className = 'select-page';
        const toGarage = document.createElement('input');
        toGarage.className = 'to-garage';
        toGarage.classList.add('disabled');
        toGarage.type = 'button';
        toGarage.value = 'TO GARAGE';
        const toWiners = document.createElement('input');
        toWiners.className = 'to-winers';
        toWiners.type = 'button';
        toWiners.value = 'TO WINERS';
        selectPage.append(toGarage, toWiners);
        return selectPage;
    }

    private createCarBlock() {
        const createCarBlock = document.createElement('div');
        createCarBlock.className = 'create-car-block';
        const carInput = document.createElement('input');
        carInput.type = 'text';
        carInput.className = 'car-input';
        const selectColor = document.createElement('input');
        selectColor.type = 'color';
        selectColor.className = 'select-color';
        const create = document.createElement('input');
        create.type = 'button';
        create.className = 'create';
        create.value = 'CREATE';
        createCarBlock.append(carInput, selectColor, create);
        return createCarBlock;
    }

    private createUpgradeBlock() {
        const createUpgradeBlock = document.createElement('div');
        createUpgradeBlock.className = 'upgrade-car-block';
        const upgradeInput = document.createElement('input');
        upgradeInput.type = 'text';
        upgradeInput.className = 'upgrade-input';
        const upgradeColor = document.createElement('input');
        upgradeColor.type = 'color';
        upgradeColor.className = 'upgrade-color';
        const upgrade = document.createElement('input');
        upgrade.type = 'button';
        upgrade.className = 'upgrade disabled';
        upgrade.value = 'UPGRADE';
        createUpgradeBlock.append(upgradeInput, upgradeColor, upgrade);
        return createUpgradeBlock;
    }

    private createButtonsBlock() {
        const createButtonsBlock = document.createElement('div');
        createButtonsBlock.className = 'buttons-block';
        const race = document.createElement('input');
        race.type = 'button';
        race.className = 'race';
        race.value = 'RACE';
        const reset = document.createElement('input');
        reset.type = 'button';
        reset.className = 'reset';
        reset.value = 'RESET';
        reset.classList.add('disabled');
        const generateCars = document.createElement('input');
        generateCars.type = 'button';
        generateCars.className = 'generate-cars';
        generateCars.value = 'GENERATE CARS';
        createButtonsBlock.append(race, reset, generateCars);
        return createButtonsBlock;
    }
}
