import { MessageType } from '../../message/message-type';
export declare const AggregateEventType: FunctionConstructor;
export interface AggregateEventType<T> extends MessageType<T> {
    new (...args: any[]): T;
}
//# sourceMappingURL=aggregate-event-type.d.ts.map