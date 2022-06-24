import { ValueProvider } from './value-provider';
import { Dependency } from '../dependency';
import { RecordFactory } from '../record.factory';
export declare class ValueRecordFactory extends RecordFactory {
    constructor(provider: ValueProvider);
    getDeps(): ReadonlyArray<Dependency>;
    create(_depsInstances: ReadonlyArray<any>): any;
}
