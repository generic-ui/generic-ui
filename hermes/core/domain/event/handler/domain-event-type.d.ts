import { MessageType } from '../../message/message-type';
export declare const DomainEventType: FunctionConstructor;
export interface DomainEventType<T> extends MessageType<T> {
    new (...args: any[]): T;
}
