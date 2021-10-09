import { CommandDispatcher } from '@generic-ui/hermes';
import { FilterCommandInvoker } from '../../filter/core/api/filter.command-invoker';
import { SourceDispatcher } from '../../source/core/domain/source.dispatcher';
import { StructureId } from '../api/structure.id';
import { FilterConfig } from '../../filter/core/api/filter-config';
import { QuickFiltersConfig } from '../../filter/core/api/quick-filters.config';
import { StructureCommandInvoker } from '../api/structure.command-invoker';
import { SchemaTheme } from '../../../schema/core/api/theme/schema-theme';
export declare class StructureDomainCommandInvoker extends StructureCommandInvoker {
    private readonly commandDispatcher;
    private readonly structureFilterCommandService;
    private readonly sourceDispatcher;
    constructor(commandDispatcher: CommandDispatcher, structureFilterCommandService: FilterCommandInvoker, sourceDispatcher: SourceDispatcher);
    create(structureId: StructureId): void;
    enableVirtualScroll(structureId: StructureId): void;
    disableVirtualScroll(structureId: StructureId): void;
    scrollToTop(structureId: StructureId): void;
    scrollToBottom(structureId: StructureId): void;
    scrollToIndex(index: number, structureId: StructureId): void;
    setScrollPosition(position: number, structureId: StructureId): void;
    setOrigin(items: Array<any>, structureId: StructureId): void;
    setFilterConfig(config: FilterConfig, structureId: StructureId): void;
    setQuickFiltersConfig(config: QuickFiltersConfig, structureId: StructureId): void;
    setRowHeight(rowHeight: number, structureId: StructureId): void;
    setContainerHeight(height: number, structureId: StructureId): void;
    setRowHeightBasedOnTheme(theme: SchemaTheme, structureId: StructureId): void;
}
