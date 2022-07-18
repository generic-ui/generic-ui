import { ColumnConfig } from '../column.config';
export declare abstract class ColumnAutoConfigurator {
    abstract configure(source: ReadonlyArray<any>): ReadonlyArray<ColumnConfig>;
}
