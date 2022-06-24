import { Dependency } from '../dependency';
import { FactoryProvider } from '../factory/factory-provider';
import { CollectionRecordFactory } from './collection-record.factory';
export declare class FactoryCollectionRecordFactory extends CollectionRecordFactory {
    private readonly providers;
    getDeps(): Array<Array<Dependency>>;
    create(setOfDeps: Array<Array<any>>): any;
    addProvider(provider: FactoryProvider): void;
}
