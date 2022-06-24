import { Key } from '../key/key';
export declare class RecordManager {
    private readonly records;
    get<T>(key: Key<T>): T;
    has<T>(key: Key<T>): boolean;
    set<T>(key: Key<T>, record: T): void;
    clear(): void;
}
