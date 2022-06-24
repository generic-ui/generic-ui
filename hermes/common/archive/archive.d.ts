import { HermesObservable } from '../stream/core/observable/hermes.observable';
export declare abstract class Archive<T> {
    private readonly archive$;
    protected constructor(value?: T);
    on(): HermesObservable<T>;
    next(value: T): void;
    compare(one: T, two: T): boolean;
}
