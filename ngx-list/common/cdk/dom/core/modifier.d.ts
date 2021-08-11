import { ModifierApi } from './modifier-api';
export declare abstract class Modifier<T extends ModifierApi> {
    private readonly hostElement?;
    protected constructor(hostElement?: HTMLElement);
    protected abstract createModifier(htmlElement: HTMLElement): T;
    getElement(htmlElement: HTMLElement): T;
    getHost(): T;
}
