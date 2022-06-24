import { ClassProvider } from './class/class-provider';
import { Dependency } from './dependency';
export declare abstract class RecordFactory {
    protected readonly provider: ClassProvider;
    protected constructor(provider: ClassProvider);
    getDeps(): ReadonlyArray<Dependency>;
    abstract create(depsInstances: ReadonlyArray<any>): any;
}
