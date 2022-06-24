export interface Constructor<T> {
    new (...args: any[]): T;
}
export interface AbstractType<T> extends Function {
    prototype: T;
}
export declare type Token<T> = Constructor<T> | AbstractType<T> | string;
