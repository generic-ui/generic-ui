import { ModifierApi } from '../core/modifier-api';
export interface AttributeModifierApi extends ModifierApi {
    setAttribute(name: string, value: string): void;
    removeAttribute(name: string): void;
}
