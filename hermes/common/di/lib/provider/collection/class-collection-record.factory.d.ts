import { ClassProvider } from '../class/class-provider';
import { Dependency } from '../dependency';
import { CollectionRecordFactory } from './collection-record.factory';
export declare class ClassCollectionRecordFactory extends CollectionRecordFactory {
    private readonly providers;
    getDeps(): Array<Array<Dependency>>;
    create(setOfDeps: Array<Array<any>>): any;
    addProvider(provider: ClassProvider): void;
}
