import { ClassModifierApi } from './class-modifier-api';
import { Modifier } from '../core/modifier';
export declare class ClassModifier extends Modifier<ClassModifierApi> {
    private readonly htmlElement?;
    constructor(htmlElement?: HTMLElement);
    protected createModifier(htmlElement: HTMLElement): ClassModifierApi;
    private static readonly ClassModifier;
}
