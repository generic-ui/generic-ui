import { ModifierApi } from '../core/modifier-api';
export interface ClassModifierApi extends ModifierApi {
    add(...classes: Array<string>): void;
    remove(...classes: Array<string>): void;
    clear(): void;
}
