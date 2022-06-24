import { ColumnAutoConfigurator } from '../../../api/column/auto/column-auto.configurator';
import { ColumnConfig, MultiColumnConfig } from '../../../api/column/column.config';
export declare class DomainColumnAutoConfigurator extends ColumnAutoConfigurator {
    configure(source: ReadonlyArray<any>): ReadonlyArray<ColumnConfig | MultiColumnConfig>;
    private toColumnConfig;
    private getField;
    private getHeader;
    private getType;
}
