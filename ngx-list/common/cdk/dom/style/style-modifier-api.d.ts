import { ModifierApi } from '../core/modifier-api';
import { StyleName } from './style-name';
export interface StyleModifierApi extends ModifierApi {
    setStyleByName(name: string, value: string): void;
    setWidth(value: number): void;
    setHeight(value: number): void;
    setPaddingTop(value: number): void;
    remove(name: StyleName): void;
    removeStyleByName(name: string): void;
    clear(): void;
}
