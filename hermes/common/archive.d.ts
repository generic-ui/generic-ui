import { HermesObservable } from './stream/observable/hermes.observable';
export declare abstract class Archive<T> {
    private readonly archive$;
    protected constructor(value?: T);
    on(): HermesObservable<T>;
    next(value: T): void;
    compare(one: T, two: T): boolean;
}
//# sourceMappingURL=archive.d.ts.map