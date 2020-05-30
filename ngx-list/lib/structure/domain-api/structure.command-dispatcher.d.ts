import { CommandDispatcher } from '@generic-ui/hermes';
import { StructureFilterCommandDispatcher } from './filter/structure-filter.command-dispatcher';
import { SourceDispatcher } from '../domain/source/source.dispatcher';
import { StructureId } from '../domain/structure.id';
import { FilterConfig } from './filter/filter-config';
import { QuickFiltersConfig } from './filter/quick-filters.config';
import { SchemaTheme } from '../../../schema/domain/theme/schema-theme';
export declare class StructureCommandDispatcher {
    private readonly commandDispatcher;
    private readonly structureFilterCommandService;
    private readonly sourceDispatcher;
    constructor(commandDispatcher: CommandDispatcher, structureFilterCommandService: StructureFilterCommandDispatcher, sourceDispatcher: SourceDispatcher);
    createStructure(structureId?: StructureId): void;
    enableVerticalScroll(structureId?: StructureId): void;
    disableVerticalScroll(structureId?: StructureId): void;
    setScrollPosition(position: number, structureId?: StructureId): void;
    setOrigin(items: Array<any>, structureId?: StructureId): void;
    setFilterConfig(config: FilterConfig, structureId?: StructureId): void;
    setQuickFiltersConfig(config: QuickFiltersConfig, structureId?: StructureId): void;
    setRowHeight(rowHeight: number, structureId?: StructureId): void;
    setContainerHeight(height: number, structureId?: StructureId): void;
    setRowHeightBasedOnTheme(theme: SchemaTheme, structureId?: StructureId): void;
}
