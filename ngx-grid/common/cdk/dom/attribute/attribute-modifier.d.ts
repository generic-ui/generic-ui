import { AttributeModifierApi } from './attribute-modifier-api';
import { Modifier } from '../core/modifier';
export declare class AttributeModifier extends Modifier<AttributeModifierApi> {
    private readonly htmlElement?;
    private static readonly AttributeModifier;
    constructor(htmlElement?: HTMLElement);
    protected createModifier(htmlElement: HTMLElement): AttributeModifierApi;
}
