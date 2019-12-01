import { CommandDispatcher } from '@generic-ui/hermes';
import { StructureFilterCommandService } from '../../ui-api/structure/filter/structure.filter.command.service';
import { SourceDispatcher } from '../../domain/source/command/source.dispatcher';
import { StructureId } from '../../domain/structure-id';
import { SortingConfig } from '../../ui-api/structure/sorting-config';
import { FieldId } from '../../domain/structure/command/field/data-type/field.id';
import { CompositionId } from '../../domain/composition/composition-id';
import { FilterConfig } from '../../ui-api/structure/filter/filter-config';
import { QuickFiltersConfig } from '../../ui-api/structure/filter/quick-filters.config';
import { SearchConfig } from '../../ui-api/structure/search/search-config';
import { ColumnConfig } from '../../domain/composition/column.config';
export declare class StructureCommandService {
    private readonly commandDispatcher;
    private readonly structureFilterCommandService;
    private readonly sourceDispatcher;
    constructor(commandDispatcher: CommandDispatcher, structureFilterCommandService: StructureFilterCommandService, sourceDispatcher: SourceDispatcher);
    init(structureId?: StructureId): void;
    enableVerticalScroll(structureId?: StructureId): void;
    disableVerticalScroll(structureId?: StructureId): void;
    setScrollPosition(position: number, structureId?: StructureId): void;
    setOrigin(items: Array<any>, structureId?: StructureId): void;
    setSortingConfig(config: SortingConfig, structureId?: StructureId): void;
    toggleSort(fieldId: FieldId, compositionId?: CompositionId, structureId?: StructureId): void;
    setFilterConfig(config: FilterConfig, structureId?: StructureId): void;
    setQuickFiltersConfig(config: QuickFiltersConfig, structureId?: StructureId): void;
    setSearchingConfig(config: SearchConfig, structureId?: StructureId): void;
    initFields(columns: Array<ColumnConfig>, compositionId: CompositionId, structureId?: StructureId): void;
}
