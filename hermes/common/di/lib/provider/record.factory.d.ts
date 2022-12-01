import { ClassProvider } from './class/class-provider';
import { Dependency } from './dependency';
export declare abstract class RecordFactory {
    protected readonly provider: ClassProvider;
    protected constructor(provider: ClassProvider);
    abstract create(depsInstances: ReadonlyArray<any>): any;
    getDeps(): ReadonlyArray<Dependency>;
}
