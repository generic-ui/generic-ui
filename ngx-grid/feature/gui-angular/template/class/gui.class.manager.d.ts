export declare class GuiClassManager {
    private readonly nativeElement;
    private classes;
    constructor(nativeElement: HTMLElement);
    update(newClasses: Array<string>): void;
    private add;
    private remove;
    private addClassToDomElement;
    private removeClassFromDomElement;
}
