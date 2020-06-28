import { Key } from './key';
import { Optional } from '../optional';
export declare class KeyMap<K extends Key, T> {
    private readonly keys;
    private readonly values;
    get(key: K): Optional<T>;
    has(key: K): boolean;
    set(key: K, value: T): void;
    private getInternalKey;
}
