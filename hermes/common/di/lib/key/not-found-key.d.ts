import { Key } from './key';
import { Token } from '../token';
export declare class NotFoundKey<T> extends Key<T> {
    constructor(token: Token<T>);
    getError(): string;
}
