import { HermesSubscription } from '../subscription/hermes.subscription';
import { HermesSubscriber } from './subscriber/hermes.subscriber';
import { HermesObserver } from './hermes.observer';
export interface HermesOperatorFunction<T, R> {
    (source: HermesObservable<T>): HermesObservable<R>;
}
export declare class HermesObservable<T> {
    private source;
    protected readonly generatorFn: any;
    private generatorFinalize;
    constructor(generator?: (observer?: HermesObserver<T>) => void);
    pipe<T, R>(...operations: Array<HermesOperatorFunction<any, any>>): HermesObservable<any>;
    private innerPipe;
    subscribe(next?: (value: T) => void, error?: (error: any) => void, complete?: () => void): HermesSubscription;
    subscribe(subscriber: HermesSubscriber<T>): HermesSubscription;
    subscribe(observer: Partial<HermesObserver<T>>): HermesSubscription;
    protected createSubscriber(next?: (value: T) => void, error?: (error: any) => void, complete?: () => void): HermesSubscriber<T>;
    protected getSubscription(): HermesSubscription;
    private isObserver;
}
//# sourceMappingURL=hermes.observable.d.ts.map