import { CollectionRecordFactory } from './collection-record.factory';
import { Dependency } from '../dependency';
export declare class ValueCollectionRecordFactory extends CollectionRecordFactory {
    private readonly providers;
    getDeps(): Array<Array<Dependency>>;
    create(_setOfDeps: Array<Array<any>>): any;
    addProvider(provider: any): void;
}
