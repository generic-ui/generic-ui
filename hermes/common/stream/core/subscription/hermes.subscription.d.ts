import { HermesSubscriber } from '../observable/subscriber/hermes.subscriber';
export declare class HermesSubscription {
    private readonly subscriber;
    private closed;
    constructor(subscriber: HermesSubscriber<any>, isClosed?: boolean);
    unsubscribe(): void;
    getFinalize(): () => void;
}
