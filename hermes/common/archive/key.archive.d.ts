import { ReactiveService } from '../reactive/reactive.service';
import { Optional } from '../optional';
import { HermesObservable } from '../stream/core/observable/hermes.observable';
import { Key } from '../collection/key';
import { HermesSingle } from '../stream/core/observable/single/hermes.single';
export declare abstract class KeyArchive<K extends Key, T> extends ReactiveService {
    private readonly archive;
    private readonly archive$;
    private defaultValue;
    protected constructor(defaultValue?: T);
    on(key: K): HermesObservable<T>;
    once(key: K): HermesSingle<T>;
    find(key: K): Optional<T>;
    next(key: K, value: T): void;
    protected equals(a: T, b: T): boolean;
    protected createDefaultValue(defaultValue: T): T;
    private tryToInitDefault;
}
