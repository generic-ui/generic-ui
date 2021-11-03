export declare class CssClassModifier {
    private readonly classModifier;
    select(htmlElement: HTMLElement): void;
    unselect(htmlElement: HTMLElement): void;
    add(htmlElement: HTMLElement, clazzName: string): void;
    remove(htmlElement: HTMLElement, clazzName: string): void;
    toggle(htmlElement: HTMLElement): void;
}
