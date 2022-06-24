import { Key } from '../key/key';
import { RecordFactory } from './record.factory';
export declare class ProviderManager {
    private readonly providers;
    get<T>(key: Key<T>): RecordFactory;
    has<T>(key: Key<T>): boolean;
    set<T>(key: Key<T>, recordFactory: RecordFactory): void;
    clear(): void;
}
