import { CommandDispatcher } from '@generic-ui/hermes';
import { StructureCommandDispatcher } from '../../../domain-api/structure.command-dispatcher';
import { StructureId } from '../../../domain/structure.id';
import { CompositionId } from '../../../../composition/domain/composition.id';
import { StructureFilterCommandDispatcher } from '../../../domain-api/filter/structure-filter.command-dispatcher';
import { SourceDispatcher } from '../../../domain/source/source.dispatcher';
import { FilterConfig } from '../../../domain-api/filter/filter-config';
import { QuickFiltersConfig } from '../../../domain-api/filter/quick-filters.config';
import { SchemaTheme } from '../../../../../schema/domain/theme/schema-theme';
export declare class LocalStructureCommandDispatcher extends StructureCommandDispatcher {
    private readonly structureId;
    private readonly compositionId;
    constructor(structureId: StructureId, compositionId: CompositionId, commandDispatcher: CommandDispatcher, structureFilterCommandService: StructureFilterCommandDispatcher, sourceDispatcher: SourceDispatcher);
    createStructure(): void;
    enableVerticalScroll(): void;
    disableVerticalScroll(): void;
    setScrollPosition(position: number): void;
    setOrigin(items: Array<any>): void;
    setFilterConfig(config: FilterConfig, structureId?: StructureId): void;
    setQuickFiltersConfig(config: QuickFiltersConfig, structureId?: StructureId): void;
    setRowHeight(rowHeight: number): void;
    setContainerHeight(rowHeight: number): void;
    setRowHeightBasedOnTheme(theme: SchemaTheme): void;
}
