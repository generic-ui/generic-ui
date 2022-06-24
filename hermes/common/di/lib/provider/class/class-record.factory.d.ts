import { ClassProvider } from './class-provider';
import { RecordFactory } from '../record.factory';
export declare class ClassRecordFactory extends RecordFactory {
    constructor(provider: ClassProvider);
    create(depsInstances: ReadonlyArray<any>): any;
}
