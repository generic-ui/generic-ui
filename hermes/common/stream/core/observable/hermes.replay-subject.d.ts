import { HermesSubject } from './hermes.subject';
import { HermesSubscription } from '../subscription/hermes.subscription';
import { HermesSubscriber } from './subscriber/hermes.subscriber';
import { HermesOperatorFunction } from './hermes.observable';
export declare class HermesReplaySubject<T> extends HermesSubject<T> {
    private readonly bufferSize;
    private readonly values;
    constructor(bufferSize?: number);
    pipe(...operations: Array<HermesOperatorFunction<any, any>>): HermesReplaySubject<any>;
    next(value: T): void;
    subscribe(next?: (value: T) => void, error?: (error: any) => void, complete?: () => void): HermesSubscription;
    subscribe(subscriber: HermesSubscriber<T>): HermesSubscription;
}
