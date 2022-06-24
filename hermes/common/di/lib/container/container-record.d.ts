import { KeyRegister } from '../key/key.register';
import { ContainerProvider } from './container-provider';
import { Token } from '../token';
export declare class ContainerRecord {
    private readonly keyRegister;
    private readonly containerProvider;
    private readonly recordManager;
    private readonly collectionRecords;
    constructor(keyRegister: KeyRegister, containerProvider: ContainerProvider);
    resolve<T>(token: Token<T>): T;
    resolveCollection<T>(token: Token<T>): ReadonlyArray<T>;
    clear(): void;
    private resolveDependencies;
    private resolveDependency;
    private innerResolve;
    private innerResolveCollection;
}
