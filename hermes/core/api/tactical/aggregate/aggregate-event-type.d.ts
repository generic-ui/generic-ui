import { MessageType } from '../../../domain/message/message-type';
export declare const AggregateEventType: FunctionConstructor;
export interface AggregateEventType<T> extends MessageType<T> {
    new (...args: any[]): T;
}
