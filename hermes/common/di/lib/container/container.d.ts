import { Constructor, Token } from '../token';
import { ClassProvider } from '../provider/class/class-provider';
import { FactoryProvider } from '../provider/factory/factory-provider';
import { ValueProvider } from '../provider/value/value-provider';
export interface Container {
    resolve<T>(token: Token<T>): T;
    resolveCollection<T>(token: Token<T>): ReadonlyArray<T>;
    provide<T>(clazz: Constructor<T>): Container;
    provide<T>(token: Token<T>, provider: ClassProvider): Container;
    provide<T>(token: Token<T>, provider?: Constructor<T> | ClassProvider): Container;
    provideClass<T>(token: Token<T>, provider: ClassProvider): Container;
    provideValue<T>(token: Token<T>, provider: ValueProvider): Container;
    provideFactory<T>(token: Token<T>, provider: FactoryProvider): Container;
    provideCollection<T>(token: Token<T>, provider: ClassProvider): Container;
    provideFactoryCollection<T>(token: Token<T>, provider: FactoryProvider): Container;
    provideValueCollection<T>(token: Token<T>, provider: ValueProvider): Container;
    clear(): void;
    clearOnlyRecords(): void;
}
