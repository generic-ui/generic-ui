import { AttributeModifierApi } from './attribute-modifier-api';
import { Modifier } from '../core/modifier';
export declare class AttributeModifier extends Modifier<AttributeModifierApi> {
    private readonly htmlElement?;
    constructor(htmlElement?: HTMLElement);
    protected createModifier(htmlElement: HTMLElement): AttributeModifierApi;
    private static readonly AttributeModifier;
}
