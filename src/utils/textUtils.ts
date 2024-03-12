export const isOverflown = (clientHeight: number, scrollHeight: number) => scrollHeight > clientHeight;

export const resizeText = (element: HTMLElement, parent: HTMLElement, maxSize: number) => {
    let i = 1;
    let overflow = false;

    while (!overflow && i <= maxSize) {
        element.style.fontSize = `${i}px`;
        overflow = isOverflown(parent.clientHeight, parent.scrollHeight);
        if (!overflow) i++;
    }

    element.style.fontSize = `${i - 1}px`;
};
