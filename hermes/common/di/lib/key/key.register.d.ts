import { Key } from './key';
import { Token } from '../token';
import { ClassProvider } from '../provider/class/class-provider';
export declare class KeyRegister {
    private readonly records;
    getKey<T>(token: Token<T>): Key<T>;
    getKeyAndTryRegister<T>(token: Token<T>, provider: ClassProvider): Key<T>;
    has<T>(token: Token<T>): boolean;
    set<T>(token: Token<T>, _provider: ClassProvider): void;
    clear(): void;
}
