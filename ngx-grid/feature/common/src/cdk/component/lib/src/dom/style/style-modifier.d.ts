import { StyleModifierApi } from './style-modifier-api';
import { Modifier } from '../core/modifier';
export declare class StyleModifier extends Modifier<StyleModifierApi> {
    constructor(htmlElement?: HTMLElement);
    protected createModifier(htmlElement: HTMLElement): StyleModifierApi;
    private static readonly StyleModifier;
}
