class toggleAddRemove {
    toggle(element: HTMLElement, className: string): void {
        element.classList.toggle(className);
    }

    close(element: HTMLElement): void {
        element.classList.remove('open');
    }

    open(element: HTMLElement): void {
        element.classList.add('open');
    }
}

export const calssToggle = new toggleAddRemove();
