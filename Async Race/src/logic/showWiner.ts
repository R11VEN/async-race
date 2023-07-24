class ShowWiner {
    show(name: string, time: number) {
        const winOverlay = <HTMLDivElement>document.querySelector('.win-overlay');
        winOverlay.innerText = `${name} finished the race first in ${time} s`;
        winOverlay.style.display = 'flex';
        winOverlay.addEventListener('click', () => winOverlay.style.display = 'none');
    }
}

export const showWiner = new ShowWiner();