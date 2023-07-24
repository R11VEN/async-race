class WinersTable {

    winerBox() {
        const pageSwitching = <HTMLDivElement>document.querySelector('.page-switching');
        const winerBox = document.createElement('div');
        winerBox.className = 'winers-box';
        winerBox.style.display = 'none';
        pageSwitching.before(winerBox);
    }

    table() {
        const winerBox = <HTMLDivElement>document.querySelector('.winers-box');
        const table = document.createElement('table');
        const tr = document.createElement('tr');
        const place = document.createElement('th');
        place.innerText = 'Place';
        const car = document.createElement('th');
        car.innerText = 'Car';
        const name = document.createElement('th');
        name.innerText = 'Name';
        const win = document.createElement('th');
        win.innerText = 'Win';
        const bestTime = document.createElement('th');
        bestTime.innerText = 'Best time';
        tr.append(place, car, name, win, bestTime);
        table.append(tr);
        winerBox.append(table);
    }

    rows(place: string, car: string, name: string, win: string, time: string) {
        const table = <HTMLElement>document.querySelector('table');
        const tr = document.createElement('tr');
        tr.append(
            this.place(place),
            this.car(car),
            this.name(name),
            this.win(win),
            this.bestTime(time)
        );
        table.append(tr);
    }

    place(place: string) {
        const td = document.createElement('td');
        td.innerText = place;
        return td;
    }

    car(car: string) {
        const td = document.createElement('td');
        td.className = 'car-table';
        td.style.backgroundColor = `${car}`;
        td.style.margin = '0';
        return td;
    }

    name(name: string) {
        const td = document.createElement('td');
        td.innerText = name;
        return td;
    }

    win(win: string) {
        const td = document.createElement('td');
        td.innerText = win;
        return td;
    }

    bestTime(time: string) {
        const td = document.createElement('td');
        td.innerText = time;
        return td;
    }
}

export const winersTable = new WinersTable();
