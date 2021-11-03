import { HermesObservable } from '../hermes.observable';
import { HermesSubscriber } from '../subscriber/hermes.subscriber';
export declare class HermesSingle<T> extends HermesObservable<T> {
    protected createSubscriber(next?: (value: T) => void, error?: (error: any) => void, complete?: () => void): HermesSubscriber<T>;
}
//# sourceMappingURL=hermes.single.d.ts.map