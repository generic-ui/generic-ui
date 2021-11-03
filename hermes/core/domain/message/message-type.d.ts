export declare const MessageType: FunctionConstructor;
export interface MessageType<T> extends Function {
    new (...args: any[]): T;
}
