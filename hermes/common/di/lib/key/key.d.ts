import { Token } from '../token';
export declare class Key<T> {
    protected readonly token: Token<T>;
    private readonly stringKey;
    static from<T>(token: Token<T>): Key<T>;
    protected constructor(token: Token<T>);
    toString(): string;
    private generateStringKey;
}
