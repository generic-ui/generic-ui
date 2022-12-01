import { Token } from '../token';
export declare class Key<T> {
    protected readonly token: Token<T>;
    private readonly stringKey;
    protected constructor(token: Token<T>);
    static from<T>(token: Token<T>): Key<T>;
    toString(): string;
    private generateStringKey;
}
