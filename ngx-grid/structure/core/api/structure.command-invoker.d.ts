import { CommandInvoker } from '@generic-ui/hermes';
import { StructureId } from '../domain/structure.id';
import { FilterConfig } from '../../filter/core/api/filter-config';
import { QuickFiltersConfig } from '../../filter/core/api/quick-filters.config';
import { SchemaTheme } from '../../../schema/core/api/theme/schema-theme';
export declare abstract class StructureCommandInvoker implements CommandInvoker {
    protected constructor();
    abstract create(structureId?: StructureId): void;
    abstract enableVerticalScroll(structureId?: StructureId): void;
    abstract disableVerticalScroll(structureId?: StructureId): void;
    abstract scrollToTop(structureId?: StructureId): void;
    abstract scrollToBottom(structureId?: StructureId): void;
    abstract scrollToIndex(index: number, structureId?: StructureId): void;
    abstract setScrollPosition(position: number, structureId?: StructureId): void;
    abstract setOrigin(items: Array<any>, structureId?: StructureId): void;
    abstract setFilterConfig(config: FilterConfig, structureId?: StructureId): void;
    abstract setQuickFiltersConfig(config: QuickFiltersConfig, structureId?: StructureId): void;
    abstract setRowHeight(rowHeight: number, structureId?: StructureId): void;
    abstract setContainerHeight(height: number, structureId?: StructureId): void;
    abstract setRowHeightBasedOnTheme(theme: SchemaTheme, structureId?: StructureId): void;
}
