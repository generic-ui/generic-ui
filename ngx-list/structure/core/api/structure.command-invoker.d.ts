import { CommandInvoker } from '@generic-ui/hermes';
import { StructureId } from './structure.id';
import { FilterConfig } from '../../filter/core/api/filter-config';
import { QuickFiltersConfig } from '../../filter/core/api/quick-filters.config';
import { SchemaTheme } from '../../../schema/core/api/theme/schema-theme';
import { CellEditConfig } from '../../grid/core/api/edit/cell-edit.config';
import * as i0 from "@angular/core";
export declare abstract class StructureCommandInvoker implements CommandInvoker {
    protected constructor();
    abstract create(structureId: StructureId): void;
    abstract enableVirtualScroll(structureId: StructureId): void;
    abstract disableVirtualScroll(structureId: StructureId): void;
    abstract scrollToTop(structureId: StructureId): void;
    abstract scrollToBottom(structureId: StructureId): void;
    abstract scrollToIndex(index: number, structureId: StructureId): void;
    abstract setScrollPosition(position: number, structureId: StructureId): void;
    abstract setOrigin(items: Array<any>, structureId: StructureId): void;
    abstract setFilterConfig(config: FilterConfig, structureId: StructureId): void;
    abstract setQuickFiltersConfig(config: QuickFiltersConfig, structureId: StructureId): void;
    abstract setRowHeight(rowHeight: number, structureId: StructureId): void;
    abstract setContainerHeight(height: number, structureId: StructureId): void;
    abstract setRowHeightBasedOnTheme(theme: SchemaTheme, structureId: StructureId): void;
    abstract setCellEdit(cellEdit: CellEditConfig, structureId: StructureId): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StructureCommandInvoker, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<StructureCommandInvoker>;
}
//# sourceMappingURL=structure.command-invoker.d.ts.map