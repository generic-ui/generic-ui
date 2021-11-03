import { MessageType } from '../../message/message-type';
export declare const CommandType: FunctionConstructor;
export interface CommandType<T> extends MessageType<T> {
    new (...args: any[]): T;
}
