import { Constructor, Token } from '../token';
import { ClassProvider } from '../provider/class/class-provider';
import { ValueProvider } from '../provider/value/value-provider';
import { FactoryProvider } from '../provider/factory/factory-provider';
import { RecordFactory } from '../provider/record.factory';
import { CollectionRecordFactory } from '../provider/collection/collection-record.factory';
import { KeyRegister } from '../key/key.register';
import { Key } from '../key/key';
export declare class ContainerProvider {
    private readonly keyRegister;
    private readonly providerManager;
    private readonly collectionProviders;
    constructor(keyRegister: KeyRegister);
    provide<T>(clazz: Constructor<T>): void;
    provide<T>(token: Token<T>, provider: ClassProvider): void;
    provideClass<T>(token: Token<T>, provider: ClassProvider): void;
    provideValue<T>(token: Token<T>, provider: ValueProvider): void;
    provideFactory<T>(token: Token<T>, provider: FactoryProvider): void;
    provideCollection<T>(token: Token<T>, provider: ClassProvider): void;
    provideFactoryCollection<T>(token: Token<T>, provider: FactoryProvider): void;
    provideValueCollection<T>(token: Token<T>, provider: ValueProvider): void;
    clear(): void;
    getRecordFactory<T>(key: Key<T>): RecordFactory;
    getCollectionRecordFactory<T>(key: Key<T>): CollectionRecordFactory;
    private addProvider;
    private addCollectionProvider;
}
