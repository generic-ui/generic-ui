import { CommandDispatcher } from '@generic-ui/hermes';
import { StructureCommandDispatcher } from '../../../domain-api/structure.command-dispatcher';
import { StructureId } from '../../../domain/structure.id';
import { CompositionId } from '../../../../composition/domain/composition.id';
import { FilterCommandDispatcher } from '../../../../../structure/filter/domain-api/filter.command-dispatcher';
import { SourceDispatcher } from '../../../../../structure/source/domain/source.dispatcher';
import { FilterConfig } from '../../../../../structure/filter/domain-api/filter-config';
import { QuickFiltersConfig } from '../../../../../structure/filter/domain-api/quick-filters.config';
import { SchemaTheme } from '../../../../../schema/domain/theme/schema-theme';
export declare class LocalStructureCommandDispatcher extends StructureCommandDispatcher {
    private readonly structureId;
    private readonly compositionId;
    constructor(structureId: StructureId, compositionId: CompositionId, commandDispatcher: CommandDispatcher, structureFilterCommandService: FilterCommandDispatcher, sourceDispatcher: SourceDispatcher);
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
