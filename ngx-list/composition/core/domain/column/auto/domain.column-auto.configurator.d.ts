import { ColumnAutoConfigurator } from '../../../api/column/auto/column-auto.configurator';
import { ColumnConfig, MultiColumnConfig } from '../../../api/column/column.config';
import * as i0 from "@angular/core";
export declare class DomainColumnAutoConfigurator extends ColumnAutoConfigurator {
    configure(source: ReadonlyArray<any>): ReadonlyArray<ColumnConfig | MultiColumnConfig>;
    private toColumnConfig;
    private getField;
    private getHeader;
    private getType;
    static ɵfac: i0.ɵɵFactoryDeclaration<DomainColumnAutoConfigurator, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DomainColumnAutoConfigurator>;
}
//# sourceMappingURL=domain.column-auto.configurator.d.ts.map