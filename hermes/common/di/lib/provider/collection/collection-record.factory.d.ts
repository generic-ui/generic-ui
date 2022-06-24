import { Dependency } from '../dependency';
export declare abstract class CollectionRecordFactory {
    abstract getDeps(): Array<Array<Dependency>>;
    abstract create(setOfDeps: Array<Array<any>>): any;
    abstract addProvider(provider: any): void;
}
