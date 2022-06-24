import { FactoryProvider } from './factory-provider';
import { Dependency } from '../dependency';
import { RecordFactory } from '../record.factory';
export declare class FactoryRecordFactory extends RecordFactory {
    constructor(provider: FactoryProvider);
    getDeps(): ReadonlyArray<Dependency>;
    create(depsInstances: ReadonlyArray<any>): any;
}
